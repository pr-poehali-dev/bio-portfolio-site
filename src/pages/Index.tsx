import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const socialLinks = [
    { name: "Telegram", icon: "Send", url: "https://t.me/username" },
    { name: "VK", icon: "MessageCircle", url: "https://vk.com/username" },
    { name: "AniMedia", icon: "Play", url: "#" },
    { name: "Yandex Music", icon: "Music", url: "#" },
    { name: "Discord", icon: "MessageSquare", url: "https://discord.com" },
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="absolute top-8 right-8">
        <div className="views-badge px-4 py-2 rounded-lg flex items-center gap-2">
          <Icon name="Eye" size={20} className="text-muted-foreground" />
          <span className="text-foreground font-medium">1488</span>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl">
        <Card className="card-dark p-12 mb-12 hover-lift">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              <img
                src="https://cdn.poehali.dev/files/4ee30d0c-0fc0-4d6d-bbc6-a0a7d79852b7.png"
                alt="Avatar"
                className="w-32 h-32 rounded-full object-cover avatar-ring"
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

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-items-center">
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
            Рекомендации
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-dark overflow-hidden hover-lift">
              <img
                src="https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&h=600&fit=crop"
                alt="Recommendation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Любимое аниме
                </h3>
                <p className="text-muted-foreground">
                  Моя коллекция любимых аниме-сериалов и фильмов
                </p>
              </div>
            </Card>

            <Card className="card-dark overflow-hidden hover-lift">
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop"
                alt="Music"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Музыкальные плейлисты
                </h3>
                <p className="text-muted-foreground">
                  Треки, которые я слушаю каждый день
                </p>
              </div>
            </Card>

            <Card className="card-dark overflow-hidden hover-lift">
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop"
                alt="Gaming"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Игры
                </h3>
                <p className="text-muted-foreground">
                  Мои любимые игры и стримы
                </p>
              </div>
            </Card>

            <Card className="card-dark overflow-hidden hover-lift">
              <img
                src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800&h=600&fit=crop"
                alt="Art"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Творчество
                </h3>
                <p className="text-muted-foreground">
                  Мои работы и художественные проекты
                </p>
              </div>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <Card className="card-dark p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Обо мне
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Привет! Я увлекаюсь аниме, музыкой и творчеством. 
              Люблю делиться своими интересами с друзьями и находить единомышленников. 
              Здесь вы найдете ссылки на все мои социальные сети и проекты.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;