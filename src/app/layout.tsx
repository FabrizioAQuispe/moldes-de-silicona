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
  metadataBase: new URL('https://www.tudominio.com'), // Cambia esto por tu dominio real
  
  title: {
    default: "Curso de Moldes de Silicona | Aprende a Crear Moldes Profesionales desde Casa",
    template: "%s | Moldes de Silicona Pro"
  },
  
  description: "Aprende a crear moldes de silicona profesionales para joyería, jabones, velas y resina. Curso paso a paso con técnicas comprobadas. ¡Comienza tu negocio hoy! ✓ Acceso de por vida ✓ Soporte incluido ✓ Garantía 30 días",
  
  keywords: [
    "moldes de silicona",
    "como hacer moldes de silicona",
    "curso moldes silicona",
    "moldes para resina",
    "moldes para jabones artesanales",
    "moldes para joyería",
    "moldes para velas",
    "silicona líquida",
    "tutorial moldes silicona",
    "negocio de moldes",
    "emprendimiento artesanal",
    "curso online moldes",
    "hacer moldes caseros",
    "moldes silicona profesional",
    "técnicas de moldeo"
  ],
  
  authors: [{ name: "Fabrizio Quispe" }],
  creator: "Fabrizio Quispe",
  publisher: "Moldes de Silicona Pro",
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.tudominio.com',
    siteName: 'Moldes de Silicona Pro',
    title: 'Curso Completo de Moldes de Silicona | Aprende Técnicas Profesionales',
    description: 'Domina el arte de crear moldes de silicona profesionales. Curso online con más de 5,000 estudiantes satisfechos. Ideal para joyería, jabones, velas y resina. ¡Oferta especial por tiempo limitado!',
    images: [
      {
        url: '/og-image.jpg', // Crea esta imagen 1200x630px
        width: 1200,
        height: 630,
        alt: 'Curso de Moldes de Silicona - Aprende técnicas profesionales',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Curso de Moldes de Silicona | Técnicas Profesionales',
    description: 'Aprende a crear moldes de silicona profesionales para joyería, jabones y velas. +5,000 estudiantes satisfechos. ¡Comienza hoy!',
    images: ['/twitter-image.jpg'], // Crea esta imagen 1200x600px
    creator: '@tuusuario', // Cambia por tu usuario de Twitter
  },
  
  verification: {
    google: 'tu-codigo-de-google-search-console', // Agrega tu código de verificación
    // yandex: 'tu-codigo-yandex',
    // bing: 'tu-codigo-bing',
  },
  
  alternates: {
    canonical: 'https://www.tudominio.com',
    languages: {
      'es-ES': 'https://www.tudominio.com',
      'es-MX': 'https://www.tudominio.com/mx',
      'es-AR': 'https://www.tudominio.com/ar',
    },
  },
  
  category: 'education',
};

// JSON-LD Schema para SEO avanzado
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Curso Completo de Moldes de Silicona',
  description: 'Aprende a crear moldes de silicona profesionales para joyería, jabones, velas y resina epóxica',
  provider: {
    '@type': 'Organization',
    name: 'Moldes de Silicona Pro',
    sameAs: [
      'https://www.facebook.com/tupage',
      'https://www.instagram.com/tuinstagram',
      'https://www.youtube.com/@tucanal'
    ]
  },
  offers: {
    '@type': 'Offer',
    price: '37.50',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: 'https://www.tudominio.com/producto',
    priceValidUntil: '2025-12-31'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '5000',
    bestRating: '5',
    worstRating: '1'
  },
  educationalLevel: 'Beginner to Advanced',
  inLanguage: 'es',
  coursePrerequisites: 'Ninguno - Curso para principiantes',
  numberOfLessons: 50,
  timeRequired: 'PT8H',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Preconnect para optimización de velocidad */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon y iconos de aplicación */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color para navegadores móviles */}
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Optimización para móviles */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.variable} antialiased`}>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1 pt-16">
                {children}
              </main>
              <Footer />
            </div>
      </body>
    </html>
  );
}