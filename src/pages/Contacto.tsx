import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Mail, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contacto = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive",
      });
      return;
    }

    if (!email.includes("@")) {
      toast({
        title: "Error",
        description: "Por favor ingresa un email válido",
        variant: "destructive",
      });
      return;
    }

    // Aquí normalmente enviarías el formulario a un backend
    toast({
      title: "¡Mensaje Enviado!",
      description: "Te responderemos en menos de 24 horas",
    });

    // Limpiar formulario
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contáctanos
          </h1>
          <p className="text-xl text-muted-foreground">
            ¿Tienes preguntas? Estamos aquí para ayudarte
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre Completo
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="¿En qué podemos ayudarte?"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" variant="cta" size="lg" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Newsletter */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a 
                        href="mailto:info@moldesdesilic ona.com" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@moldesdesilic ona.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Tiempo de Respuesta</h3>
                      <p className="text-muted-foreground">
                        Respondemos en menos de 24 horas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MessageCircle className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Soporte del Curso</h3>
                      <p className="text-muted-foreground">
                        Los estudiantes tienen acceso al grupo privado y soporte prioritario
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Suscríbete a Nuestro Newsletter
                </h2>
                <p className="text-muted-foreground mb-6">
                  Recibe tips gratuitos, ideas de proyectos y ofertas exclusivas en tu email
                </p>
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  toast({
                    title: "¡Suscrito!",
                    description: "Revisa tu email para confirmar tu suscripción",
                  });
                }}>
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    required
                  />
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Suscribirme Gratis
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  No enviamos spam. Puedes cancelar en cualquier momento.
                </p>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-3">
                  ¿Listo para Comenzar?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Accede al curso completo ahora con descuento especial
                </p>
                <a 
                  href="https://go.hotmart.com/X102350414C?ap=24f4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="cta" size="lg" className="w-full">
                    Ver Curso - 25% OFF
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
