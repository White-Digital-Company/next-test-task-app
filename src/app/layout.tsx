import './globals.css';
import { QueryProvider } from '@/components/QueryProvider';
import Sidebar from '@/components/SideBar';
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
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${notoSans.variable}  h-full`}
    >
      <body className="flex min-h-screen h-full">
        <QueryProvider>
          <Sidebar />
          <main className="flex-1 overflow-auto">{children}</main>
        </QueryProvider>
      </body>
    </html>
  );
}
