import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request) {
  try {
    const { cart, total, customerInfo } = await request.body.json();

    // Configure Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

    // Prepare data for Google Sheets
    const orderDate = new Date().toISOString();
    const orderId = `ORD-${Date.now()}`;

    // Create rows for each item
    const rows = cart.map(item => [
      orderId,
      orderDate,
      item.name,
      item.quantity,
      item.price,
      item.price * item.quantity,
      customerInfo?.name || 'N/A',
      customerInfo?.email || 'N/A',
      customerInfo?.phone || 'N/A',
      total
    ]);

    // Append to Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Orders!A:J', // Adjust sheet name and range as needed
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: rows,
      },
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Order submitted successfully!',
      orderId 
    });

  } catch (error) {
    console.error('Error sending to Google Sheets:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit order' },
      { status: 500 }
    );
  }
}