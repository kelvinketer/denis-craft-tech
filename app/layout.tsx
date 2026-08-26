import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileCTA from "@/components/MobileCTA";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Denis Craft Technologies | Signage & Branding Solutions",
  description: "Premium Signage, 3D Acrylic Letters, Vehicle Branding, and Large-Format Printing in Nairobi, Kenya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-charcoal text-white pb-16 md:pb-0`}>
        <Navbar />
        {children}
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}