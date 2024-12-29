import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import localFont from "next/font/local";

const mona = localFont({
  variable: "--font-mona",
  fallback: ["sans-serif"],
  display: "swap",
  src: [
    {
      path: "./fonts/Mona_Sans/static/MonaSans_SemiExpanded-Regular.ttf",
      weight: "500",
      style: "regular",
    },
  ],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${mona.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
