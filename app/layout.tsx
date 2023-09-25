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
    'twitter:image':
      'https://images.unsplash.com/photo-1520092352425-9699926a9b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'twitter:card': 'summary_large_image',
    'og:url': 'https://appsius.netlify.app',
    'og:image':
      'https://images.unsplash.com/photo-1520092352425-9699926a9b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
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
