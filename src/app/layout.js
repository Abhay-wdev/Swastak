import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast'; // ✅ Import Toaster
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import FloatingCart from './components/FloatingCart';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Spice Store - E-commerce',
  description: 'Buy premium quality spices online',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar and Header */}
        <Navbar />
        <Header />

        {/* Main content */}
        <main className="min-h-screen">{children}</main>
<Footer />

<FloatingContact/>
<FloatingCart/>
        {/* ✅ Toaster for toast notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              style: { background: '#10b981', color: '#fff' },
            },
            error: {
              style: { background: '#ef4444', color: '#fff' },
            },
          }}
        />
      </body>
    </html>
  );
}
