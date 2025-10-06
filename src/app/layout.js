import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
 

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Spice Store - E-commerce',
  description: 'Buy premium quality spices online',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <Header/>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}