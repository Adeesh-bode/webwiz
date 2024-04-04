'use client'
import { Cinzel_Decorative } from 'next/font/google';
import { SnackbarProvider } from 'notistack'; 
import "./globals.css";

const CinzelDecorative = Cinzel_Decorative({
  weight: '700',
  style: 'normal',
  preload: true,
  subsets: ["latin"] 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={CinzelDecorative.className}>
        <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}> 
          <main>
            {children}
          </main>
        </SnackbarProvider>
      </body>
    </html>
  )
}
