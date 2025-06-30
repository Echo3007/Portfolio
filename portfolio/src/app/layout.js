import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter, Calistoga } from 'next/font/google';
import { twMerge } from 'tailwind-merge';


const inter = Inter({ subsets: ['latin'], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ['latin'], variable: "--font-serif", weight: ["400"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Angela Pellillo - Portfolio",
  description: "Angela Pellillo's Portfolio, displaying projects completed during her BSc(Hons) Computer Science.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={twMerge(inter.variable, calistoga.variable, "min-h-screen text-black antialiased font-sans")} style={{
          backgroundImage:
            'linear-gradient(to bottom right, #f8a5a5, #fcd5a5, #fff9a5, #b6e2b6, #a5c5ff, #d1a5e9)'
        }}
      >

        {children}
      </body>
    </html>
  );
}
