import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fabrizioquispe.com"),

  title: {
    default: "Curso de Moldes de Silicona | Aprende a Crear Moldes Profesionales",
    template: "%s | Moldes de Silicona Pro",
  },

  description:
    "Aprende a crear moldes de silicona profesionales para joyería, jabones, velas y resina. Curso online con acceso de por vida, más de 5,000 estudiantes satisfechos. ¡Empieza hoy!",

  keywords: [
    "moldes de silicona",
    "curso moldes silicona",
    "hacer moldes de silicona",
    "moldes para joyería",
    "moldes para resina",
    "moldes jabones artesanales",
    "curso online moldes",
    "emprendimiento artesanal",
  ],

  authors: [{ name: "Fabrizio Quispe" }],
  creator: "Fabrizio Quispe",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://www.fabrizioquispe.com",
    siteName: "Moldes de Silicona Pro",
    title: "Curso Completo de Moldes de Silicona | Técnicas Profesionales",
    description:
      "Domina el arte de crear moldes de silicona desde cero. Ideal para joyería, jabones, velas y resina. Más de 5,000 estudiantes satisfechos.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Curso de Moldes de Silicona",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Curso de Moldes de Silicona | Técnicas Profesionales",
    description:
      "Aprende a crear moldes de silicona profesionales. Más de 5,000 estudiantes satisfechos.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://www.fabrizioquispe.com",
  },

  category: "education",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Curso Completo de Moldes de Silicona",
  description:
    "Aprende a crear moldes de silicona profesionales para joyería, jabones, velas y resina. Curso paso a paso ideal para principiantes y avanzados.",
  provider: {
    "@type": "Person",
    name: "Fabrizio Quispe",
  },
  offers: {
    "@type": "Offer",
    price: "37.50",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://go.hotmart.com/X102350414C?ap=24f4",
    validFrom: "2025-01-01",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "5000",
  },
  educationalLevel: "Beginner to Advanced",
  inLanguage: "es-PE",
  courseMode: "online",
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: "PT8H",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-PE" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}