import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/ui/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mr-8 ml-8 flex flex-col min-h-screen`}>
        <div className="flex flex-col grow">
          <Header />
          {children}
        </div>
        <footer className="mt-auto font-mono text-xs/6 font-medium text-gray-500 text-center py-4">
          built by NT
        </footer>
      </body>
    </html>
  );
}
