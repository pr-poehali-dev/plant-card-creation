import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showProductDetails, setShowProductDetails] = useState(false);

  const productImages = [
    "/img/969d7c40-a910-4ef0-8760-7391f37027f1.jpg",
    "/img/6f3f17c7-afcf-4147-bab0-06a85df1a0bc.jpg",
    "/img/824d24af-5fce-4ad3-9d76-0d6e95dbd2eb.jpg",
  ];

  const reviews = [
    {
      id: 1,
      name: "Анна Козлова",
      avatar: "АК",
      rating: 5,
      date: "2 дня назад",
      comment:
        "Прекрасное растение! Пришло в отличном состоянии, быстро адаптировалось. Листья красивые, здоровые. Рекомендую!",
    },
    {
      id: 2,
      name: "Михаил Петров",
      avatar: "МП",
      rating: 4,
      date: "неделю назад",
      comment:
        "Качественная упаковка, растение здоровое. Единственный минус - доставка затянулась на день.",
    },
    {
      id: 3,
      name: "Елена Сидорова",
      avatar: "ЕС",
      rating: 5,
      date: "2 недели назад",
      comment:
        "Уже третий раз покупаю здесь растения. Всегда отличное качество и быстрая доставка!",
    },
  ];

  if (showProductDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        {/* Навигация */}
        <div className="bg-white/70 backdrop-blur-sm border-b border-green-100">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowProductDetails(false)}
                className="hover:bg-green-100"
              >
                <Icon name="ArrowLeft" size={20} />
              </Button>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span>Каталог</span>
                <Icon name="ChevronRight" size={16} />
                <span>Комнатные растения</span>
                <Icon name="ChevronRight" size={16} />
                <span className="text-green-600 font-medium">
                  Монстера деликатесная
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Галерея изображений */}
            <div className="space-y-4">
              <div className="aspect-square relative bg-gradient-to-br from-green-100 to-green-200 rounded-2xl overflow-hidden">
                <img
                  src={productImages[selectedImage]}
                  alt="Монстера деликатесная"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white">В наличии</Badge>
                </div>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-2">
                {productImages.map((img, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden cursor-pointer transition-all ${
                      selectedImage === index
                        ? "ring-2 ring-green-500"
                        : "hover:opacity-80"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={img}
                      alt={`Вид ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Информация о товаре */}
            <div className="space-y-6">
              <div>
                <h1
                  className="text-4xl font-bold text-slate-800 mb-2"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Монстера деликатесная
                </h1>
                <p className="text-slate-600 italic">Monstera deliciosa</p>

                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={
                          i < 4
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm text-slate-600">
                    4.8 (127 отзывов)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-green-600">
                  ₽2,890
                </span>
                <span className="text-xl text-slate-500 line-through">
                  ₽3,200
                </span>
                <Badge className="bg-red-100 text-red-800">-10%</Badge>
              </div>

              <p
                className="text-slate-700 text-lg leading-relaxed"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                Элегантное тропическое растение с большими резными листьями.
                Монстера деликатесная станет настоящим украшением вашего дома,
                создавая атмосферу тропических джунглей.
              </p>

              {/* Характеристики ухода */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg">
                  <Icon name="Sun" size={20} className="text-yellow-500" />
                  <div>
                    <p className="font-medium text-slate-800">Освещение</p>
                    <p className="text-sm text-slate-600">
                      Яркий рассеянный свет
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg">
                  <Icon name="Droplets" size={20} className="text-blue-500" />
                  <div>
                    <p className="font-medium text-slate-800">Полив</p>
                    <p className="text-sm text-slate-600">
                      Умеренный, 1-2 раза в неделю
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg">
                  <Icon name="Thermometer" size={20} className="text-red-500" />
                  <div>
                    <p className="font-medium text-slate-800">Температура</p>
                    <p className="text-sm text-slate-600">18-25°C</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg">
                  <Icon name="Wind" size={20} className="text-green-500" />
                  <div>
                    <p className="font-medium text-slate-800">Влажность</p>
                    <p className="text-sm text-slate-600">60-70%</p>
                  </div>
                </div>
              </div>

              {/* Кнопки действий */}
              <div className="flex gap-4">
                <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white h-12 text-lg">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Добавить в корзину
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 hover:bg-green-50"
                >
                  <Icon name="Heart" size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 hover:bg-green-50"
                >
                  <Icon name="Share2" size={20} />
                </Button>
              </div>

              {/* Доставка и гарантии */}
              <div className="space-y-3 p-4 bg-white/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Icon name="Truck" size={20} className="text-green-600" />
                  <span className="text-slate-700">
                    Бесплатная доставка от ₽2000
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Shield" size={20} className="text-green-600" />
                  <span className="text-slate-700">
                    Гарантия здоровья растения 14 дней
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-green-600" />
                  <span className="text-slate-700">
                    Доставка в течение 1-3 дней
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Дополнительная информация */}
          <div className="mt-16">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-white/70">
                <TabsTrigger value="description">Описание</TabsTrigger>
                <TabsTrigger value="care">Уход</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы (127)</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-6">
                <Card className="bg-white/70 border-0">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-slate-800">
                      О растении
                    </h3>
                    <div className="prose max-w-none text-slate-700">
                      <p className="mb-4">
                        Монстера деликатесная (Monstera deliciosa) – это
                        вечнозеленая тропическая лиана, которая стала одним из
                        самых популярных комнатных растений. Её узнаваемые
                        крупные листья с характерными разрезами делают её
                        настоящим украшением интерьера.
                      </p>
                      <p className="mb-4">
                        В природе монстера может достигать высоты до 20 метров,
                        но в домашних условиях обычно вырастает до 2-3 метров.
                        Молодые листья имеют сердцевидную форму, а по мере
                        взросления растения на них появляются характерные
                        разрезы и отверстия.
                      </p>
                      <p>
                        Монстера не только красива, но и полезна – она активно
                        очищает воздух от формальдегида и других вредных
                        веществ, создавая в доме здоровую атмосферу.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="care" className="mt-6">
                <Card className="bg-white/70 border-0">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-slate-800">
                      Рекомендации по уходу
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">
                          Освещение
                        </h4>
                        <p className="text-slate-700">
                          Предпочитает яркий, но рассеянный свет. Избегайте
                          прямых солнечных лучей, которые могут вызвать ожоги
                          листьев.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">
                          Полив
                        </h4>
                        <p className="text-slate-700">
                          Поливайте умеренно, когда верхний слой почвы
                          подсохнет. Зимой частоту полива сокращайте.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">
                          Влажность
                        </h4>
                        <p className="text-slate-700">
                          Любит повышенную влажность. Регулярно опрыскивайте
                          листья или используйте увлажнитель.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">
                          Подкормка
                        </h4>
                        <p className="text-slate-700">
                          В период роста (весна-лето) подкармливайте комплексным
                          удобрением 1 раз в 2 недели.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <Card className="bg-white/70 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-slate-800">
                        Отзывы покупателей
                      </h3>
                      <Button variant="outline" className="hover:bg-green-50">
                        Написать отзыв
                      </Button>
                    </div>

                    <div className="space-y-6">
                      {reviews.map((review) => (
                        <div
                          key={review.id}
                          className="border-b border-slate-200 pb-6 last:border-b-0"
                        >
                          <div className="flex items-start gap-4">
                            <Avatar>
                              <AvatarFallback className="bg-green-100 text-green-700">
                                {review.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-semibold text-slate-800">
                                  {review.name}
                                </h4>
                                <div className="flex items-center gap-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Icon
                                      key={i}
                                      name="Star"
                                      size={14}
                                      className={
                                        i < review.rating
                                          ? "text-yellow-400 fill-current"
                                          : "text-gray-300"
                                      }
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-slate-500">
                                  {review.date}
                                </span>
                              </div>
                              <p className="text-slate-700">{review.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Похожие товары */}
          <div className="mt-16">
            <h3
              className="text-3xl font-bold text-slate-800 mb-8 text-center"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Похожие растения
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Фикус лирата",
                  price: "₽3,200",
                  image: "TreePine",
                  color: "emerald",
                },
                {
                  name: "Стрелиция",
                  price: "₽4,500",
                  image: "Flower",
                  color: "orange",
                },
                {
                  name: "Аглаонема",
                  price: "₽1,800",
                  image: "Leaf",
                  color: "green",
                },
                {
                  name: "Калатея",
                  price: "₽2,100",
                  image: "Flower",
                  color: "purple",
                },
              ].map((plant, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/70"
                >
                  <CardHeader className="p-0">
                    <div
                      className={`aspect-square bg-gradient-to-br from-${plant.color}-100 to-${plant.color}-200 rounded-t-lg flex items-center justify-center`}
                    >
                      <Icon
                        name={plant.image}
                        size={60}
                        className={`text-${plant.color}-400`}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">
                      {plant.name}
                    </h4>
                    <p className="text-2xl font-bold text-green-600">
                      {plant.price}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

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
          <Card
            className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm cursor-pointer"
            onClick={() => setShowProductDetails(true)}
          >
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
                  onClick={(e) => e.stopPropagation()}
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
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Icon name="ShoppingCart" size={18} />
                  </Button>
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={(e) => e.stopPropagation()}
                  >
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
