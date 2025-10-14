import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";

const blogArticles = [
  {
    slug: "como-hacer-moldes-silicona-paso-a-paso",
    title: "Cómo Hacer Moldes de Silicona Paso a Paso: Guía Completa para Principiantes",
    excerpt: "Descubre el proceso completo para crear tus primeros moldes de silicona desde cero. Tutorial detallado con tips profesionales.",
    date: "2025-01-15",
    readTime: "8 min",
  },
  {
    slug: "ideas-creativas-moldes-silicona-caseros",
    title: "50 Ideas Creativas para Moldes de Silicona Caseros que Puedes Vender",
    excerpt: "Inspírate con estas ideas únicas para crear moldes de silicona que puedes convertir en un negocio rentable.",
    date: "2025-01-12",
    readTime: "10 min",
  },
  {
    slug: "errores-comunes-hacer-moldes-silicona",
    title: "7 Errores Comunes al Hacer Moldes de Silicona y Cómo Evitarlos",
    excerpt: "Aprende de los errores más frecuentes que cometen los principiantes y cómo solucionarlos fácilmente.",
    date: "2025-01-10",
    readTime: "6 min",
  },
  {
    slug: "mejor-silicona-para-moldes-caseros",
    title: "¿Cuál es la Mejor Silicona para Hacer Moldes Caseros? Comparativa 2025",
    excerpt: "Análisis completo de los tipos de silicona disponibles: ventajas, desventajas y cuál elegir según tu proyecto.",
    date: "2025-01-08",
    readTime: "7 min",
  },
  {
    slug: "moldes-silicona-para-resina-principiantes",
    title: "Moldes de Silicona para Resina: Guía para Principiantes",
    excerpt: "Todo lo que necesitas saber para crear moldes perfectos para tus proyectos de resina epoxi.",
    date: "2025-01-05",
    readTime: "9 min",
  },
  {
    slug: "como-hacer-moldes-joyeria-silicona",
    title: "Cómo Hacer Moldes de Silicona para Joyería Artesanal",
    excerpt: "Técnicas específicas para crear moldes de alta precisión para pendientes, anillos y colgantes.",
    date: "2025-01-03",
    readTime: "11 min",
  },
  {
    slug: "moldes-silicona-jabones-artesanales",
    title: "Moldes de Silicona para Jabones Artesanales: Tutorial Completo",
    excerpt: "Aprende a diseñar y crear moldes personalizados para jabones con acabados profesionales.",
    date: "2025-01-01",
    readTime: "8 min",
  },
  {
    slug: "cuanto-tarda-secar-silicona-moldes",
    title: "¿Cuánto Tarda en Secar la Silicona para Moldes? Tiempos y Factores",
    excerpt: "Conoce los tiempos de curado de diferentes tipos de silicona y cómo acelerar el proceso de forma segura.",
    date: "2024-12-28",
    readTime: "5 min",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Blog de{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Moldes de Silicona
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Tutoriales, consejos y técnicas para dominar el arte de crear moldes de silicona profesionales
          </p>
        </div>

        {/* Articles Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogArticles.map((article) => (
            <Link key={article.slug} to={`/blog/${article.slug}`}>
              <Card className="h-full hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{article.date}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-3 line-clamp-2">{article.title}</h2>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    Leer más
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
