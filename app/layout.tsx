import type { Metadata } from "next";
import { Syne, Outfit, Orbitron, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YOUR COMPANY NAME | LED Game Rentals for Events",
  description:
    "Premium LED party game rentals delivered to your event. LED ping pong, mini-golf, cornhole, and more — perfect for weddings, corporate events, birthday parties, and nightlife.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${outfit.variable} ${orbitron.variable} ${dmSans.variable} bg-[#07090f] font-[var(--font-body)] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
