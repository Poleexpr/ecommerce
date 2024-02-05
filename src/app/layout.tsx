import classNames from 'classnames';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html className='h-full' lang='en'>
    <body className={classNames('relative h-full font-sans antialiased', inter.className)}>
      <div className='relative flex flex-col min-h-screen'>
        <Navbar />
        <div className='flex-grow flex-1'>{children}</div>
      </div>
    </body>
  </html>
);

export default RootLayout;
