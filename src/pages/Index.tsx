import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const socialLinks = [
    { name: "Telegram", icon: "Send", url: "https://t.me/username" },
    { name: "Spotify", icon: "Music", url: "https://open.spotify.com" },
    { name: "Discord", icon: "MessageSquare", url: "https://discord.com" },
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950 to-black opacity-80"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-800 rounded-full blur-3xl opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="relative z-10">
      <div className="container mx-auto max-w-5xl">
        <Card className="card-dark p-12 mb-12 hover-lift">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              <img
                src="https://cdn.poehali.dev/files/075728c1-4161-48ad-82f8-d728d6d0c26a.jpg"
                alt="Avatar"
                className="w-32 h-32 rounded-full object-cover avatar-ring-red"
              />
            </div>

            <h1 className="text-4xl font-bold text-foreground mb-3">
              Mikoto
            </h1>

            <p className="text-xl text-muted-foreground">
              Меньше чем три♡3
            </p>
          </div>
        </Card>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Социальные сети
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center max-w-xl mx-auto">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Icon name={social.icon} size={32} className="text-foreground" />
                <span className="text-sm font-medium text-foreground">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Интересы
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-dark p-8 text-center hover-lift">
              <Icon name="Music" size={48} className="text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Музыка
              </h3>
              <p className="text-muted-foreground">
                Треки, которые я слушаю каждый день
              </p>
            </Card>

            <Card className="card-dark p-8 text-center hover-lift">
              <Icon name="Gamepad2" size={48} className="text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Игры
              </h3>
              <p className="text-muted-foreground">
                Мои любимые игры и стримы
              </p>
            </Card>

            <Card className="card-dark p-8 text-center hover-lift">
              <Icon name="Palette" size={48} className="text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Творчество
              </h3>
              <p className="text-muted-foreground">
                Мои работы и проекты
              </p>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Index;