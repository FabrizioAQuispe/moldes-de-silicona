import { Button } from "@/components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { CheckCircle2, Star, TrendingUp, Users, Award, Clock } from "lucide-react";
import Link from "next/link";
import heroImage from "@/assets/hero-moldes.jpg";
import productosImage from "@/assets/productos-moldes.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-secondary/5 to-background" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Crea Tus Propios{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Moldes de Silicona
                </span>{" "}
                en Casa
              </h1>
              <p className="text-lg text-muted-foreground">
                Aprende técnicas profesionales paso a paso para crear moldes de silicona perfectos. 
                Ideal para joyería, jabones, velas, resina y mucho más. ¡Sin experiencia previa necesaria!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://go.hotmart.com/X102350414C?ap=24f4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="cta" size="xl" className="w-full sm:w-auto">
                    Obtener Curso Ahora - 25% OFF
                  </Button>
                </a>
                <Link href="/producto">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto">
                    Ver Más Detalles
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span className="font-semibold text-destructive">¡Oferta por tiempo limitado!</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
              <img 
                src={heroImage.src} 
                alt="Moldes de silicona y creaciones artesanales" 
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "Estudiantes", value: "5,000+" },
              { icon: Star, label: "Valoración", value: "4.9/5" },
              { icon: Award, label: "Proyectos", value: "100+" },
              { icon: TrendingUp, label: "Satisfacción", value: "98%" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Qué Aprenderás en Este Curso?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Domina todas las técnicas necesarias para crear moldes de silicona profesionales
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Técnicas Fundamentales",
                description: "Aprende los conceptos básicos de la silicona líquida, proporciones correctas y tipos de materiales",
              },
              {
                title: "Moldes para Joyería",
                description: "Crea moldes perfectos para anillos, pendientes, colgantes y piezas únicas de resina",
              },
              {
                title: "Jabones Artesanales",
                description: "Diseña moldes personalizados para jabones con formas creativas y profesionales",
              },
              {
                title: "Velas Decorativas",
                description: "Elabora moldes para velas con diseños únicos que podrás vender o regalar",
              },
              {
                title: "Proyectos de Resina",
                description: "Domina los moldes para arte en resina, llaveros, y decoración del hogar",
              },
              {
                title: "Trucos Profesionales",
                description: "Evita errores comunes y aprende secretos que solo conocen los expertos",
              },
            ].map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src={productosImage.src} 
              alt="Colección de creaciones con moldes de silicona" 
              className="rounded-2xl shadow-xl"
            />
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                De Principiante a Experto en Moldes de Silicona
              </h2>
              <p className="text-lg text-muted-foreground">
                Nuestro curso te lleva desde cero hasta crear moldes profesionales que podrás usar 
                para tu negocio o proyectos personales.
              </p>
              <ul className="space-y-3">
                {[
                  "Videos paso a paso fáciles de seguir",
                  "Acceso de por vida al contenido",
                  "Actualizaciones gratuitas del curso",
                  "Grupo privado de estudiantes",
                  "Soporte directo del instructor",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/producto">
                <Button variant="hero" size="lg">
                  Ver Contenido Completo del Curso
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Oferta Especial por Tiempo Limitado
              </h2>
              <div className="mb-6">
                <span className="text-muted-foreground line-through text-2xl mr-4">$50 USD</span>
                <span className="text-5xl font-bold text-primary">$37.50 USD</span>
              </div>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ahorra 25% en tu inversión para aprender a crear moldes de silicona profesionales. 
                ¡Esta oferta no durará para siempre!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://go.hotmart.com/X102350414C?ap=24f4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="cta" size="xl" className="w-full sm:w-auto">
                    Comprar Ahora - 25% OFF
                  </Button>
                </a>
                <a 
                  href="https://go.hotmart.com/X102350414C?ap=8667" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" size="xl" className="w-full sm:w-auto">
                    Ver Oferta 40% OFF
                  </Button>
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Garantía de devolución de 30 días · Pago seguro
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lo Que Dicen Nuestros Estudiantes
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "María González",
                text: "Increíble curso! Ahora vendo mis propias joyas de resina gracias a los moldes que aprendí a crear.",
                rating: 5,
              },
              {
                name: "Carlos Ramírez",
                text: "Las explicaciones son claras y fáciles de seguir. Ya hice mis primeros moldes para velas.",
                rating: 5,
              },
              {
                name: "Ana Martínez",
                text: "Valió cada centavo. Los trucos profesionales me ahorraron mucho material y tiempo.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/testimonios">
              <Button variant="outline">Ver Más Testimonios</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
