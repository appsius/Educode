import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Educode Appss',
  description:
    'An nextjs app that applied the website page optimization perfectly.',
  icons: [{ rel: 'icon', url: 'favicon.ico' }],
  other: {
    'theme-color': '#0d1117',
    'color-scheme': 'dark only',
    'twitter:image': 'https://ibb.co/G7HsB9d', // share image
    'twitter:card': 'summary_large_image',
    'og:url': 'https://ibb.co/G7HsB9d',
    'og:type': 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-black-100 font-poppins'>{children}</body>
    </html>
  );
}
