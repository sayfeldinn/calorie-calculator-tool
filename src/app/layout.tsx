import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calorie Calculator",
  description: "Calculate your daily calorie requirements based on your profile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} font-sans antialiased bg-slate-900 text-slate-100 min-h-screen selection:bg-primary/30`}
      >
        {children}
      </body>
    </html>
  );
}
