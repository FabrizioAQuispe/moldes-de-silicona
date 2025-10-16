import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, ArrowRight, TrendingUp, BookOpen, Tag } from "lucide-react";

const blogArticles = [
  {
    slug: "como-hacer-moldes-silicona-paso-a-paso",
    title: "Cómo Hacer Moldes de Silicona Paso a Paso: Guía Completa 2025",
    excerpt: "Descubre el proceso completo para crear tus primeros moldes de silicona desde cero. Tutorial detallado con tips profesionales y materiales exactos que necesitas.",
    date: "15 Ene 2025",
    readTime: "8 min",
    category: "Tutorial",
    featured: true,
    views: "12.5K",
  },
  {
    slug: "ideas-creativas-moldes-silicona-caseros",
    title: "50 Ideas Creativas para Moldes de Silicona que Puedes Vender en 2025",
    excerpt: "Inspírate con estas ideas únicas y probadas para crear moldes de silicona rentables. Incluye análisis de mercado y precios sugeridos.",
    date: "12 Ene 2025",
    readTime: "10 min",
    category: "Negocios",
    featured: true,
    views: "8.3K",
  },
  {
    slug: "errores-comunes-hacer-moldes-silicona",
    title: "7 Errores Fatales al Hacer Moldes de Silicona (y Cómo Evitarlos)",
    excerpt: "Aprende de los errores más costosos que cometen los principiantes y cómo solucionarlos antes de desperdiciar material.",
    date: "10 Ene 2025",
    readTime: "6 min",
    category: "Consejos",
    featured: false,
    views: "6.7K",
  },
  {
    slug: "mejor-silicona-para-moldes-caseros",
    title: "Mejor Silicona para Hacer Moldes Caseros: Comparativa Definitiva 2025",
    excerpt: "Análisis completo de las 5 mejores siliconas del mercado: RTV, platino, estaño. Ventajas, precios y cuál elegir según tu proyecto.",
    date: "8 Ene 2025",
    readTime: "7 min",
    category: "Materiales",
    featured: true,
    views: "9.1K",
  },
  {
    slug: "moldes-silicona-para-resina-principiantes",
    title: "Moldes de Silicona para Resina Epoxi: Guía Completa para Principiantes",
    excerpt: "Todo lo que necesitas saber para crear moldes perfectos para resina: proporciones, desmoldantes, tiempos de curado y acabados profesionales.",
    date: "5 Ene 2025",
    readTime: "9 min",
    category: "Tutorial",
    featured: false,
    views: "7.2K",
  },
  {
    slug: "como-hacer-moldes-joyeria-silicona",
    title: "Cómo Hacer Moldes de Silicona para Joyería: Tutorial Profesional",
    excerpt: "Técnicas avanzadas para crear moldes de alta precisión para pendientes, anillos y colgantes. Incluye secretos de joyeros profesionales.",
    date: "3 Ene 2025",
    readTime: "11 min",
    category: "Joyería",
    featured: false,
    views: "5.8K",
  },
  {
    slug: "moldes-silicona-jabones-artesanales",
    title: "Moldes de Silicona para Jabones Artesanales: De Principiante a Experto",
    excerpt: "Aprende a diseñar y crear moldes personalizados para jabones con acabados profesionales. Incluye 20 diseños populares.",
    date: "1 Ene 2025",
    readTime: "8 min",
    category: "Jabones",
    featured: false,
    views: "4.9K",
  },
  {
    slug: "cuanto-tarda-secar-silicona-moldes",
    title: "¿Cuánto Tarda en Secar la Silicona? Tiempos Exactos y Trucos para Acelerar",
    excerpt: "Tabla completa de tiempos de curado según tipo de silicona, temperatura y humedad. Aprende a acelerar el proceso de forma segura.",
    date: "28 Dic 2024",
    readTime: "5 min",
    category: "Técnicas",
    featured: false,
    views: "11.2K",
  },
  {
    slug: "moldes-silicona-velas-aromaticas",
    title: "Moldes de Silicona para Velas: Guía Completa con Diseños Modernos",
    excerpt: "Crea moldes para velas con formas únicas y modernas. Incluye técnicas para texturas, colores degradados y velas flotantes.",
    date: "26 Dic 2024",
    readTime: "9 min",
    category: "Velas",
    featured: false,
    views: "3.6K",
  },
  {
    slug: "cuanto-cuesta-hacer-moldes-silicona",
    title: "¿Cuánto Cuesta Hacer Moldes de Silicona? Análisis Completo de Inversión",
    excerpt: "Desglose detallado de costos: materiales, herramientas y rentabilidad. Descubre cuánto puedes ahorrar vs comprar moldes hechos.",
    date: "24 Dic 2024",
    readTime: "7 min",
    category: "Negocios",
    featured: false,
    views: "8.4K",
  },
  {
    slug: "negocio-moldes-silicona-casa",
    title: "Cómo Empezar un Negocio de Moldes de Silicona desde Casa [2025]",
    excerpt: "Plan completo para monetizar tus moldes: plataformas de venta, precios estratégicos, marketing y casos de éxito reales.",
    date: "22 Dic 2024",
    readTime: "12 min",
    category: "Negocios",
    featured: true,
    views: "14.7K",
  },
  {
    slug: "desmoldantes-caseros-silicona",
    title: "Desmoldantes Caseros para Moldes de Silicona: 8 Alternativas Efectivas",
    excerpt: "Recetas de desmoldantes económicos que funcionan igual o mejor que los comerciales. Guarda cientos de dólares al año.",
    date: "20 Dic 2024",
    readTime: "6 min",
    category: "Consejos",
    featured: false,
    views: "6.1K",
  },
];

