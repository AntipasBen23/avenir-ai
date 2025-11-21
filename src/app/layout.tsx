// src/app/layout.tsx
import type { Metadata } from "next";
import { Lato, League_Spartan } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
});

const leagueSpartan = League_Spartan({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-league-spartan',
});

export const metadata: Metadata = {
  title: "Avenir AI",
  description: "Empower benefits professionals with data-driven insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${leagueSpartan.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}