import type { Metadata } from 'next';
import './globals.css';
import { Sidebar } from '@/components/ui/sidebar';

export const metadata: Metadata = {
  title: 'Sentient',
  description: 'AI Chat Assistant',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <div className="w-64">
            {' '}
            {/* Sidebar */}
            <Sidebar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
