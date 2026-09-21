import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import MobileCTA from "@/components/MobileCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Denis Craft Technologies | Signage & Branding Solutions",
  description:
    "Premium Signage, 3D Acrylic Letters, Vehicle Branding, and Large-Format Printing in Nairobi, Kenya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>{children}</main>

        <MobileCTA />

        <Footer />
      </body>
    </html>
  );
}