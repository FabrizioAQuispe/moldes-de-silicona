import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Star, TrendingUp, Users, Award, Clock, PlayCircle, Download, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Optimizado */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-secondary/5 to-background" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              {/* Badge de urgencia */}
              <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-semibold">
                <Clock className="h-4 w-4" />
                Oferta termina en 48 horas
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Aprende a Hacer{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Moldes de Silicona
                </span>{" "}
                y Genera Ingresos desde Casa
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                Curso completo paso a paso para crear moldes profesionales de silicona. 
                <strong className="text-foreground"> Sin experiencia previa.</strong> Empieza tu negocio de joyería, jabones y velas hoy mismo.
              </p>

              {/* Social Proof */}
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background" />
                  <div className="w-10 h-10 rounded-full bg-secondary/20 border-2 border-background" />
                  <div className="w-10 h-10 rounded-full bg-primary/30 border-2 border-background" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold">5,127 estudiantes</div>
                  <div className="text-muted-foreground">ya están creando moldes</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://go.hotmart.com/X102350414C?ap=24f4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="cta" size="xl" className="w-full">
                    Empezar Ahora - 25% OFF
                  </Button>
                </a>
                <Link href="#video-preview" className="w-full sm:w-auto">
                  <Button variant="outline" size="xl" className="w-full gap-2">
                    <PlayCircle className="h-5 w-5" />
                    Ver Video Gratis
                  </Button>
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-4 pt-4 text-sm text-muted-foreground flex-wrap">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  Garantía 30 días
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Acceso de por vida
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-primary fill-primary" />
                  4.9/5 (5,127 reseñas)
                </div>
              </div>
            </div>
            
            <div className="relative order-first md:order-last">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
              <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-muted aspect-video">
                {/* Placeholder para imagen optimizada con Next.js Image */}
                <div className="w-full h-full flex items-center justify-center">
                  <PlayCircle className="h-20 w-20 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Más visual */}
      <section className="py-12 bg-muted/50 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Users, label: "Estudiantes Activos", value: "5,127", color: "text-blue-500" },
              { icon: Star, label: "Valoración Media", value: "4.9★", color: "text-yellow-500" },
              { icon: Award, label: "Lecciones en Video", value: "50+", color: "text-purple-500" },
              { icon: TrendingUp, label: "Tasa de Éxito", value: "98%", color: "text-green-500" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg hover:bg-background transition-colors">
                <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problema + Solución Section - NUEVO */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Te Suena Familiar?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-destructive/50 bg-destructive/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-destructive">❌ Sin Este Curso</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Comprar moldes caros que no se ajustan a tus diseños</li>
                    <li>• Gastar dinero en materiales sin saber usarlos</li>
                    <li>• Moldes que se rompen o salen mal</li>
                    <li>• Depender de proveedores externos</li>
                    <li>• Limitar tu creatividad por falta de opciones</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/50 bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">✅ Con Este Curso</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Crea tus propios moldes personalizados</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Ahorra cientos de dólares en materiales</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Moldes perfectos desde el primer intento</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Independencia total para crear</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Monetiza tu nueva habilidad</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Mejorado */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Contenido del Curso</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-2">
              Todo lo que Necesitas Saber sobre Moldes de Silicona
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              50+ lecciones en video HD que te llevan de cero a experto
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Fundamentos de la Silicona",
                description: "Tipos de silicona, proporciones correctas, catalizadores y materiales esenciales",
                lessons: "8 lecciones"
              },
              {
                title: "Moldes para Joyería en Resina",
                description: "Anillos, pendientes, colgantes y piezas únicas. Incluye técnicas de desmoldado",
                lessons: "10 lecciones"
              },
              {
                title: "Jabones Artesanales Premium",
                description: "Diseños 3D, moldes multicavidad y formas complejas para jabones profesionales",
                lessons: "7 lecciones"
              },
              {
                title: "Velas Decorativas y Aromáticas",
                description: "Moldes para velas con diseños únicos, texturas y efectos especiales",
                lessons: "6 lecciones"
              },
              {
                title: "Arte en Resina Epóxica",
                description: "Moldes para llaveros, posavasos, bandejas y decoración del hogar",
                lessons: "9 lecciones"
              },
              {
                title: "Secretos Profesionales",
                description: "Errores comunes, soluciones rápidas, trucos de expertos y optimización de costos",
                lessons: "10 lecciones"
              },
            ].map((benefit, index) => (
              <Card key={index} className="border hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{benefit.description}</p>
                  <span className="text-xs font-semibold text-primary">{benefit.lessons}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Preview Section - NUEVO */}
      <section id="video-preview" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Mira una Lección Gratis
              </h2>
              <p className="text-lg text-muted-foreground">
                Ve la calidad de nuestro contenido antes de comprar
              </p>
            </div>
            <div className="aspect-video bg-muted rounded-xl shadow-2xl flex items-center justify-center">
              <PlayCircle className="h-24 w-24 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section - NUEVO */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bonos Exclusivos (Valor: $147)
            </h2>
            <p className="text-lg text-muted-foreground">
              Obtén estos recursos adicionales completamente gratis
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "50 Plantillas de Diseño",
                value: "$47",
                description: "Diseños listos para usar en tus moldes"
              },
              {
                title: "Guía de Proveedores",
                value: "$30",
                description: "Dónde comprar materiales al mejor precio"
              },
              {
                title: "Grupo Privado VIP",
                value: "$70",
                description: "Comunidad exclusiva de estudiantes y soporte"
              },
            ].map((bonus, index) => (
              <Card key={index} className="border-2 border-primary/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-bold">
                  Valor: {bonus.value}
                </div>
                <CardContent className="p-6 pt-10">
                  <Download className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{bonus.title}</h3>
                  <p className="text-muted-foreground">{bonus.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA - Mejorado */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-primary max-w-4xl mx-auto bg-gradient-to-br from-primary/10 via-background to-secondary/10">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="inline-block bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-bold mb-6">
                ⏰ OFERTA ESPECIAL - Solo por 48 horas
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Invierte en Tu Futuro Creativo
              </h2>
              
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className="text-muted-foreground line-through text-2xl">$50</span>
                  <span className="text-5xl md:text-6xl font-bold text-primary">$37.50</span>
                </div>
                <p className="text-sm text-muted-foreground">Pago único · Acceso de por vida · Sin suscripciones</p>
              </div>

              {/* Valor total */}
              <div className="bg-muted/50 rounded-lg p-6 mb-8 max-w-md mx-auto">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Curso completo (50 lecciones)</span>
                    <span className="font-semibold">$147</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bonos exclusivos</span>
                    <span className="font-semibold">$147</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Soporte de por vida</span>
                    <span className="font-semibold">$50</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold text-lg">
                    <span>Valor total:</span>
                    <span>$344</span>
                  </div>
                  <div className="text-primary font-bold text-xl">
                    Pagas solo: $37.50 (89% OFF)
                  </div>
                </div>
              </div>

              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Menos de lo que cuesta un molde profesional. 
                <strong className="text-foreground"> Aprende a crear ilimitados moldes personalizados.</strong>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a 
                  href="https://go.hotmart.com/X102350414C?ap=24f4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="cta" size="xl" className="w-full text-lg">
                    Comprar Ahora - 25% OFF
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  Garantía 30 días
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Pago 100% seguro
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-primary fill-primary" />
                  +5,000 estudiantes
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials - Mejorado */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Testimonios</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-2">
              Historias de Éxito Reales
            </h2>
            <p className="text-muted-foreground">Únete a miles de estudiantes que ya están creando</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "María González",
                role: "Emprendedora de Joyería",
                text: "En 2 meses recuperé la inversión del curso. Ahora vendo mis joyas de resina con moldes personalizados. ¡El curso cambió mi vida!",
                rating: 5,
                image: "MG"
              },
              {
                name: "Carlos Ramírez",
                role: "Fabricante de Velas",
                text: "Las explicaciones son súper claras. Pasé de comprar moldes caros a crear los míos. Ya tengo mi pequeño negocio de velas.",
                rating: 5,
                image: "CR"
              },
              {
                name: "Ana Martínez",
                role: "Artista de Resina",
                text: "Valió cada centavo. Los trucos profesionales me ahorraron cientos en material desperdiciado. ¡100% recomendado!",
                rating: 5,
                image: "AM"
              },
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                      {testimonial.image}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - NUEVO */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Preguntas Frecuentes
              </h2>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  q: "¿Necesito experiencia previa?",
                  a: "No, el curso está diseñado para principiantes absolutos. Empiezas desde cero y avanzas paso a paso."
                },
                {
                  q: "¿Qué materiales necesito?",
                  a: "La inversión inicial en materiales es de aprox. $30-50 USD. Te damos una lista completa de proveedores económicos."
                },
                {
                  q: "¿Cuánto tiempo tengo acceso?",
                  a: "Acceso de por vida. Puedes ver las lecciones cuantas veces quieras, sin límite de tiempo."
                },
                {
                  q: "¿Funciona la garantía?",
                  a: "Sí, 30 días de garantía total. Si no estás satisfecho, te devolvemos el 100% de tu dinero."
                }
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para Crear Tus Propios Moldes?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Únete a 5,127 estudiantes que ya están generando ingresos con sus creaciones
          </p>
          <a 
            href="https://go.hotmart.com/X102350414C?ap=24f4" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="xl" className="text-lg">
              Comenzar Ahora - $37.50
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;