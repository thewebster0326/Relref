import type { Metadata } from "next";
import { Sora, Public_Sans, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { site, areas } from "@/lib/content";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  alternates: { canonical: "./" },
  title: "Reliable Refrigeration | Fridge & Commercial Refrigeration Repairs in Durban",
  description:
    "Reliable Refrigeration has been Durban's trusted refrigeration specialist since 2004 — domestic and commercial repairs, cold rooms, freezer rooms, maintenance and refrigeration sales, on-site across Durban, Umhlanga, Hillcrest, Kloof and the surrounding area.",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  telephone: "+27" + site.phones.mobile.replace(/\s/g, "").slice(1),
  email: site.email,
  foundingDate: "2004-01-05",
  image: `${site.url}/images/logo/Reliable-Refrigeration-logo.png`,
  description:
    "Domestic and commercial refrigeration repairs, cold rooms, freezer rooms and maintenance in Durban and surrounding areas.",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: `${site.address.suburb}, ${site.address.city}`,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: areas.map((a) => ({ "@type": "Place", name: a.name })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${publicSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
