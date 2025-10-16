import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, Clock, Share2, BookmarkPlus, CheckCircle2, TrendingUp } from "lucide-react";

const blogContent: Record<string, { 
  title: string; 
  content: string; 
  date: string; 
  readTime: string; 
  metaDescription: string;
  category: string;
  author: string;
  tableOfContents: { title: string; id: string }[];
}> = {
  "como-hacer-moldes-silicona-paso-a-paso": {
    title: "Cómo Hacer Moldes de Silicona Paso a Paso: Guía Completa 2025",
    metaDescription: "Aprende a crear moldes de silicona profesionales con esta guía paso a paso. Tutorial completo con materiales, técnicas y consejos para principiantes.",
    date: "15 de Enero, 2025",
    readTime: "8 min lectura",
    category: "Tutorial",
    author: "Fabrizio Quispe",
    tableOfContents: [
      { title: "Materiales Necesarios", id: "materiales" },
      { title: "Paso 1: Preparación", id: "paso1" },
      { title: "Paso 2: Preparar el Modelo", id: "paso2" },
      { title: "Paso 3: Mezclar la Silicona", id: "paso3" },
      { title: "Paso 4: Verter la Silicona", id: "paso4" },
      { title: "Paso 5: Tiempo de Curado", id: "paso5" },
      { title: "Consejos Profesionales", id: "consejos" },
    ],
    content: `
      <div class="lead-paragraph">
        <p><strong>Crear moldes de silicona caseros es más fácil de lo que piensas.</strong> Con los materiales correctos y siguiendo esta guía paso a paso, podrás fabricar moldes profesionales desde la comodidad de tu hogar. Esta técnica te permitirá duplicar objetos para joyería, jabones, velas, resina y mucho más.</p>
      </div>

      <div class="info-box">
        <h3>⏱️ Tiempo total estimado: 4-24 horas (incluyendo curado)</h3>
        <p><strong>Nivel:</strong> Principiante | <strong>Costo aproximado:</strong> $30-50 USD</p>
      </div>

      <h2 id="materiales">Materiales Necesarios para Hacer Moldes de Silicona</h2>
      
      <p>Antes de comenzar, asegúrate de tener todos estos materiales a mano:</p>

      <div class="materials-checklist">
        <h3>Lista de Materiales Esenciales:</h3>
        <ul>
          <li><strong>✓ Silicona líquida:</strong> Elige silicona RTV (Room Temperature Vulcanizing) de grado alimenticio o para manualidades. Las marcas recomendadas incluyen Smooth-On, Reynolds y Polytek.</li>
          <li><strong>✓ Catalizador:</strong> Generalmente viene incluido con la silicona en proporción correcta (usualmente 10:1 o 1:1).</li>
          <li><strong>✓ Objeto modelo:</strong> El original que quieres duplicar. Debe estar limpio y sin imperfecciones.</li>
          <li><strong>✓ Contenedor:</strong> Puede ser de plástico, cartón o madera. Debe ser 2-3 cm más grande que tu modelo.</li>
          <li><strong>✓ Vasos medidores:</strong> Para proporciones exactas. Usa vasos desechables o dedicados solo para silicona.</li>
          <li><strong>✓ Palitos de madera:</strong> Para mezclar sin crear burbujas.</li>
          <li><strong>✓ Desmoldante:</strong> Vaselina, spray desmoldante comercial o aceite mineral.</li>
          <li><strong>✓ Balanza digital (opcional pero recomendada):</strong> Para mediciones precisas en gramos.</li>
        </ul>
      </div>

      <h2 id="paso1">Paso 1: Preparación del Área de Trabajo</h2>
      
      <p>La preparación adecuada es clave para el éxito de tu molde:</p>

      <ol>
        <li><strong>Ventilación:</strong> Trabaja en un área bien ventilada. Abre ventanas o usa un ventilador.</li>
        <li><strong>Protección de superficies:</strong> Cubre tu mesa de trabajo con papel de periódico, plástico o cartón.</li>
        <li><strong>Temperatura ambiente:</strong> Asegúrate de que la temperatura esté entre 20-25°C (68-77°F) para un curado óptimo.</li>
        <li><strong>Organización:</strong> Ten todos los materiales a mano antes de comenzar, ya que trabajarás contra el reloj una vez mezcles la silicona.</li>
      </ol>

      <div class="warning-box">
        <p><strong>⚠️ Advertencia:</strong> Usa guantes desechables y gafas de protección. Aunque la silicona es generalmente segura, es mejor prevenir el contacto directo con la piel.</p>
      </div>

      <h2 id="paso2">Paso 2: Preparar el Modelo Original</h2>

      <p>Un modelo bien preparado es la diferencia entre un molde perfecto y uno lleno de imperfecciones:</p>

      <ol>
        <li><strong>Limpieza profunda:</strong> Lava el objeto con agua y jabón. Sécalo completamente.</li>
        <li><strong>Inspección:</strong> Revisa que no tenga polvo, grasa o residuos.</li>
        <li><strong>Aplicar desmoldante:</strong> Con un pincel suave o spray, aplica una capa muy fina de desmoldante. No uses demasiado o quedará marcado en el molde.</li>
        <li><strong>Posicionamiento:</strong> Coloca el modelo en el centro del contenedor, dejando espacio uniforme en todos los lados.</li>
      </ol>

      <div class="tip-box">
        <p><strong>💡 Tip Pro:</strong> Si tu modelo es muy detallado, considera sellar la superficie con barniz acrílico antes de aplicar el desmoldante para capturar cada detalle.</p>
      </div>

      <h2 id="paso3">Paso 3: Mezclar la Silicona Correctamente</h2>

      <p>Esta es la parte más crítica del proceso. Un error aquí puede arruinar todo el molde:</p>

      <h3>Proporciones Exactas</h3>
      <p>Lee cuidadosamente las instrucciones de tu silicona específica. Las proporciones más comunes son:</p>
      <ul>
        <li><strong>Silicona de estaño:</strong> Generalmente 10:1 (10 partes silicona, 1 parte catalizador)</li>
        <li><strong>Silicona de platino:</strong> Generalmente 1:1 (partes iguales)</li>
      </ul>

      <h3>Técnica de Mezclado</h3>
      <ol>
        <li><strong>Medir:</strong> Usa una balanza digital para mayor precisión o vasos medidores graduados.</li>
        <li><strong>Verter:</strong> Primero la silicona base, luego el catalizador en un vaso limpio.</li>
        <li><strong>Mezclar lentamente:</strong> Durante 2-3 minutos, usando movimientos circulares y raspando los lados y el fondo del vaso.</li>
        <li><strong>Evitar burbujas:</strong> NO mezcles vigorosamente. La clave es ser metódico y paciente.</li>
      </ol>

      <div class="tip-box">
        <p><strong>💡 Tip Pro:</strong> Algunos profesionales hacen un "segundo vertido" - vierten la mezcla en un segundo vaso limpio y vuelven a mezclar brevemente para asegurar homogeneidad perfecta.</p>
      </div>

      <h2 id="paso4">Paso 4: Verter la Silicona sobre el Modelo</h2>

      <p>Ahora viene el momento de la verdad. Tienes aproximadamente 20-45 minutos de tiempo de trabajo (pot life) según tu tipo de silicona:</p>

      <h3>Técnica de Vertido Profesional</h3>
      <ol>
        <li><strong>Punto de vertido alto:</strong> Vierte desde una altura de 30-40 cm formando un hilo fino y continuo.</li>
        <li><strong>Dejar fluir:</strong> Permite que la silicona fluya naturalmente sobre el modelo, no la dirijas con herramientas.</li>
        <li><strong>Llenar hasta cubrir:</strong> Continúa vertiendo hasta que el modelo esté completamente cubierto con al menos 1-2 cm de silicona por encima.</li>
        <li><strong>Eliminar burbujas:</strong> Golpea suavemente los lados del contenedor o usa un palillo para pinchar burbujas visibles en la superficie.</li>
      </ol>

      <div class="advanced-tip">
        <p><strong>🔬 Técnica Avanzada:</strong> Si tienes acceso a una cámara de vacío, coloca el molde dentro durante 5-10 minutos después de verter. Esto eliminará todas las microburbujas y te dará un molde de calidad profesional.</p>
      </div>

      <h2 id="paso5">Paso 5: Tiempo de Curado y Desmoldado</h2>

      <h3>Curado Inicial (4-6 horas)</h3>
      <p>La silicona comenzará a solidificarse. NO toques ni muevas el molde durante este tiempo.</p>

      <h3>Curado Completo (18-24 horas)</h3>
      <p>Para obtener las mejores propiedades mecánicas, espera el tiempo completo recomendado por el fabricante.</p>

      <h3>Factores que Afectan el Curado:</h3>
      <ul>
        <li><strong>Temperatura:</strong> Más calor = curado más rápido (pero no uses calor directo)</li>
        <li><strong>Humedad:</strong> La silicona de estaño cura más rápido con humedad</li>
        <li><strong>Grosor:</strong> Moldes más gruesos tardan más</li>
      </ul>

      <h3>Cómo Desmoldar Correctamente</h3>
      <ol>
        <li>Verifica que esté completamente curado presionando suavemente con la uña</li>
        <li>Flexiona suavemente el molde para despegar los bordes</li>
        <li>Extrae el modelo original con cuidado, sin forzar</li>
        <li>Si está pegado, usa un poco de jabón líquido como lubricante</li>
      </ol>

      <h2 id="consejos">Consejos Profesionales y Trucos del Oficio</h2>

      <div class="pro-tips-section">
        <h3>Para Mejores Resultados:</h3>
        <ul>
          <li><strong>🌡️ Control de temperatura:</strong> Mantén tu espacio de trabajo entre 20-25°C constante durante todo el proceso.</li>
          <li><strong>📦 Reutiliza contenedores:</strong> Los envases de yogurt, tuppers viejos o cajas de cartón forradas con cinta funcionan perfectamente.</li>
          <li><strong>💰 Ahorra silicona:</strong> Para modelos grandes, llena parte del contenedor con arcilla o espuma antes de verter la silicona.</li>
          <li><strong>🧼 Limpieza:</strong> Limpia las herramientas inmediatamente con alcohol isopropílico antes de que cure la silicona.</li>
          <li><strong>📝 Documenta todo:</strong> Anota las proporciones, tiempos y condiciones para replicar tus mejores moldes.</li>
        </ul>

        <h3>Almacenamiento de Moldes:</h3>
        <ul>
          <li>Guarda en lugar fresco y seco, lejos de la luz solar directa</li>
          <li>Espolvorea talco para bebé para evitar que se peguen entre sí</li>
          <li>No dobles ni aplastes los moldes durante el almacenamiento</li>
          <li>La vida útil promedio es de 2-5 años con cuidado apropiado</li>
        </ul>
      </div>

      <h2>Solución de Problemas Comunes</h2>

      <div class="troubleshooting">
        <h3>❌ Problema: El molde quedó pegajoso</h3>
        <p><strong>Causa:</strong> Proporciones incorrectas o no se mezcló bien.<br>
        <strong>Solución:</strong> Verifica las proporciones con una balanza digital la próxima vez.</p>

        <h3>❌ Problema: Muchas burbujas en el molde</h3>
        <p><strong>Causa:</strong> Mezclado demasiado rápido o aire atrapado.<br>
        <strong>Solución:</strong> Mezcla más lentamente y vierte desde mayor altura.</p>

        <h3>❌ Problema: El modelo no se puede extraer</h3>
        <p><strong>Causa:</strong> No usaste suficiente desmoldante.<br>
        <strong>Solución:</strong> Inyecta agua jabonosa con una jeringa alrededor del modelo.</p>

        <h3>❌ Problema: Detalles no se capturaron bien</h3>
        <p><strong>Causa:</strong> Burbujas microscópicas o silicona muy viscosa.<br>
        <strong>Solución:</strong> Usa una cámara de vacío o pincela silicona sobre el modelo primero.</p>
      </div>

      <h2>Próximos Pasos: Qué Hacer con Tu Molde</h2>

      <p>Ahora que tienes tu molde perfecto, aquí están las aplicaciones más populares:</p>

      <div class="applications-grid">
        <div class="application-card">
          <h3>🎨 Resina Epoxi</h3>
          <p>Crea joyería, llaveros, posavasos y arte decorativo</p>
        </div>

        <div class="application-card">
          <h3>🕯️ Velas</h3>
          <p>Diseña velas con formas únicas y profesionales</p>
        </div>

        <div class="application-card">
          <h3>🧼 Jabones</h3>
          <p>Fabrica jabones artesanales personalizados</p>
        </div>

        <div class="application-card">
          <h3>🍫 Chocolate</h3>
          <p>Moldes aptos para alimentos (usa silicona food-grade)</p>
        </div>
      </div>

      <h2>Conclusión: Tu Camino hacia la Maestría</h2>

      <p>Crear moldes de silicona es una habilidad valiosa que combina arte, técnica y precisión. Con esta guía paso a paso, tienes todo lo necesario para comenzar. Recuerda que la práctica hace al maestro - tus primeros moldes pueden no ser perfectos, pero cada uno te enseñará algo nuevo.</p>

      <p><strong>Los moldes de silicona abren un mundo de posibilidades creativas</strong> para emprendedores, artistas y entusiastas del DIY. Ya sea que quieras crear piezas únicas para uso personal o iniciar un negocio rentable, dominar esta técnica es una inversión que vale la pena.</p>

      <div class="key-takeaways">
        <h3>🎯 Puntos Clave para Recordar:</h3>
        <ul>
          <li>Las proporciones exactas son críticas para el éxito</li>
          <li>La paciencia durante el mezclado previene burbujas</li>
          <li>El desmoldante es tu mejor amigo</li>
          <li>No apresures el tiempo de curado</li>
          <li>Documenta tu proceso para mejorar continuamente</li>
        </ul>
      </div>
    `,
  },
  // Resto de artículos aquí...
};

