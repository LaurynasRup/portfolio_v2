import './globals.css';
import { Red_Hat_Display, Major_Mono_Display } from 'next/font/google';
import Nav from '../../components/Nav';

const red_hat_display = Red_Hat_Display({ subsets: ['latin'] });

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
      <body className={red_hat_display.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
