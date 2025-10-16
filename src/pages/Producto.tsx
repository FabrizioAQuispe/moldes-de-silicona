import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, PlayCircle, Download, Users, Clock, Star, Shield, Award, TrendingUp, Zap, BookOpen, Gift } from "lucide-react";
import Link from "next/link";

const Producto = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Product Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-primary/10 via-secondary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            {/* Trust Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                <Award className="h-4 w-4" />
                Curso #1 en Moldes de Silicona
              </div>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Curso Completo de{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Moldes de Silicona Profesionales
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto">
                Domina todas las técnicas para crear moldes perfectos desde casa. 
                <strong className="text-foreground"> De principiante a experto en semanas.</strong>
              </p>
              
              {/* Social Proof Inline */}
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm mb-8">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="font-semibold">5,127 estudiantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold">4.9/5 (2,847 reseñas)</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="font-semibold">98% satisfacción</span>
                </div>
              </div>

              {/* Price Highlight */}
              <div className="bg-background rounded-2xl border-2 border-primary/20 p-6 mb-8 inline-block">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-muted-foreground line-through text-2xl">$50</span>
                  <span className="text-5xl font-bold text-primary">$37.50</span>
                  <div className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-bold">
                    -25% OFF
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Oferta por tiempo limitado · Acceso inmediato</p>
              </div>

              {/* CTA Buttons */}
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
                <a 
                  href="https://go.hotmart.com/X102350414C?ap=8667" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="destructive" size="xl" className="w-full text-lg">
                    Ver Oferta 40% OFF
                  </Button>
                </a>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Garantía 30 días</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Acceso de por vida</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span>Acceso inmediato</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Image + Quick Stats */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://static-media.hotmart.com/C9TthgKw8X5dcKqao3P_KlMYG7k=/filters:background_color(white)/hotmart/product_pictures/7dbac47e-c25f-456b-84c3-50b7abf3bd02/PORTADAorderbump2MoldesdeSilicona.jpg" 
                  alt="Portada del curso de moldes de silicona profesionales" 
                  className="w-full rounded-2xl shadow-2xl border-4 border-primary/20"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Lo Que Obtendrás</h2>
                <div className="space-y-4">
                  {[
                    { icon: PlayCircle, text: "50+ lecciones en video HD", value: "8 horas" },
                    { icon: BookOpen, text: "6 módulos completos", value: "Paso a paso" },
                    { icon: Download, text: "Guías PDF descargables", value: "20+ recursos" },
                    { icon: Gift, text: "Bonos exclusivos", value: "$147 valor" },
                    { icon: Users, text: "Grupo privado VIP", value: "Soporte incluido" },
                    { icon: Award, text: "Certificado de finalización", value: "Digital" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{item.text}</div>
                        <div className="text-sm text-muted-foreground">{item.value}</div>
                      </div>
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn - Outcome Focused */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Después de Este Curso Podrás
            </h2>
            <p className="text-lg text-muted-foreground">
              Resultados concretos que lograrás dominando esta habilidad
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🎨",
                title: "Crear Moldes Perfectos",
                description: "Fabrica moldes profesionales para cualquier objeto sin burbujas ni imperfecciones"
              },
              {
                icon: "💎",
                title: "Hacer Joyería de Resina",
                description: "Diseña y produce pendientes, anillos y colgantes únicos para vender"
              },
              {
                icon: "🧼",
                title: "Jabones Artesanales",
                description: "Crea jabones personalizados con diseños profesionales y acabados impecables"
              },
              {
                icon: "🕯️",
                title: "Velas Decorativas",
                description: "Produce velas con formas únicas que destacan en cualquier mercado"
              },
              {
                icon: "💰",
                title: "Generar Ingresos Extra",
                description: "Monetiza tu nueva habilidad vendiendo moldes o productos terminados"
              },
              {
                icon: "🚀",
                title: "Iniciar Tu Negocio",
                description: "Lanza tu emprendimiento desde casa con inversión mínima"
              },
            ].map((outcome, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{outcome.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{outcome.title}</h3>
                  <p className="text-muted-foreground text-sm">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Content - Detailed */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Contenido Completo del Curso
              </h2>
              <p className="text-lg text-muted-foreground">
                6 módulos progresivos · 50+ lecciones · 8 horas de contenido
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  title: "Módulo 1: Fundamentos de la Silicona",
                  duration: "45 min",
                  lessons: [
                    "Tipos de silicona: RTV, platino, estaño y cuál elegir",
                    "Materiales esenciales y dónde comprarlos económicamente",
                    "Proporciones exactas y técnicas de mezcla sin errores",
                    "Seguridad, ventilación y mejores prácticas profesionales",
                  ],
                },
                {
                  title: "Módulo 2: Técnicas Básicas (Tu Primer Molde)",
                  duration: "1h 15min",
                  lessons: [
                    "Preparación del área de trabajo paso a paso",
                    "Creación de tu primer molde simple exitoso",
                    "Técnicas de desmoldado sin dañar el molde",
                    "Limpieza, mantenimiento y almacenamiento correcto",
                  ],
                },
                {
                  title: "Módulo 3: Moldes para Joyería en Resina",
                  duration: "1h 30min",
                  lessons: [
                    "Moldes de alta precisión para pendientes y aretes",
                    "Técnicas especiales para anillos con detalles finos",
                    "Colgantes y dijes: capturando cada detalle",
                    "Técnicas avanzadas: incrustaciones y efectos especiales",
                  ],
                },
                {
                  title: "Módulo 4: Moldes para Jabones y Velas",
                  duration: "1h 20min",
                  lessons: [
                    "Diseños creativos y tendencias actuales en jabones",
                    "Moldes para velas: formas geométricas y orgánicas",
                    "Texturas, grabados y acabados especiales profesionales",
                    "Moldes de múltiples cavidades para producción en serie",
                  ],
                },
                {
                  title: "Módulo 5: Proyectos Avanzados de Resina",
                  duration: "1h 45min",
                  lessons: [
                    "Arte en resina: bandejas, posavasos y decoración",
                    "Llaveros personalizados y accesorios de moda",
                    "Moldes para organización y decoración del hogar",
                    "Técnicas de pintura dentro de moldes y efectos especiales",
                  ],
                },
                {
                  title: "Módulo 6: Profesionalización y Negocio",
                  duration: "1h 25min",
                  lessons: [
                    "Solución de problemas: burbujas, pegajoso, mal curado",
                    "Optimización de costos y aprovechamiento de materiales",
                    "Moldes reutilizables de ultra larga duración",
                    "Estrategias para vender tus creaciones y ganar dinero",
                  ],
                },
              ].map((module, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <PlayCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                          <h3 className="text-xl font-bold">{module.title}</h3>
                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            {module.duration}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <li key={lessonIndex} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm">{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Total Value */}
            <Card className="mt-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-6 text-center">
                <p className="text-lg font-semibold mb-2">Contenido Total</p>
                <p className="text-3xl font-bold text-primary mb-2">8 Horas · 50+ Lecciones</p>
                <p className="text-muted-foreground">Todo organizado en 6 módulos progresivos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
                🎁 BONOS INCLUIDOS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Bonos Exclusivos por Valor de $147
              </h2>
              <p className="text-lg text-muted-foreground">
                Obtén estos recursos adicionales sin costo extra
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "Plantillas de Diseño",
                  value: "$47",
                  description: "50 plantillas listas para usar en tus proyectos",
                  icon: Download,
                },
                {
                  title: "Guía de Proveedores",
                  value: "$30",
                  description: "Lista completa de dónde comprar materiales baratos",
                  icon: BookOpen,
                },
                {
                  title: "Grupo VIP Privado",
                  value: "$70/año",
                  description: "Comunidad exclusiva + soporte directo incluido",
                  icon: Users,
                },
              ].map((bonus, index) => (
                <Card key={index} className="border-2 border-primary/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-bold rounded-bl-lg">
                    Valor: {bonus.value}
                  </div>
                  <CardContent className="p-6 pt-10">
                    <bonus.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">{bonus.title}</h3>
                    <p className="text-muted-foreground text-sm">{bonus.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-2 border-primary bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardContent className="p-6 text-center">
                <p className="text-lg font-semibold text-primary mb-2">Valor Total de los Bonos</p>
                <p className="text-4xl font-bold mb-2">$147 USD</p>
                <p className="text-muted-foreground">Incluidos gratis con tu compra hoy</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits / What's Included */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Tu Inversión Incluye
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: PlayCircle,
                  title: "Videos en Alta Calidad HD",
                  description: "Lecciones cristalinas con demostraciones paso a paso. Sin confusiones, todo explicado claramente.",
                },
                {
                  icon: Download,
                  title: "Recursos Descargables",
                  description: "Guías PDF imprimibles, listas de compras, plantillas y hojas de referencia rápida.",
                },
                {
                  icon: Clock,
                  title: "Acceso de Por Vida",
                  description: "Aprende a tu ritmo, sin presiones. El curso es tuyo para siempre, sin fechas de vencimiento.",
                },
                {
                  icon: Users,
                  title: "Comunidad Privada VIP",
                  description: "Grupo exclusivo de Facebook para compartir proyectos, hacer preguntas y networking.",
                },
                {
                  icon: Zap,
                  title: "Actualizaciones Gratuitas",
                  description: "Recibe nuevas lecciones, técnicas y contenido actualizado sin pagar un centavo más.",
                },
                {
                  icon: Award,
                  title: "Soporte Directo del Instructor",
                  description: "Resuelve tus dudas directamente con el experto. Respuestas en menos de 24 horas.",
                },
              ].map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Historias de Éxito Reales
              </h2>
              <p className="text-lg text-muted-foreground">
                Más de 5,000 estudiantes ya están creando y vendiendo
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "María González",
                  role: "Emprendedora de Joyería",
                  text: "Recuperé mi inversión en el primer mes vendiendo pendientes de resina. El curso es súper completo y fácil de seguir. ¡Ahora tengo mi propio negocio!",
                  rating: 5,
                  image: "MG",
                  result: "Ingresos: $800/mes"
                },
                {
                  name: "Carlos Ramírez",
                  role: "Fabricante de Velas",
                  text: "Las técnicas profesionales me ahorraron cientos en moldes comerciales. Ahora creo mis propios diseños únicos que nadie más tiene.",
                  rating: 5,
                  image: "CR",
                  result: "Ahorro: $500+"
                },
                {
                  name: "Ana Martínez",
                  role: "Artista de Resina",
                  text: "Pensé que sería difícil, pero las explicaciones son tan claras que hice mi primer molde perfecto. Valió cada centavo y más.",
                  rating: 5,
                  image: "AM",
                  result: "100+ moldes creados"
                },
              ].map((testimonial, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-lg">
                        {testimonial.image}
                      </div>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                      {testimonial.result}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Invierte en Tu Futuro Creativo Hoy
              </h2>
              <p className="text-lg text-muted-foreground">
                Menos de lo que cuesta un molde profesional · Aprende a crear ilimitados
              </p>
            </div>

            {/* Value Breakdown */}
            <Card className="mb-8 border-2">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-center">Desglose del Valor Total</h3>
                <div className="space-y-3 max-w-md mx-auto">
                  {[
                    { item: "Curso completo (50 lecciones)", value: "$197" },
                    { item: "Bonos exclusivos", value: "$147" },
                    { item: "Acceso de por vida", value: "$99" },
                    { item: "Soporte del instructor", value: "$50" },
                    { item: "Actualizaciones futuras", value: "$47" },
                  ].map((row, index) => (
                    <div key={index} className="flex justify-between items-center pb-2 border-b">
                      <span className="text-muted-foreground">{row.item}</span>
                      <span className="font-semibold">{row.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-4 text-lg font-bold">
                    <span>Valor Total:</span>
                    <span className="text-2xl">$540</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Opción 1 - 25% OFF */}
              <Card className="border-4 border-primary/50 relative overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-2 text-sm font-bold">
                  MÁS POPULAR
                </div>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      Opción Recomendada
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Plan Estándar</h3>
                    <div className="mb-4">
                      <span className="text-muted-foreground line-through text-xl mr-2">$50</span>
                      <div className="text-5xl font-bold text-primary">$37.50</div>
                      <span className="text-sm text-muted-foreground">USD - Pago único</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {[
                      "Acceso completo al curso",
                      "50+ lecciones en video HD",
                      "Todos los bonos incluidos",
                      "Grupo privado VIP",
                      "Soporte del instructor",
                      "Garantía 30 días",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href="https://go.hotmart.com/X102350414C?ap=24f4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="cta" size="lg" className="w-full text-lg">
                      Comprar Ahora
                    </Button>
                  </a>
                  <p className="text-xs text-center text-muted-foreground mt-3">
                    Acceso inmediato · Pago seguro
                  </p>
                </CardContent>
              </Card>

              {/* Opción 2 - 40% OFF - CONTINUACIÓN */}
              <Card className="border-4 border-destructive/50 relative overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="absolute top-0 right-0 bg-destructive text-destructive-foreground px-4 py-2 text-sm font-bold">
                  MEJOR PRECIO
                </div>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-destructive/10 text-destructive px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      Oferta Ultra Limitada
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Plan Premium</h3>
                    <div className="mb-4">
                      <span className="text-muted-foreground line-through text-xl mr-2">$50</span>
                      <div className="text-5xl font-bold text-destructive">$30</div>
                      <span className="text-sm text-muted-foreground">USD - Pago único</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {[
                      "Todo lo del Plan Estándar",
                      "Ahorro adicional de $7.50",
                      "Bonos por valor de $147",
                      "Soporte prioritario 24h",
                      "Plantillas exclusivas extra",
                      "Acceso anticipado a nuevos módulos",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-destructive flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href="https://go.hotmart.com/X102350414C?ap=8667" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="destructive" size="lg" className="w-full text-lg">
                      Aprovechar 40% OFF
                    </Button>
                  </a>
                  <p className="text-xs text-center text-muted-foreground mt-3">
                    Solo 23 cupos disponibles
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Garantía 30 días</div>
                  <div className="text-xs">100% de reembolso</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Acceso Inmediato</div>
                  <div className="text-xs">Empieza en 2 minutos</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Pago Seguro</div>
                  <div className="text-xs">Encriptación SSL 256-bit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-muted-foreground">
                Resolvemos tus dudas antes de que compres
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "¿Necesito experiencia previa?",
                  a: "No, absolutamente ninguna. El curso está diseñado para principiantes totales. Empiezas desde lo más básico y avanzas paso a paso hasta técnicas profesionales.",
                },
                {
                  q: "¿Qué materiales necesito y cuánto cuestan?",
                  a: "La inversión inicial en materiales es de aproximadamente $30-50 USD. Incluimos una lista completa de proveedores económicos y alternativas para cada presupuesto.",
                },
                {
                  q: "¿Por cuánto tiempo tengo acceso?",
                  a: "Acceso de por vida, sin límites. Puedes ver las lecciones cuantas veces quieras, cuando quieras, desde cualquier dispositivo.",
                },
                {
                  q: "¿Cómo funciona la garantía de 30 días?",
                  a: "Si no estás 100% satisfecho con el curso, te devolvemos tu dinero completo, sin preguntas. Solo envías un email y procesamos tu reembolso en 24-48 horas.",
                },
                {
                  q: "¿Puedo ver el curso desde mi celular?",
                  a: "Sí, el curso funciona en cualquier dispositivo: computadora, tablet o smartphone. La plataforma es responsive y se adapta a tu pantalla.",
                },
                {
                  q: "¿Recibiré un certificado al finalizar?",
                  a: "Sí, recibes un certificado digital de finalización que puedes agregar a tu portfolio o compartir en redes sociales.",
                },
                {
                  q: "¿Hay pagos mensuales o suscripciones?",
                  a: "No, es un pago único. Una sola vez y el curso es tuyo para siempre, incluyendo todas las actualizaciones futuras sin costo adicional.",
                },
                {
                  q: "¿Puedo monetizar lo que aprendo?",
                  a: "¡Sí, absolutamente! Incluimos un módulo completo sobre cómo vender tus creaciones y generar ingresos. Muchos estudiantes ya tienen negocios rentables.",
                },
              ].map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3 flex items-start gap-2">
                      <span className="text-primary flex-shrink-0">Q:</span>
                      <span>{faq.q}</span>
                    </h3>
                    <p className="text-muted-foreground pl-6">
                      <span className="text-primary font-bold">R:</span> {faq.a}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-primary">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Garantía Incondicional de 30 Días
                </h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Estamos tan seguros de que este curso transformará tu habilidad para crear moldes, 
                  que te damos 30 días completos para probarlo. Si no estás satisfecho por cualquier razón, 
                  te devolvemos el 100% de tu dinero. <strong className="text-foreground">Sin preguntas, sin complicaciones.</strong>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://go.hotmart.com/X102350414C?ap=24f4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="cta" size="lg">
                      Probar Sin Riesgo Ahora
                    </Button>
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  El riesgo es 100% nuestro. Tú solo ganas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA - Urgency */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-destructive px-4 py-2 rounded-full text-sm font-bold mb-6">
              ⏰ OFERTA POR TIEMPO LIMITADO
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              ¿Listo para Crear Tus Propios Moldes Profesionales?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Únete a <strong>5,127 estudiantes</strong> que ya están generando ingresos 
              con sus creaciones. No dejes pasar esta oportunidad.
            </p>

            {/* Urgency Elements */}
            <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">5,127</div>
                <div className="text-sm opacity-90">Estudiantes Activos</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">4.9★</div>
                <div className="text-sm opacity-90">Valoración Media</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">98%</div>
                <div className="text-sm opacity-90">Satisfacción</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a 
                href="https://go.hotmart.com/X102350414C?ap=24f4" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="secondary" 
                  size="xl" 
                  className="w-full sm:w-auto text-lg font-bold"
                >
                  Comenzar Ahora - $37.50
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>Acceso inmediato</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>Garantía 30 días</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>Soporte incluido</span>
              </div>
            </div>

            <p className="text-sm mt-8 opacity-75">
              💳 Pago 100% seguro · 🔒 Encriptación SSL · 🌎 Aceptamos todas las tarjetas
            </p>
          </div>
        </div>
      </section>

      {/* Last Trust Section */}
      <section className="py-12 border-t bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Curso creado por expertos · Más de 5,000 estudiantes satisfechos · 
              Garantía de devolución · Acceso de por vida
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold">Pago Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold">Certificado Incluido</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold">Comunidad Activa</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Producto;