const relatedArticles = [
  {
    slug: "mejor-silicona-para-moldes-caseros",
    title: "Mejor Silicona para Moldes: Guía de Compra 2025",
    readTime: "7 min",
  },
  {
    slug: "errores-comunes-hacer-moldes-silicona",
    title: "7 Errores Fatales al Hacer Moldes de Silicona",
    readTime: "6 min",
  },
  {
    slug: "ideas-creativas-moldes-silicona-caseros",
    title: "50 Ideas Creativas para Vender con Moldes",
    readTime: "10 min",
  },
];

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? blogContent[slug] : null;

  if (!article) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Artículo no encontrado</h1>
          <Link href="/blog">
            <Button variant="outline">Volver al Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Schema.org JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.metaDescription,
            author: {
              "@type": "Person",
              name: article.author,
            },
            datePublished: article.date,
            publisher: {
              "@type": "Organization",
              name: "Moldes de Silicona Pro",
            },
          }),
        }}
      />

      <div className="min-h-screen">
        {/* Breadcrumbs */}
        <div className="bg-muted/30 py-4 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">Inicio</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span className="text-foreground">{article.category}</span>
            </div>
          </div>
        </div>

        <div className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
              {/* Sidebar - Table of Contents */}
              <aside className="lg:col-span-3 hidden lg:block">
                <div className="sticky top-24">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4 flex items-center gap-2">
                        <BookmarkPlus className="h-4 w-4 text-primary" />
                        Contenido
                      </h3>
                      <nav className="space-y-2">
                        {article.tableOfContents.map((item) => (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                          >
                            {item.title}
                          </a>
                        ))}
                      </nav>
                    </CardContent>
                  </Card>
                </div>
              </aside>

              {/* Main Content */}
              <article className="lg:col-span-9">
                {/* Back Button */}
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Volver al Blog
                </Link>

                {/* Article Header */}
                <header className="mb-8">
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {article.category}
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    {article.title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-6 border-b">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                        {article.author[0]}
                      </div>
                      <span className="font-medium text-foreground">{article.author}</span>
                    </div>
                    <span>•</span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <button className="ml-auto flex items-center gap-2 hover:text-primary transition-colors">
                      <Share2 className="h-4 w-4" />
                      <span className="hidden sm:inline">Compartir</span>
                    </button>
                  </div>
                </header>

                {/* Article Content */}
                <div
                  className="prose prose-lg max-w-none
                    prose-headings:scroll-mt-20
                    prose-headings:font-bold prose-headings:text-foreground
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                    prose-ul:text-muted-foreground prose-ul:mb-6
                    prose-ol:text-muted-foreground prose-ol:mb-6
                    prose-li:mb-2 prose-li:leading-relaxed
                    prose-strong:text-foreground prose-strong:font-semibold
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Article Footer - CTA */}
                <div className="mt-16">
                  <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
                    <CardContent className="p-8 md:p-12">
                      <div className="text-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                          ¿Quieres Dominar los Moldes de Silicona?
                        </h3>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                          Accede a nuestro curso completo con <strong>50+ lecciones en video HD</strong>, 
                          técnicas avanzadas, proyectos paso a paso y soporte de por vida.
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-4 mb-8">
                          {[
                            "50 lecciones en video",
                            "Acceso de por vida",
                            "Soporte incluido",
                          ].map((benefit) => (
                            <div key={benefit} className="flex items-center gap-2 justify-center">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                              <span className="text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <a
                            href="https://go.hotmart.com/X102350414C?ap=24f4"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="cta" size="lg" className="w-full sm:w-auto">
                              Ver Curso Completo - 25% OFF
                            </Button>
                          </a>
                          <Link href="/">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto">
                              Más Información
                            </Button>
                          </Link>
                        </div>

                        <p className="text-xs text-muted-foreground mt-4">
                          🎁 Bonos por valor de $147 · Garantía 30 días
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Related Articles */}
                <div className="mt-16">
                  <div className="flex items-center gap-2 mb-6">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <h3 className="text-2xl font-bold">Artículos Relacionados</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {relatedArticles.map((related) => (
                      <Link key={related.slug} href={`/blog/${related.slug}`}>
                        <Card className="h-full hover:border-primary transition-all hover:shadow-lg">
                          <CardContent className="p-6">
                            <h4 className="font-bold mb-2 line-clamp-2">
                              {related.title}
                            </h4>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {related.readTime}
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogArticle;