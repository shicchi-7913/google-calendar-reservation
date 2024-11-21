import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/navbar';

export const metadata: Metadata = {
  title: 'Google Calendar Reservation',
  description: 'Google Calendar Reservation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="min-h-screen bg-gray-50">{children}</div>
      </body>
    </html>
  );
}
