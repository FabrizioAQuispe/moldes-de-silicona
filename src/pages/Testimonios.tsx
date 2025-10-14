import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "María González",
    location: "México",
    rating: 5,
    text: "Este curso cambió mi vida. Ahora vendo mis propias joyas de resina y gano más de $500 al mes. Las explicaciones son súper claras y los proyectos son hermosos.",
    product: "Joyería de Resina",
  },
  {
    name: "Carlos Ramírez",
    location: "España",
    rating: 5,
    text: "Siempre quise hacer velas personalizadas pero no sabía por dónde empezar. Este curso me dio todas las herramientas y ahora tengo mi propio negocio de velas artesanales.",
    product: "Velas Decorativas",
  },
  {
    name: "Ana Martínez",
    location: "Argentina",
    rating: 5,
    text: "La inversión valió cada centavo. Los trucos profesionales me ahorraron mucho material desperdiciado. En un mes ya recuperé lo que pagué vendiendo mis creaciones.",
    product: "Jabones Artesanales",
  },
  {
    name: "Luis Hernández",
    location: "Colombia",
    rating: 5,
    text: "Como principiante total, tenía miedo de no entender. Pero las lecciones son tan detalladas que cualquiera puede seguirlas. Ya hice más de 20 moldes diferentes.",
    product: "Múltiples Proyectos",
  },
  {
    name: "Patricia Silva",
    location: "Chile",
    rating: 5,
    text: "Lo mejor es el acceso de por vida. Puedo volver a ver las lecciones cuando necesito recordar algo. El grupo de estudiantes también es increíble para compartir ideas.",
    product: "Decoración del Hogar",
  },
  {
    name: "Roberto Díaz",
    location: "Perú",
    rating: 5,
    text: "Empecé haciendo moldes como hobby y ahora es mi negocio principal. El módulo de cómo vender tus creaciones fue especialmente útil.",
    product: "Negocio de Moldes",
  },
  {
    name: "Carmen Torres",
    location: "Ecuador",
    rating: 5,
    text: "Los materiales descargables son excelentes. Siempre tengo la lista de compras a mano. Mis moldes quedan perfectos siguiendo las técnicas del curso.",
    product: "Proyectos de Resina",
  },
  {
    name: "Miguel Ángel",
    location: "Uruguay",
    rating: 5,
    text: "Intenté aprender por YouTube pero era muy confuso. Este curso está organizado de forma lógica y progresiva. ¡Finalmente entendí todo!",
    product: "Aprendizaje Estructurado",
  },
  {
    name: "Laura Jiménez",
    location: "Venezuela",
    rating: 5,
    text: "Hago moldes para pasteles y decoración comestible. El curso me dio ideas que nunca se me habrían ocurrido. Mis clientes están encantados.",
    product: "Repostería Creativa",
  },
  {
    name: "Fernando Castro",
    location: "Costa Rica",
    rating: 5,
    text: "El soporte del instructor es increíble. Respondió todas mis dudas en menos de 24 horas. Se nota que realmente se preocupa por los estudiantes.",
    product: "Soporte Excelente",
  },
  {
    name: "Gabriela Moreno",
    location: "Panamá",
    rating: 5,
    text: "Como maestra de arte, uso estos moldes para mis clases. Los estudiantes se divierten muchísimo y aprenden técnicas profesionales.",
    product: "Educación Artística",
  },
  {
    name: "Andrés Vargas",
    location: "Nicaragua",
    rating: 5,
    text: "La calidad de los videos es excelente. Se ve cada detalle claramente. Además, las actualizaciones gratuitas son un gran plus.",
    product: "Contenido Premium",
  },
];

const Testimonios = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Lo Que Dicen{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Nuestros Estudiantes
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Más de 5,000 personas ya están creando moldes de silicona profesionales y ganando dinero con sus creaciones
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
            <div className="text-sm text-muted-foreground">Estudiantes Activos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Valoración Promedio</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Satisfacción</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Proyectos Enseñados</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="text-sm text-primary mt-1">{testimonial.product}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border-2 border-primary/20 p-12">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para Ser el Próximo Caso de Éxito?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Únete a miles de estudiantes que ya están creando moldes profesionales y ganando dinero con sus creaciones
          </p>
          <a 
            href="https://go.hotmart.com/X102350414C?ap=24f4" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="cta" size="xl">
              Comenzar Ahora - 25% OFF
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonios;
