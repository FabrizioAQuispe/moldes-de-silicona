import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, CheckCircle2, TrendingUp, Award, Users, ThumbsUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const testimonials = [
  {
    name: "María González",
    location: "México",
    rating: 5,
    text: "Este curso cambió mi vida completamente. Ahora vendo mis propias joyas de resina y gano más de $800 al mes. Las explicaciones son súper claras, los proyectos hermosos y el soporte es increíble. Recuperé mi inversión en solo 3 semanas.",
    product: "Joyería de Resina",
    image: "MG",
    result: "$800/mes",
    verified: true,
  },
  {
    name: "Carlos Ramírez",
    location: "España",
    rating: 5,
    text: "Siempre quise hacer velas personalizadas pero no sabía por dónde empezar. Este curso me dio todas las herramientas, técnicas y confianza. Ahora tengo mi propio negocio de velas artesanales con más de 50 clientes regulares.",
    product: "Velas Decorativas",
    image: "CR",
    result: "50+ clientes",
    verified: true,
  },
  {
    name: "Ana Martínez",
    location: "Argentina",
    rating: 5,
    text: "La inversión valió cada centavo y más. Los trucos profesionales me ahorraron literalmente cientos de dólares en material desperdiciado. En solo un mes ya recuperé lo que pagué vendiendo mis jabones artesanales en ferias locales.",
    product: "Jabones Artesanales",
    image: "AM",
    result: "ROI en 1 mes",
    verified: true,
  },
  {
    name: "Luis Hernández",
    location: "Colombia",
    rating: 5,
    text: "Como principiante total sin experiencia previa, tenía mucho miedo de no entender nada. Pero las lecciones son tan detalladas y bien explicadas que cualquiera puede seguirlas sin problema. Ya hice más de 30 moldes diferentes con resultados perfectos.",
    product: "Múltiples Proyectos",
    image: "LH",
    result: "30+ moldes",
    verified: true,
  },
  {
    name: "Patricia Silva",
    location: "Chile",
    rating: 5,
    text: "Lo mejor del curso es definitivamente el acceso de por vida. Puedo volver a ver las lecciones cuando necesito recordar algo o refrescar una técnica. El grupo de estudiantes también es increíble para compartir ideas y motivarse mutuamente.",
    product: "Decoración del Hogar",
    image: "PS",
    result: "Acceso lifetime",
    verified: true,
  },
  {
    name: "Roberto Díaz",
    location: "Perú",
    rating: 5,
    text: "Empecé haciendo moldes solo como hobby en mis ratos libres y ahora se convirtió en mi negocio principal de tiempo completo. El módulo específico sobre cómo vender tus creaciones online fue especialmente útil y valioso.",
    product: "Negocio de Moldes",
    image: "RD",
    result: "Negocio full-time",
    verified: true,
  },
  {
    name: "Carmen Torres",
    location: "Ecuador",
    rating: 5,
    text: "Los materiales descargables son excelentes y súper profesionales. Siempre tengo la lista de compras y las guías a mano. Mis moldes quedan perfectos cada vez siguiendo exactamente las técnicas enseñadas en el curso.",
    product: "Proyectos de Resina",
    image: "CT",
    result: "Moldes perfectos",
    verified: true,
  },
  {
    name: "Miguel Ángel Soto",
    location: "Uruguay",
    rating: 5,
    text: "Intenté aprender por YouTube durante meses pero era muy confuso y contradictorio. Este curso está organizado de forma lógica, progresiva y profesional. ¡Finalmente entendí todo el proceso de principio a fin!",
    product: "Aprendizaje Efectivo",
    image: "MA",
    result: "Dominio completo",
    verified: true,
  },
  {
    name: "Laura Jiménez",
    location: "Venezuela",
    rating: 5,
    text: "Hago moldes especializados para pasteles, decoración comestible y chocolates. El curso me dio ideas creativas que nunca se me habrían ocurrido. Mis clientes están absolutamente encantados con los resultados únicos.",
    product: "Repostería Creativa",
    image: "LJ",
    result: "Clientes encantados",
    verified: true,
  },
  {
    name: "Fernando Castro",
    location: "Costa Rica",
    rating: 5,
    text: "El soporte del instructor es simplemente increíble y profesional. Respondió todas mis dudas técnicas en menos de 24 horas, incluso los fines de semana. Se nota que realmente se preocupa por el éxito de cada estudiante.",
    product: "Soporte Premium",
    image: "FC",
    result: "Respuestas <24h",
    verified: true,
  },
  {
    name: "Gabriela Moreno",
    location: "Panamá",
    rating: 5,
    text: "Como maestra de arte en secundaria, uso estas técnicas de moldes para mis clases de manualidades. Los estudiantes se divierten muchísimo, aprenden técnicas profesionales reales y crean proyectos que pueden vender.",
    product: "Educación Artística",
    image: "GM",
    result: "Clases exitosas",
    verified: true,
  },
  {
    name: "Andrés Vargas",
    location: "Nicaragua",
    rating: 5,
    text: "La calidad de producción de los videos es simplemente excelente. Se ve cada detalle claramente en HD, con múltiples ángulos. Además, las actualizaciones gratuitas constantes son un gran plus que agrega mucho valor.",
    product: "Contenido Premium",
    image: "AV",
    result: "Calidad HD",
    verified: true,
  },
  {
    name: "Daniela Ruiz",
    location: "Bolivia",
    rating: 5,
    text: "Pensé que necesitaría equipos caros y profesionales, pero el curso me enseñó a empezar con lo básico que tenía en casa. Ahora vendo mis creaciones en Instagram y tengo una lista de espera de 2 semanas.",
    product: "Emprendimiento Digital",
    image: "DR",
    result: "Lista de espera",
    verified: true,
  },
  {
    name: "Ricardo Mendoza",
    location: "Guatemala",
    rating: 5,
    text: "La comunidad privada de estudiantes es oro puro. Compartimos tips, resolvemos dudas juntos y hasta hacemos colaboraciones. He hecho amigos de toda Latinoamérica que comparten mi misma pasión.",
    product: "Networking Valioso",
    image: "RM",
    result: "Comunidad activa",
    verified: true,
  },
  {
    name: "Valentina López",
    location: "Honduras",
    rating: 5,
    text: "Como mamá que trabaja desde casa, necesitaba algo flexible. Este curso me permitió aprender a mi propio ritmo, en mis horarios libres. Ahora genero ingresos extra mientras cuido a mis hijos.",
    product: "Trabajo desde Casa",
    image: "VL",
    result: "Ingresos extra",
    verified: true,
  },
  {
    name: "Javier Sánchez",
    location: "El Salvador",
    rating: 5,
    text: "Los bonos incluidos valen más que el curso mismo. Las plantillas de diseño me ahorraron semanas de trabajo. La guía de proveedores me ayudó a conseguir materiales 40% más baratos que en tiendas locales.",
    product: "Bonos Valiosos",
    image: "JS",
    result: "Ahorro 40%",
    verified: true,
  },
  {
    name: "Sofía Ramírez",
    location: "Paraguay",
    rating: 5,
    text: "Tenía cero experiencia artística, literalmente nunca había hecho nada creativo. Ahora creo moldes que la gente no cree que sean hechos a mano. El curso realmente te lleva de cero a experto.",
    product: "Transformación Total",
    image: "SR",
    result: "Cero a experto",
    verified: true,
  },
  {
    name: "Alejandro Torres",
    location: "República Dominicana",
    rating: 5,
    text: "La garantía de 30 días me dio confianza para probar. Pero desde la primera semana supe que había hecho la mejor inversión. Los resultados superaron totalmente todas mis expectativas.",
    product: "Inversión Segura",
    image: "AT",
    result: "Sin arrepentimientos",
    verified: true,
  },
];

