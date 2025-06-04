'use client';
import './globals.css';
import Sidebar from '@/components/SideBar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { Poppins } from 'next/font/google';
import { Noto_Sans } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${notoSans.variable}  h-full`}
    >
      <body className="flex min-h-screen h-full">
        <QueryClientProvider client={queryClient}>
          <Sidebar />
          <main className="flex-1 p-6 overflow-auto">{children}</main>
        </QueryClientProvider>
      </body>
    </html>
  );
}
