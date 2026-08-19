import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteMetadata } from '@/data/nat';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: [
    'ortodoncia',
    'Invisalign',
    'brackets',
    'ortopedia maxilofacial',
    'Zapopan',
    'Jalisco',
    'Dr. Alexander Cerda',
  ],
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    locale: siteMetadata.locale,
    type: 'website',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang={siteMetadata.locale} className={inter.variable}>
      <body className="min-h-screen bg-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
