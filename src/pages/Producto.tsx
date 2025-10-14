import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, PlayCircle, Download, Users, Clock, Star } from "lucide-react";

const Producto = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Product Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Curso Completo:{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Crea Moldes de Silicona Profesionales
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Aprende todas las técnicas para crear moldes de silicona perfectos desde casa, 
              sin experiencia previa. Ideal para joyería, jabones, velas, resina y más.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
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
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>5,000+ Estudiantes</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-primary fill-primary" />
                <span>4.9/5 Valoración</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Acceso de por vida</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://static-media.hotmart.com/C9TthgKw8X5dcKqao3P_KlMYG7k=/filters:background_color(white)/hotmart/product_pictures/7dbac47e-c25f-456b-84c3-50b7abf3bd02/PORTADAorderbump2MoldesdeSilicona.jpg" 
              alt="Portada del curso de moldes de silicona" 
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Contenido del Curso
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  title: "Módulo 1: Fundamentos de la Silicona",
                  lessons: [
                    "Tipos de silicona y sus usos",
                    "Materiales y herramientas necesarias",
                    "Proporciones y mezclas correctas",
                    "Seguridad y mejores prácticas",
                  ],
                },
                {
                  title: "Módulo 2: Técnicas Básicas",
                  lessons: [
                    "Preparación del área de trabajo",
                    "Creación de tu primer molde simple",
                    "Desmoldado sin errores",
                    "Limpieza y mantenimiento",
                  ],
                },
                {
                  title: "Módulo 3: Moldes para Joyería",
                  lessons: [
                    "Moldes para pendientes y aretes",
                    "Moldes para anillos",
                    "Moldes para colgantes",
                    "Técnicas avanzadas de detalle",
                  ],
                },
                {
                  title: "Módulo 4: Moldes para Jabones y Velas",
                  lessons: [
                    "Diseños creativos para jabones",
                    "Moldes para velas decorativas",
                    "Texturas y acabados especiales",
                    "Moldes de múltiples cavidades",
                  ],
                },
                {
                  title: "Módulo 5: Proyectos de Resina",
                  lessons: [
                    "Moldes para arte en resina",
                    "Llaveros y accesorios",
                    "Decoración del hogar",
                    "Técnicas de pintura en moldes",
                  ],
                },
                {
                  title: "Módulo 6: Tips y Trucos Profesionales",
                  lessons: [
                    "Solución de problemas comunes",
                    "Optimización de materiales",
                    "Moldes reutilizables de larga duración",
                    "Cómo vender tus creaciones",
                  ],
                },
              ].map((module, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <PlayCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">{module.title}</h3>
                        <ul className="space-y-2">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <li key={lessonIndex} className="flex items-start gap-2 text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              ¿Qué Incluye Tu Inversión?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: PlayCircle,
                  title: "Videos en Alta Calidad",
                  description: "Lecciones claras y fáciles de seguir con demostraciones paso a paso",
                },
                {
                  icon: Download,
                  title: "Recursos Descargables",
                  description: "Guías PDF, listas de materiales y plantillas para tus proyectos",
                },
                {
                  icon: Clock,
                  title: "Acceso de Por Vida",
                  description: "Aprende a tu ritmo, sin límites de tiempo ni vencimientos",
                },
                {
                  icon: Users,
                  title: "Comunidad Privada",
                  description: "Grupo exclusivo de estudiantes para compartir proyectos y dudas",
                },
                {
                  icon: Star,
                  title: "Actualizaciones Gratuitas",
                  description: "Recibe nuevas lecciones y contenido sin costo adicional",
                },
                {
                  icon: CheckCircle2,
                  title: "Soporte del Instructor",
                  description: "Resuelve tus dudas directamente con el experto",
                },
              ].map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <benefit.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Inversión Especial
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Elige la opción que mejor se adapte a ti
                </p>
                
                <div className="space-y-6">
                  {/* Opción 1 - 25% OFF */}
                  <div className="border-2 border-secondary/50 rounded-lg p-6 bg-background">
                    <div className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      Más Popular - 25% OFF
                    </div>
                    <div className="mb-4">
                      <span className="text-muted-foreground line-through text-xl mr-3">$50 USD</span>
                      <span className="text-4xl font-bold text-primary">$37.50 USD</span>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Acceso completo al curso + bonos especiales
                    </p>
                    <a 
                      href="https://go.hotmart.com/X102350414C?ap=24f4" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button variant="cta" size="lg" className="w-full">
                        Comprar Ahora - 25% OFF
                      </Button>
                    </a>
                  </div>

                  {/* Opción 2 - 40% OFF */}
                  <div className="border-2 border-destructive/50 rounded-lg p-6 bg-background">
                    <div className="inline-block bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      Mejor Precio - 40% OFF
                    </div>
                    <div className="mb-4">
                      <span className="text-muted-foreground line-through text-xl mr-3">$50 USD</span>
                      <span className="text-4xl font-bold text-destructive">$30 USD</span>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      ¡Oferta ultra limitada! Acceso completo al mejor precio
                    </p>
                    <a 
                      href="https://go.hotmart.com/X102350414C?ap=8667" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button variant="destructive" size="lg" className="w-full">
                        Aprovechar 40% OFF
                      </Button>
                    </a>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-8">
                  ✓ Garantía de devolución de 30 días<br />
                  ✓ Pago 100% seguro con Hotmart<br />
                  ✓ Acceso inmediato después del pago
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para Comenzar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Únete a miles de estudiantes que ya están creando moldes de silicona profesionales
            </p>
            <a 
              href="https://go.hotmart.com/X102350414C?ap=24f4" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="cta" size="xl">
                Inscribirme Ahora
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Producto;
