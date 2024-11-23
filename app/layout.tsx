import type { Metadata } from 'next';
import './globals.css';
import Navbar from './navbar';

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
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
