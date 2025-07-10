import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const SourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Kleb.letter",
  description: "Calebe's trajectory documentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Sidebar />
      <body className={`${SourceSerif4.variable} antialiased`}>{children}</body>
    </html>
  );
}
