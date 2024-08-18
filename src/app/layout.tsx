import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '600'] });

export const metadata: Metadata = {
  title: "Usługi Minikoparką. Neonil Palii",
  description: "Usługi Minikoparką. Roboty ziemne. Zlecenia budowlane",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${poppins.className} font-serif bg-[#333333] text-white w-screen `}>{children}</body>
    </html>
  );
}