import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Gamepad2" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold">BetMates</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#games" className="hover:text-primary transition-colors">Игры</a>
            <a href="#support" className="hover:text-primary transition-colors">Поддержка</a>
            <a href="#rules" className="hover:text-primary transition-colors">Правила</a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-card px-3 py-2 rounded-lg">
              <Icon name="Wallet" size={16} className="text-secondary" />
              <span className="text-sm font-mono">0.00 ETH</span>
            </div>
            <Button size="sm">
              <Icon name="Plus" size={16} className="mr-1" />
              Пополнить
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              BetMates
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Играй против реальных людей. Выигрывай криптовалюту. Минимальная комиссия.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Button size="lg" className="px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Начать играть
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                <Icon name="Users" size={20} className="mr-2" />
                Найти соперника
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Популярные игры</h3>
            <p className="text-muted-foreground">Выбери игру и найди достойного соперника</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Dice Game */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <Icon name="Dice1" size={32} className="text-primary group-hover:scale-110 transition-transform" />
                  <Badge variant="secondary">P2P</Badge>
                </div>
                <CardTitle className="text-xl">Кости</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Классическая игра в кости против реального соперника</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-secondary font-mono">0.01-5 ETH</span>
                  </div>
                  <Button size="sm">
                    <Icon name="Users" size={16} className="mr-1" />
                    Играть
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Coin Flip */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <Icon name="CircleDot" size={32} className="text-primary group-hover:scale-110 transition-transform" />
                  <Badge variant="secondary">P2P</Badge>
                </div>
                <CardTitle className="text-xl">Монетка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Орёл или решка - простая игра на удачу</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-secondary font-mono">0.005-10 ETH</span>
                  </div>
                  <Button size="sm">
                    <Icon name="Users" size={16} className="mr-1" />
                    Играть
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Rock Paper Scissors */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <Icon name="Hand" size={32} className="text-primary group-hover:scale-110 transition-transform" />
                  <Badge variant="secondary">P2P</Badge>
                </div>
                <CardTitle className="text-xl">Камень-Ножницы-Бумага</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Проверь свою интуицию против соперника</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-secondary font-mono">0.002-2 ETH</span>
                  </div>
                  <Button size="sm">
                    <Icon name="Users" size={16} className="mr-1" />
                    Играть
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Crypto Wallet Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Встроенный криптокошелёк</h3>
              <p className="text-muted-foreground">Быстрые переводы, минимальные комиссии</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="Wallet" size={24} className="text-secondary" />
                  <h4 className="text-xl font-semibold">Баланс</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold">₿</div>
                      <span>Bitcoin</span>
                    </div>
                    <span className="font-mono">0.000 BTC</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-xs font-bold">Ξ</div>
                      <span>Ethereum</span>
                    </div>
                    <span className="font-mono">0.000 ETH</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-xs font-bold">₮</div>
                      <span>Tether USD</span>
                    </div>
                    <span className="font-mono">0.00 USDT</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="ArrowUpDown" size={24} className="text-primary" />
                  <h4 className="text-xl font-semibold">Быстрые действия</h4>
                </div>
                <div className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Пополнить счёт
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Icon name="Minus" size={16} className="mr-2" />
                    Вывести средства
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Icon name="History" size={16} className="mr-2" />
                    История операций
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Gamepad2" size={24} className="text-primary" />
                <span className="text-lg font-bold">BetMates</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Честная игровая платформа для P2P ставок на криптовалюте
              </p>
            </div>
            
            <div id="support">
              <h5 className="font-semibold mb-3">Поддержка</h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-primary transition-colors">Telegram чат</a>
                <a href="#" className="block hover:text-primary transition-colors">Discord сервер</a>
                <a href="#" className="block hover:text-primary transition-colors">Email поддержка</a>
              </div>
            </div>
            
            <div id="rules">
              <h5 className="font-semibold mb-3">Правила</h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-primary transition-colors">Правила игр</a>
                <a href="#" className="block hover:text-primary transition-colors">Пользовательское соглашение</a>
                <a href="#" className="block hover:text-primary transition-colors">Политика конфиденциальности</a>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Социальные сети</h5>
              <div className="flex space-x-3">
                <Button size="sm" variant="outline" className="p-2">
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="p-2">
                  <Icon name="Twitter" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="p-2">
                  <Icon name="Github" size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 BetMates. Играй ответственно.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}