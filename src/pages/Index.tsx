import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-purple-orange animate-gradient opacity-90"></div>
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              Александр Иванов
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 font-light mb-12">
              Full-Stack Разработчик & UI/UX Дизайнер
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6 rounded-full shadow-2xl hover-lift"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Узнать больше
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm font-semibold text-lg px-8 py-6 rounded-full shadow-2xl hover-lift"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Связаться
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-white w-8 h-8" />
        </div>
      </section>

      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text text-center">
              Обо мне
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
              <div className="relative">
                <div className="aspect-square rounded-3xl gradient-purple-pink animate-gradient p-1 hover-lift">
                  <div className="w-full h-full bg-white rounded-3xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop" 
                      alt="Александр Иванов"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Привет! Я full-stack разработчик с 8+ годами опыта создания современных веб-приложений. 
                  Специализируюсь на React, TypeScript, Node.js и облачных технологиях.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Увлечен созданием интуитивных интерфейсов и масштабируемых backend-решений. 
                  Постоянно изучаю новые технологии и делюсь знаниями с сообществом.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-6">
                  <Card className="p-6 text-center hover-lift border-2">
                    <div className="text-4xl font-bold gradient-text mb-2">8+</div>
                    <div className="text-sm text-muted-foreground">Лет опыта</div>
                  </Card>
                  <Card className="p-6 text-center hover-lift border-2">
                    <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Проектов</div>
                  </Card>
                  <Card className="p-6 text-center hover-lift border-2">
                    <div className="text-4xl font-bold gradient-text mb-2">30+</div>
                    <div className="text-sm text-muted-foreground">Клиентов</div>
                  </Card>
                  <Card className="p-6 text-center hover-lift border-2">
                    <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Качество</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-purple-orange animate-gradient opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
              Свяжитесь со мной
            </h2>
            <p className="text-xl text-muted-foreground mb-16">
              Открыт к новым проектам и предложениям о сотрудничестве
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 hover-lift border-2 bg-white/50 backdrop-blur-sm">
                <div className="w-16 h-16 mx-auto mb-4 gradient-purple-pink rounded-full flex items-center justify-center">
                  <Icon name="Mail" className="text-white w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                  hello@example.com
                </a>
              </Card>

              <Card className="p-8 hover-lift border-2 bg-white/50 backdrop-blur-sm">
                <div className="w-16 h-16 mx-auto mb-4 gradient-purple-pink rounded-full flex items-center justify-center">
                  <Icon name="Github" className="text-white w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">GitHub</h3>
                <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  @username
                </a>
              </Card>

              <Card className="p-8 hover-lift border-2 bg-white/50 backdrop-blur-sm">
                <div className="w-16 h-16 mx-auto mb-4 gradient-purple-pink rounded-full flex items-center justify-center">
                  <Icon name="Linkedin" className="text-white w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
                <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  /in/username
                </a>
              </Card>
            </div>

            <div className="mt-16">
              <Button 
                size="lg"
                className="gradient-purple-orange text-white font-semibold text-lg px-12 py-6 rounded-full shadow-2xl hover-lift animate-gradient"
              >
                <Icon name="Send" className="mr-2 w-5 h-5" />
                Написать письмо
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-muted/30 text-center">
        <p className="text-muted-foreground">
          © 2024 Александр Иванов. Все права защищены.
        </p>
      </footer>
    </div>
  );
};

export default Index;
