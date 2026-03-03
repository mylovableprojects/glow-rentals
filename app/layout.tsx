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
  title: {
    default: "LED Party Game Rentals Chicago | GlowRentals",
    template: "%s | GlowRentals Chicago",
  },
  description:
    "Chicago's #1 LED party game rental company. LED ping pong tables, dance floors, mini golf, cornhole & more — delivered, set up, and ready to glow at your event. Serving Chicago, Naperville, Evanston, Schaumburg & all suburbs.",
  keywords: [
    "LED game rentals Chicago",
    "LED party games Chicago",
    "LED ping pong rental Chicago",
    "LED dance floor rental Chicago",
    "LED mini golf rental Chicago",
    "glow party rentals Chicago",
    "neon party games Chicago",
    "LED cornhole rental Chicago",
    "LED furniture rental Chicago",
    "giant LED 4 in a row rental Chicago",
    "party game rentals Chicago suburbs",
    "LED event games Chicago",
    "corporate event games Chicago",
    "wedding reception games Chicago",
    "birthday party games Chicago",
    "glow in the dark party Chicago",
    "LED game rental Naperville",
    "LED game rental Evanston",
    "LED game rental Schaumburg",
    "party rentals Chicago Illinois",
  ],
  authors: [{ name: "GlowRentals" }],
  creator: "GlowRentals",
  publisher: "GlowRentals",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://glowrentals.com",
    siteName: "GlowRentals",
    title: "LED Party Game Rentals Chicago | GlowRentals",
    description:
      "Chicago's #1 LED party game rental company. LED ping pong, dance floors, mini golf & more — delivered and set up at your Chicago event.",
    images: [
      {
        url: "/games/pingpong.png",
        width: 1200,
        height: 630,
        alt: "GlowRentals — LED Party Game Rentals Chicago",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LED Party Game Rentals Chicago | GlowRentals",
    description:
      "Chicago's #1 LED party game rental company. LED ping pong, dance floors, mini golf & more — delivered to your Chicago event.",
    images: ["/games/pingpong.png"],
  },
  // Geographic meta tags for local SEO
  other: {
    "geo.region": "US-IL",
    "geo.placename": "Chicago, Illinois",
    "geo.position": "41.8781;-87.6298",
    ICBM: "41.8781, -87.6298",
  },
};

// JSON-LD structured data — LocalBusiness schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EntertainmentBusiness",
  name: "GlowRentals",
  description:
    "Chicago's premier LED party game rental company. We deliver, set up, and pick up LED party games for weddings, corporate events, birthday parties, nightlife events, and more.",
  url: "https://glowrentals.com",
  telephone: "+10000000000",
  email: "hello@yourcompany.com",
  priceRange: "$$",
  image: "https://glowrentals.com/games/pingpong.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chicago",
    addressRegion: "IL",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.8781,
    longitude: -87.6298,
  },
  areaServed: [
    { "@type": "City", "name": "Chicago" },
    { "@type": "City", "name": "Naperville" },
    { "@type": "City", "name": "Evanston" },
    { "@type": "City", "name": "Oak Park" },
    { "@type": "City", "name": "Schaumburg" },
    { "@type": "City", "name": "Aurora" },
    { "@type": "City", "name": "Joliet" },
    { "@type": "City", "name": "Downers Grove" },
    { "@type": "City", "name": "Arlington Heights" },
    { "@type": "City", "name": "Highland Park" },
    { "@type": "City", "name": "Glenview" },
    { "@type": "City", "name": "Northbrook" },
    { "@type": "City", "name": "Palatine" },
    { "@type": "City", "name": "Wilmette" },
    { "@type": "City", "name": "Elgin" },
  ],
  sameAs: [
    "https://www.instagram.com/glowrentals",
    "https://www.tiktok.com/@glowrentals",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "LED Party Game Rentals",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "LED Ping Pong Table Rental" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "LED Dance Floor Rental" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "LED Mini Golf Rental" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "LED Cornhole Rental" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "LED Lounge Furniture Rental" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Giant LED 4 in a Row Rental" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${syne.variable} ${outfit.variable} ${orbitron.variable} ${dmSans.variable} bg-[#07090f] font-[var(--font-body)] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