const categories = [
  { name: "Todos", count: blogArticles.length },
  { name: "Tutorial", count: blogArticles.filter(a => a.category === "Tutorial").length },
  { name: "Negocios", count: blogArticles.filter(a => a.category === "Negocios").length },
  { name: "Consejos", count: blogArticles.filter(a => a.category === "Consejos").length },
  { name: "Materiales", count: blogArticles.filter(a => a.category === "Materiales").length },
];

const Blog = () => {
  const featuredArticles = blogArticles.filter(a => a.featured).slice(0, 3);

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <BookOpen className="h-4 w-4" />
            Aprende Gratis
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Blog de{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Moldes de Silicona
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Tutoriales paso a paso, guías completas y consejos profesionales para dominar 
            el arte de crear moldes de silicona
          </p>
        </div>

        {/* Categories Filter */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            <Tag className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            {categories.map((category) => (
              <Button
                key={category.name}
                variant="outline"
                size="sm"
                className="flex-shrink-0"
              >
                {category.name}
                <span className="ml-2 text-xs opacity-70">({category.count})</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Articles */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Artículos Más Leídos</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`}>
                <Card className="h-full border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold mb-4">
                      ⭐ Popular
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span>{article.date}</span>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </div>
                        <span>👁️ {article.views}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                      Leer artículo completo
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* All Articles Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Todos los Artículos</h2>
            <span className="text-sm text-muted-foreground">
              {blogArticles.length} artículos
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogArticles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`}>
                <Card className="h-full hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                  <CardContent className="p-6">
                    <div className="inline-block bg-muted px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {article.category}
                    </div>

                    <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-4">
                      <span>{article.date}</span>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </div>
                        <span className="hidden sm:inline">👁️ {article.views}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm mt-4 group-hover:gap-3 transition-all">
                      Leer más
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="max-w-4xl mx-auto mt-20">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  ¿Quieres Dominar los Moldes de Silicona?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Obtén acceso al curso completo con 50+ lecciones en video, 
                  técnicas profesionales y soporte de por vida
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://go.hotmart.com/X102350414C?ap=24f4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="cta" size="lg" className="w-full sm:w-auto">
                      Ver Curso Completo
                    </Button>
                  </a>
                  <Link href="/">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Más Información
                    </Button>
                  </Link>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  🎁 Incluye bonos por valor de $147 · Garantía 30 días
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;