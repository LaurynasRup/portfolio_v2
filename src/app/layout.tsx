import './globals.css';
import { Red_Hat_Text } from 'next/font/google';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import CustomCursor from '../../components/CustomCursor';
import { ThemeProvider } from 'next-themes'

const rh = Red_Hat_Text({
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
        <ThemeProvider>
          <Nav />
          {children}
          </ThemeProvider>
        <Footer />
        <CustomCursor />
      </body>
    </html>
  );
}
