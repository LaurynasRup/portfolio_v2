import './globals.css';
import { Red_Hat_Display } from 'next/font/google';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const rh = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
});

export const metadata = {
  title: 'Laurynas Rupainis',
  description: 'Laurynas Rupainis - web developer portfolio',
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
        <Footer />
      </body>
    </html>
  );
}
