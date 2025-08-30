import { useEffect, useRef } from "react";
import { EnsoLogo } from "@/components/enso-logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import gastonPhoto from "@assets/image_1756590996831.png";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Intersection Observer for fade-in animations
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all elements with section-fade class
    document.querySelectorAll('.section-fade').forEach(el => {
      observerRef.current?.observe(el);
    });

    // Enhanced smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href?.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    // Header background opacity on scroll
    const header = document.querySelector('header');
    const handleScroll = () => {
      if (header) {
        if (window.scrollY > 100) {
          header.style.backgroundColor = 'hsla(0, 0%, 100%, 0.98)';
        } else {
          header.style.backgroundColor = 'hsla(0, 0%, 100%, 0.95)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observerRef.current?.disconnect();
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5491141744221";
  const whatsappMessage = encodeURIComponent("Hola Gastón, me interesa agendar una primera sesión");

  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <EnsoLogo size="md" />
              <span className="font-serif font-semibold text-xl text-foreground">
                Gastón Esteban Fernández
              </span>
            </div>
            <Button 
              asChild
              className="bg-primary text-primary-foreground hover:bg-secondary rounded-full"
              data-testid="button-contact-header"
            >
              <a href="#contacto">
                Contactar
              </a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30 pt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
              "Salir de la matrix es volver a vos mismo."
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Acompaño procesos de gestión emocional y autoconocimiento, con herramientas simples y profundas como la escritura reflexiva.
            </p>
            <Button 
              asChild
              className="bg-primary text-primary-foreground hover:bg-secondary rounded-full text-lg px-8 py-4 h-auto font-semibold transform hover:scale-105 transition-all shadow-lg"
              data-testid="button-first-session-hero"
            >
              <a href="#primera-sesion">
                Quiero mi primera sesión
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre mí Section */}
      <section id="sobre-mi" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="section-fade">
                <h2 className="font-serif text-4xl font-bold text-foreground mb-8">Sobre mí</h2>
                <div className="prose prose-lg text-muted-foreground leading-relaxed">
                  <p className="text-lg mb-6">
                    Soy <strong className="text-foreground">Gastón Esteban Fernández</strong>, 46 años, de Buenos Aires. Ingeniero en Informática, pero sobre todo, papá presente de dos nenas, Emilia y Delfina.
                  </p>
                  <p className="text-lg">
                    Después de un quiebre personal, entendí que había vivido demasiado tiempo en piloto automático, dentro de una matrix que me alejaba de mí mismo. Salir de ahí y volver a casa fue el inicio de este camino.
                  </p>
                </div>
              </div>
              <div className="section-fade">
                <img 
                  src={gastonPhoto}
                  alt="Gastón Esteban Fernández" 
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover aspect-square"
                  data-testid="img-profile-gaston"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mi proceso personal Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto section-fade">
            <Card className="p-12 rounded-3xl shadow-xl border border-border">
              <CardContent className="p-0">
                <h2 className="font-serif text-4xl font-bold text-foreground mb-8 text-center">Mi proceso personal</h2>
                <blockquote className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-8">
                  "No llegué a este lugar por teoría, sino atravesando mi propia tormenta. En los últimos meses dediqué más de 660 horas a la escritura y la reflexión. Estuve en la ansiedad y el dolor, y sigo sintiendo las mismas emociones humanas, pero hoy aprendí a gestionarlas desde la conciencia y el autoconocimiento. Ese recorrido me motiva a acompañar a otros: porque sé lo que es no encontrar salida, y también sé lo que se siente empezar a recuperar dignidad, amor propio y paz."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mi propuesta Section */}
      <section id="propuesta" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto section-fade">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-16 text-center">Mi propuesta</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-muted-foreground">Escucha activa, sin juicios.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-muted-foreground">Ejercicios para poner en palabras lo que sentís.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-muted-foreground">Escritura reflexiva como herramienta de autoconocimiento.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-muted-foreground">Cierre claro con pasos simples para tu día a día.</p>
                </div>
              </div>
              
              <Card className="p-8 rounded-2xl border border-border shadow-lg">
                <CardContent className="p-0">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">Detalles de la sesión</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                      <span className="font-medium text-foreground">Duración:</span>
                      <span className="text-muted-foreground">1 hora (online)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-foreground">Modalidad:</span>
                      <span className="text-muted-foreground">Sesiones individuales</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-foreground">Primera sesión:</span>
                      <span className="text-accent font-semibold">Valor accesible</span>
                    </div>
                  </div>
                  <Button 
                    asChild
                    className="w-full bg-primary text-primary-foreground hover:bg-secondary rounded-full"
                    data-testid="button-reserve-session"
                  >
                    <a href="#primera-sesion">
                      Reservar una sesión
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mi visión Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center section-fade">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-12">Mi visión</h2>
            <blockquote className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed italic">
              "Mi objetivo en la vida es ayudar a otros a volver a casa: a su propio corazón, al amor propio y a la dignidad que nunca se pierden, solo se olvidan. Todos tenemos una puerta de entrada: la escritura, la música, el arte, la fe, correr, o simplemente detenernos a escucharnos."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Disclaimer honesto Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto section-fade">
            <div className="bg-muted/30 p-12 rounded-3xl border-l-4 border-accent">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Disclaimer honesto</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No soy gurú ni psicólogo. No vengo a darte fórmulas mágicas. Soy una persona común, con la misma fragilidad y la misma fuerza que vos. Lo que sí puedo hacer es acompañarte, compartirte cómo gestioné mis propios momentos difíciles, qué herramientas me sirvieron, y ayudarte a encontrar las tuyas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo empezar Section */}
      <section id="primera-sesion" className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto section-fade">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-16 text-center">Cómo empezar</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center p-8 rounded-2xl border border-border shadow-lg">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    1
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-4">Escribime</h3>
                  <p className="text-muted-foreground">Coordinamos tu primera sesión</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-8 rounded-2xl border border-border shadow-lg">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    2
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-4">Nos encontramos</h3>
                  <p className="text-muted-foreground">Online, en un espacio cuidado</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-8 rounded-2xl border border-border shadow-lg">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    3
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-4">Empezás</h3>
                  <p className="text-muted-foreground">Tu camino de regreso a vos mismo</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <Button 
                asChild
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 h-auto rounded-full text-lg font-semibold transform hover:scale-105 transition-all shadow-lg"
                data-testid="button-whatsapp-contact"
              >
                <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}>
                  💬 Hablame por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cierre Section */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center section-fade">
            <EnsoLogo size="lg" className="mx-auto mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
              "No estás solo en este camino. El primer paso es volver a vos."
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Gastón Esteban Fernández • Buenos Aires, Argentina
            </p>
            <Button 
              asChild
              className="bg-primary text-primary-foreground hover:bg-secondary px-8 py-4 h-auto rounded-full text-lg font-semibold transform hover:scale-105 transition-all shadow-lg"
              data-testid="button-start-process"
            >
              <a href={`https://wa.me/${whatsappNumber}`}>
                Comenzar mi proceso
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 border-2 border-background rounded-full border-t-transparent transform rotate-45"></div>
            <span className="font-serif font-semibold">Gastón Esteban Fernández</span>
          </div>
          <p className="text-sm opacity-80">Gestión emocional y autoconocimiento • Buenos Aires, Argentina</p>
        </div>
      </footer>
    </div>
  );
}
