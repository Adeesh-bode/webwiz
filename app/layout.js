import { Cinzel_Decorative } from 'next/font/google';
import "./globals.css";

// Configure the font with the required subset and enable preloading
const CinzelDecorative = Cinzel_Decorative({
  weight: '700',
  style: 'normal',
  preload: true,
  subsets: ["latin"] // Specify the subset to preload
});

export const metadata = {
  title: "Webwiz",
  description: "Developed by Adesh Bode",
};

export default function RootLayout({ children }) {
  return (
    <div className={CinzelDecorative.className}>
      {children}
    </div>
  );
}
