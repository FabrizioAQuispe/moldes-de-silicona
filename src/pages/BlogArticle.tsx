import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Share2 } from "lucide-react";

const blogContent: Record<string, { title: string; content: string; date: string; readTime: string; metaDescription: string }> = {
  "como-hacer-moldes-silicona-paso-a-paso": {
    title: "Cómo Hacer Moldes de Silicona Paso a Paso: Guía Completa para Principiantes",
    metaDescription: "Aprende a crear moldes de silicona profesionales con esta guía paso a paso. Tutorial completo con materiales, técnicas y consejos para principiantes.",
    date: "2025-01-15",
    readTime: "8 min",
    content: `
      <h2>Introducción a los Moldes de Silicona</h2>
      <p>Crear moldes de silicona caseros es más fácil de lo que piensas. Con los materiales correctos y siguiendo estos pasos, podrás hacer moldes profesionales desde la comodidad de tu hogar.</p>

      <h2>Materiales Necesarios</h2>
      <ul>
        <li><strong>Silicona líquida</strong>: Elige silicona de grado alimenticio o para manualidades</li>
        <li><strong>Catalizador</strong>: Generalmente viene incluido con la silicona</li>
        <li><strong>Objeto modelo</strong>: Lo que quieres duplicar</li>
        <li><strong>Contenedor</strong>: Para crear el molde</li>
        <li><strong>Vasos medidores</strong>: Para proporciones exactas</li>
        <li><strong>Palitos de madera</strong>: Para mezclar</li>
        <li><strong>Desmoldante</strong>: Opcional pero recomendado</li>
      </ul>

      <h2>Paso 1: Preparación del Área de Trabajo</h2>
      <p>Limpia y prepara un área bien ventilada. Cubre la superficie con papel o plástico para protegerla. Asegúrate de tener todos los materiales a mano antes de comenzar.</p>

      <h2>Paso 2: Preparar el Modelo</h2>
      <p>Limpia el objeto que vas a moldear y aplica una capa ligera de desmoldante. Esto facilitará la extracción del modelo una vez que la silicona haya curado.</p>

      <h2>Paso 3: Mezclar la Silicona</h2>
      <p>Sigue las instrucciones del fabricante para las proporciones correctas. Generalmente es una mezcla 1:1 de silicona y catalizador. Mezcla lentamente para evitar burbujas de aire.</p>

      <h2>Paso 4: Verter la Silicona</h2>
      <p>Vierte la silicona mezclada sobre el modelo de forma lenta y constante. Deja que fluya naturalmente para minimizar las burbujas. Golpea suavemente el contenedor para que las burbujas salgan a la superficie.</p>

      <h2>Paso 5: Tiempo de Curado</h2>
      <p>Deja que la silicona cure según las especificaciones del fabricante, generalmente entre 4 y 24 horas. No muevas ni toques el molde durante este tiempo.</p>

      <h2>Paso 6: Desmoldar</h2>
      <p>Una vez completamente curada, retira cuidadosamente el modelo original del molde de silicona. Tu molde está listo para usar!</p>

      <h2>Consejos Profesionales</h2>
      <ul>
        <li>Trabaja en un área con temperatura entre 20-25°C para mejores resultados</li>
        <li>Usa una cámara de vacío para eliminar burbujas si haces moldes de alta precisión</li>
        <li>Guarda tus moldes en un lugar fresco y seco lejos de la luz directa del sol</li>
        <li>Limpia tus moldes con agua y jabón suave después de cada uso</li>
      </ul>

      <h2>Errores Comunes a Evitar</h2>
      <p>No mezcles demasiado rápido, no uses proporciones incorrectas, y nunca intentes acelerar el curado con calor directo. Estos errores pueden arruinar tu molde.</p>

      <h2>Conclusión</h2>
      <p>Crear moldes de silicona es una habilidad valiosa que te permitirá duplicar objetos para joyería, jabones, velas y mucho más. Con práctica, lograrás resultados profesionales.</p>

      <p><strong>¿Quieres aprender técnicas más avanzadas?</strong> Nuestro curso completo incluye más de 50 lecciones en video con proyectos paso a paso.</p>
    `,
  },
  "ideas-creativas-moldes-silicona-caseros": {
    title: "50 Ideas Creativas para Moldes de Silicona Caseros que Puedes Vender",
    metaDescription: "Descubre 50 ideas creativas y rentables de productos que puedes hacer con moldes de silicona caseros. Perfecto para emprender tu negocio artesanal.",
    date: "2025-01-12",
    readTime: "10 min",
    content: `
      <h2>Convierte tus Moldes de Silicona en un Negocio Rentable</h2>
      <p>Los moldes de silicona abren un mundo de posibilidades para crear productos únicos que puedes vender. Aquí te presentamos 50 ideas probadas que generan ingresos.</p>

      <h2>Joyería y Accesorios (Ideas 1-15)</h2>
      <ul>
        <li>Pendientes de resina con flores secas</li>
        <li>Anillos con diseños geométricos</li>
        <li>Colgantes personalizados</li>
        <li>Pulseras con incrustaciones de metal</li>
        <li>Broches artesanales</li>
        <li>Llaveros de resina colorida</li>
        <li>Clips para cabello decorativos</li>
        <li>Dijes para pulseras</li>
        <li>Gemelos para camisas</li>
        <li>Pins personalizados</li>
      </ul>

      <h2>Decoración del Hogar (Ideas 16-30)</h2>
      <ul>
        <li>Velas aromáticas con formas únicas</li>
        <li>Portavelas decorativos</li>
        <li>Jabones artesanales personalizados</li>
        <li>Posavasos de resina</li>
        <li>Imanes de nevera creativos</li>
        <li>Bandejas decorativas</li>
        <li>Macetas pequeñas de cemento</li>
        <li>Figuras decorativas</li>
        <li>Pisapapeles de resina</li>
        <li>Organizadores de escritorio</li>
      </ul>

      <h2>Productos para Fiestas y Eventos (Ideas 31-45)</h2>
      <ul>
        <li>Bombas de baño personalizadas</li>
        <li>Mini chocolates con formas temáticas</li>
        <li>Jabones de recuerdo para bodas</li>
        <li>Velas para eventos corporativos</li>
        <li>Dulces de resina comestibles</li>
      </ul>

      <h2>Cómo Monetizar tus Creaciones</h2>
      <p>Vende en plataformas como Etsy, Instagram, o ferias artesanales. El secreto está en crear productos únicos y de alta calidad.</p>

      <h2>Tips para Vender Más</h2>
      <ul>
        <li>Fotografía profesional de productos</li>
        <li>Descripciones detalladas y atractivas</li>
        <li>Empaque creativo y personalizado</li>
        <li>Ofrece personalización</li>
        <li>Mantén precios competitivos pero justos</li>
      </ul>

      <p><strong>¿Quieres dominar todas estas técnicas?</strong> Nuestro curso te enseña a crear moldes para todos estos productos y más.</p>
    `,
  },
  "errores-comunes-hacer-moldes-silicona": {
    title: "7 Errores Comunes al Hacer Moldes de Silicona y Cómo Evitarlos",
    metaDescription: "Evita los errores más comunes al crear moldes de silicona. Guía con soluciones prácticas para lograr moldes perfectos cada vez.",
    date: "2025-01-10",
    readTime: "6 min",
    content: `
      <h2>Aprende de los Errores Más Frecuentes</h2>
      <p>Incluso los expertos cometieron estos errores al principio. Aprende a evitarlos y ahorra tiempo y dinero.</p>

      <h2>Error #1: Proporciones Incorrectas</h2>
      <p><strong>El problema:</strong> No medir correctamente la silicona y el catalizador.</p>
      <p><strong>La solución:</strong> Siempre usa vasos medidores precisos y sigue exactamente las instrucciones del fabricante. Una balanza digital es tu mejor aliado.</p>

      <h2>Error #2: Mezclar Demasiado Rápido</h2>
      <p><strong>El problema:</strong> Crear burbujas de aire al mezclar vigorosamente.</p>
      <p><strong>La solución:</strong> Mezcla lentamente y de forma constante. Usa movimientos circulares suaves y toma tu tiempo.</p>

      <h2>Error #3: No Usar Desmoldante</h2>
      <p><strong>El problema:</strong> El modelo se queda pegado dentro del molde.</p>
      <p><strong>La solución:</strong> Aplica siempre una capa ligera de desmoldante o vaselina antes de verter la silicona.</p>

      <h2>Error #4: Temperatura Incorrecta</h2>
      <p><strong>El problema:</strong> Trabajar en ambientes demasiado fríos o calientes.</p>
      <p><strong>La solución:</strong> Mantén tu área de trabajo entre 20-25°C para un curado óptimo.</p>

      <h2>Error #5: No Dejar Curar Completamente</h2>
      <p><strong>El problema:</strong> Apresurarse y desmoldar antes de tiempo.</p>
      <p><strong>La solución:</strong> Espera el tiempo completo de curado recomendado, incluso si parece estar listo antes.</p>

      <h2>Error #6: Usar el Tipo Incorrecto de Silicona</h2>
      <p><strong>El problema:</strong> No todas las siliconas sirven para todos los proyectos.</p>
      <p><strong>La solución:</strong> Investiga qué tipo de silicona necesitas según tu proyecto específico.</p>

      <h2>Error #7: No Preparar Bien el Modelo</h2>
      <p><strong>El problema:</strong> Suciedad o imperfecciones en el modelo original.</p>
      <p><strong>La solución:</strong> Limpia meticulosamente el modelo y repara cualquier imperfección antes de hacer el molde.</p>

      <h2>Conclusión</h2>
      <p>Evitar estos errores te ahorrará frustraciones y materiales desperdiciados. Con práctica y atención a los detalles, crearás moldes perfectos.</p>
    `,
  },
};

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? blogContent[slug] : null;

  if (!article) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Artículo no encontrado</h1>
          <Link to="/blog">
            <Button variant="outline">Volver al Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <article className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" />
          Volver al Blog
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span>{article.date}</span>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              <Share2 className="h-4 w-4" />
              <span>Compartir</span>
            </button>
          </div>
        </header>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-foreground
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
            prose-p:text-muted-foreground prose-p:mb-4
            prose-ul:text-muted-foreground prose-ul:mb-4
            prose-li:mb-2
            prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* CTA Section */}
        <div className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border-2 border-primary/20">
          <h3 className="text-2xl font-bold mb-4">¿Quieres Aprender Más?</h3>
          <p className="text-muted-foreground mb-6">
            Descubre técnicas avanzadas y proyectos paso a paso en nuestro curso completo de moldes de silicona.
          </p>
          <a 
            href="https://go.hotmart.com/X102350414C?ap=24f4" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="cta" size="lg">
              Ver Curso Completo
            </Button>
          </a>
        </div>
      </article>
    </div>
  );
};

export default BlogArticle;
