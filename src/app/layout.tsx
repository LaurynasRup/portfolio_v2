import './globals.css';
import { Red_Hat_Display } from 'next/font/google';
import Nav from '../../components/Nav';

const rh = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
});

export const metadata = {
  title: 'Laurynas Rupainis',
  description: 'Laurynas Ruapinis - web developer prtfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rh.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
