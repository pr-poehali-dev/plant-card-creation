import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className="text-5xl font-bold text-slate-800 mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Каталог растений
          </h1>
          <p
            className="text-xl text-slate-600"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            Найдите идеальное растение для вашего дома
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Основная карточка растения */}
          <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader className="p-0 relative overflow-hidden">
              <div className="aspect-square relative bg-gradient-to-br from-green-100 to-green-200 rounded-t-lg">
                <img
                  src="/img/969d7c40-a910-4ef0-8760-7391f37027f1.jpg"
                  alt="Комнатное растение"
                  className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white hover:bg-green-600">
                    В наличии
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <Icon name="Sun" size={16} className="text-yellow-500" />
                    <span className="text-sm text-slate-600">Солнечное</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <CardTitle
                  className="text-2xl text-slate-800 font-bold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Монстера деликатесная
                </CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-green-100 hover:text-green-600"
                >
                  <Icon name="Heart" size={20} />
                </Button>
              </div>

              <p
                className="text-slate-600 mb-4"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                Элегантное тропическое растение с большими резными листьями.
                Идеально подходит для создания уютной атмосферы в доме.
              </p>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Icon name="Droplets" size={16} className="text-blue-500" />
                  <span className="text-sm text-slate-600">
                    Умеренный полив
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Thermometer" size={16} className="text-red-500" />
                  <span className="text-sm text-slate-600">18-25°C</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl font-bold text-green-600">
                    ₽2,890
                  </span>
                  <span className="text-sm text-slate-500 line-through ml-2">
                    ₽3,200
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-green-50"
                  >
                    <Icon name="ShoppingCart" size={18} />
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Купить
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Дополнительные карточки для демонстрации */}
          <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader className="p-0 relative overflow-hidden">
              <div className="aspect-square relative bg-gradient-to-br from-purple-100 to-purple-200 rounded-t-lg flex items-center justify-center">
                <Icon name="Flower" size={80} className="text-purple-400" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-purple-500 text-white hover:bg-purple-600">
                    Новинка
                  </Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <CardTitle
                  className="text-2xl text-slate-800 font-bold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Фиалка узумбарская
                </CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-purple-100 hover:text-purple-600"
                >
                  <Icon name="Heart" size={20} />
                </Button>
              </div>

              <p
                className="text-slate-600 mb-4"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                Компактное цветущее растение с бархатистыми листьями и яркими
                цветами.
              </p>

              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-purple-600">₽890</span>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Купить
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader className="p-0 relative overflow-hidden">
              <div className="aspect-square relative bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-t-lg flex items-center justify-center">
                <Icon name="TreePine" size={80} className="text-emerald-400" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-emerald-500 text-white hover:bg-emerald-600">
                    Хит продаж
                  </Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <CardTitle
                  className="text-2xl text-slate-800 font-bold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Фикус каучуконосный
                </CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-emerald-100 hover:text-emerald-600"
                >
                  <Icon name="Heart" size={20} />
                </Button>
              </div>

              <p
                className="text-slate-600 mb-4"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                Неприхотливое растение с глянцевыми листьями, отлично очищает
                воздух.
              </p>

              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-emerald-600">
                  ₽1,550
                </span>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Купить
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Фильтры и поиск */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant="outline"
              className="bg-white/70 hover:bg-green-50 border-green-200"
            >
              <Icon name="Filter" size={18} className="mr-2" />
              Все растения
            </Button>
            <Button
              variant="outline"
              className="bg-white/70 hover:bg-green-50 border-green-200"
            >
              <Icon name="Sun" size={18} className="mr-2" />
              Солнечные
            </Button>
            <Button
              variant="outline"
              className="bg-white/70 hover:bg-green-50 border-green-200"
            >
              <Icon name="Cloud" size={18} className="mr-2" />
              Тенелюбивые
            </Button>
            <Button
              variant="outline"
              className="bg-white/70 hover:bg-green-50 border-green-200"
            >
              <Icon name="Flower" size={18} className="mr-2" />
              Цветущие
            </Button>
          </div>

          <p
            className="text-slate-600"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            Откройте для себя более 500 видов комнатных растений
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
