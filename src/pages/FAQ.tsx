import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/acordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "¿Necesito experiencia previa para tomar este curso?",
    answer: "No, el curso está diseñado para principiantes totales. Comenzamos desde cero explicando todos los conceptos básicos y avanzamos progresivamente. Si nunca has trabajado con silicona, este curso es perfecto para ti.",
  },
  {
    question: "¿Qué tipo de silicona necesito comprar?",
    answer: "En el curso te explicamos exactamente qué tipos de silicona usar según el proyecto. Generalmente usamos silicona líquida de dos componentes (silicona + catalizador). Te proporcionamos una lista completa de materiales y dónde comprarlos.",
  },
  {
    question: "¿Cuánto tiempo tengo acceso al curso?",
    answer: "Tienes acceso de por vida al curso completo. Puedes verlo a tu ritmo, las veces que quieras, sin límites de tiempo. Además, recibes todas las actualizaciones futuras sin costo adicional.",
  },
  {
    question: "¿Puedo hacer moldes para vender mis productos?",
    answer: "¡Absolutamente! Muchos de nuestros estudiantes usan los moldes para crear productos que venden. El curso incluye un módulo específico sobre cómo monetizar tus creaciones y convertir tu hobby en un negocio rentable.",
  },
  {
    question: "¿Los moldes funcionan para resina, jabón y velas?",
    answer: "Sí, los moldes de silicona son versátiles y funcionan perfectamente para resina epoxi, jabones, velas, chocolate, yeso, cemento y muchos otros materiales. En el curso cubrimos técnicas específicas para cada tipo de proyecto.",
  },
  {
    question: "¿Qué pasa si tengo dudas durante el curso?",
    answer: "Tienes soporte directo del instructor. Puedes hacer preguntas en el área de comentarios de cada lección o en el grupo privado de estudiantes. Respondemos todas las dudas en menos de 24 horas.",
  },
  {
    question: "¿El curso está en video o es solo texto?",
    answer: "El curso está completamente en video de alta calidad. Cada lección incluye demostraciones paso a paso para que puedas ver exactamente cómo hacer cada técnica. También incluye guías PDF descargables como complemento.",
  },
  {
    question: "¿Cuánto cuesta el material para empezar?",
    answer: "Puedes empezar con una inversión inicial de $20-30 USD en materiales básicos. En el curso te enseñamos cómo optimizar tus recursos y dónde conseguir los mejores precios. Con el tiempo, la silicona se paga sola cuando vendes tus creaciones.",
  },
  {
    question: "¿Hay garantía de devolución?",
    answer: "Sí, ofrecemos una garantía de devolución de 30 días sin preguntas. Si por cualquier motivo no estás satisfecho con el curso, te devolvemos el 100% de tu dinero.",
  },
  {
    question: "¿Puedo descargar los videos?",
    answer: "El curso está en una plataforma en línea para garantizar que siempre tengas la versión más actualizada. Sin embargo, incluimos guías PDF descargables con todos los pasos de cada proyecto.",
  },
  {
    question: "¿Los moldes de silicona duran mucho tiempo?",
    answer: "Con el cuidado adecuado, los moldes de silicona pueden durar años y cientos de usos. En el curso te enseñamos cómo limpiar, mantener y almacenar tus moldes para maximizar su vida útil.",
  },
  {
    question: "¿Puedo hacer moldes de objetos grandes?",
    answer: "Sí, el curso incluye técnicas para crear moldes de diferentes tamaños, desde pequeños detalles para joyería hasta objetos más grandes como bandejas decorativas. Todo depende de la cantidad de silicona que uses.",
  },
  {
    question: "¿Es seguro trabajar con silicona en casa?",
    answer: "Sí, la silicona que usamos es segura para uso doméstico. Te enseñamos todas las medidas de seguridad necesarias, como trabajar en áreas ventiladas y usar guantes. Es mucho más seguro que muchas otras manualidades.",
  },
  {
    question: "¿Qué diferencia este curso de los tutoriales gratuitos de YouTube?",
    answer: "Este curso está estructurado de forma progresiva y lógica, cubre desde lo básico hasta técnicas avanzadas, incluye soporte directo, recursos descargables, y una comunidad de estudiantes. No tienes que buscar información fragmentada en múltiples videos.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Preguntas{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Frecuentes
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Resolvemos todas tus dudas sobre el curso de moldes de silicona
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border-2 border-primary/20 p-12">
          <h2 className="text-3xl font-bold mb-4">
            ¿Tienes Más Preguntas?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            No te quedes con dudas. Contáctanos o aprovecha nuestra garantía de devolución de 30 días para probar el curso sin riesgos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://go.hotmart.com/X102350414C?ap=24f4" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="cta" size="lg" className="w-full sm:w-auto">
                Comenzar Ahora
              </Button>
            </a>
            <Button variant="outline" size="lg" asChild>
              <a href="/contacto">Contactar Soporte</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