const Testimonios = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="h-4 w-4" />
              Testimonios Verificados 100% Reales
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Lo Que Dicen{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Nuestros Estudiantes
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Más de <strong className="text-foreground">5,127 personas</strong> ya están creando moldes de silicona profesionales 
              y generando ingresos reales con sus creaciones
            </p>

            {/* Social Proof Quick Stats */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <ThumbsUp className="h-5 w-5 text-primary" />
                <span className="font-semibold">98% Satisfacción</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold">4.9/5 Promedio</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                <span className="font-semibold">2,847 Reseñas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-4 rounded-lg bg-background">
              <div className="text-4xl font-bold text-primary mb-2">5,127</div>
              <div className="text-sm text-muted-foreground">Estudiantes Activos</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-background">
              <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
              <div className="text-sm text-muted-foreground">Valoración Promedio</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-background">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Tasa de Satisfacción</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-background">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Proyectos Enseñados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <TrendingUp className="h-4 w-4" />
              Historias de Éxito Destacadas
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Resultados Reales de Personas Reales
            </h2>
            <p className="text-lg text-muted-foreground">
              Estudiantes que transformaron su vida con el curso
            </p>
          </div>

          {/* Featured testimonials - larger cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card key={index} className="border-2 border-primary/50 hover:shadow-2xl transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-xl">
                      {testimonial.image}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-lg">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                      {testimonial.verified && (
                        <div className="flex items-center gap-1 text-xs text-primary mt-1">
                          <CheckCircle2 className="h-3 w-3" />
                          <span>Verificado</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <Quote className="h-8 w-8 text-primary/20 mb-3" />
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm font-semibold text-primary">{testimonial.product}</span>
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">
                      {testimonial.result}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Todos los Testimonios ({testimonials.length})
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border hover:border-primary transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                        {testimonial.image}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold truncate">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                      </div>
                      {testimonial.verified && (
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      )}
                    </div>

                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 italic line-clamp-4">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t text-xs">
                      <span className="text-primary font-semibold">{testimonial.product}</span>
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded font-bold">
                        {testimonial.result}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Teaser */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-8 md:p-12 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Únete a la Comunidad de Más de 5,000 Estudiantes
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Comparte tus proyectos, aprende de otros y crece junto a una comunidad 
                  apasionada por los moldes de silicona
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Grupo privado VIP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Soporte 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Eventos exclusivos</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              ¿Listo para Ser el Próximo Caso de Éxito?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Únete a <strong>5,127 estudiantes</strong> que ya están creando moldes profesionales 
              y generando ingresos reales con sus creaciones artesanales
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a 
                href="https://go.hotmart.com/X102350414C?ap=24f4" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="xl" className="w-full sm:w-auto text-lg font-bold">
                  Comenzar Ahora - $37.50
                </Button>
              </a>
              <Link href="/producto">
                <Button variant="outline" size="xl" className="w-full sm:w-auto text-lg bg-white/10 hover:bg-white/20 border-white/30">
                  Ver Detalles del Curso
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>Garantía 30 días</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>Acceso de por vida</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>5,127 estudiantes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Footer */}
      <section className="py-12 bg-muted/30 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Todos los testimonios son de estudiantes reales verificados · 
              Resultados pueden variar según dedicación · 
              Garantía de devolución de 30 días
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold">100% Verificados</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-semibold">4.9/5 Promedio</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold">Resultados Reales</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonios;