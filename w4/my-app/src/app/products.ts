export interface Product{
  name: string,
  price: number, 
  rating: string,
  image: string,
  description: string,
  link: string
}



export const products = [
  {
    name: 'Стекло 9H HD',
    image: 'https://ae01.alicdn.com/kf/Hd9bab53d8f8742a98b1373492e0f8ad8w/2PCS-Glass-9H-HD-Tempered-Glass-for-Samsung-A50-A40-A30-A10E-A20E-Screen-Protector-for.jpg_220x220xz.jpg_.webp',
    price: 69,
    description: '2 шт Стекло 9 H HD закаленное стекло для samsung A50 A40 A30 A10E A20E Защита экрана для samsung Galaxy A90 A80 A70 A60 A2. Прозрачное стекло не полное покрытие, оно немного меньше, чем экран телефона.',
    rating:'4.7',
    link: 'https://aliexpress.ru/item/4000358638669.html?spm=a2g0o.productlist.0.0.79dc1402i7tMPi&algo_pvid=241ffeb4-4d30-4c2f-a163-0714a9cfc6e3&algo_expid=241ffeb4-4d30-4c2f-a163-0714a9cfc6e3-6&btsid=0ab6f82115814940547585552e3910&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
   }
   ,
   {
    name: 'Магнитный кабель Micro USB для iPhone',
    image: 'https://ae01.alicdn.com/kf/H5d9681e90c9340e3a2f7ece9135bc793B/Twitch-1M-2M-Magnetic-Micro-USB-Cable-For-iPhone-Samsung-Android-Mobile-Phone-Fast-Charging-USB.jpg_220x220xz.jpg_.webp',
    price: 43,
    description: 'Бренд: TwitchРазъём B: LightningРазъём B: USB Type-C',
    rating:'5.0',
    link:'https://aliexpress.ru/item/4000644858617.html?spm=a2g0o.productlist.0.0.79dc1402i7tMPi&s=p&algo_pvid=241ffeb4-4d30-4c2f-a163-0714a9cfc6e3&algo_expid=241ffeb4-4d30-4c2f-a163-0714a9cfc6e3-9&btsid=0ab6f82115814940547585552e3910&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'   
  } 
  ,
  {
    name: 'Закаленное стекло 9D',
    image: 'https://ae01.alicdn.com/kf/H6247be9b4a7d45d3a1fc3ebd35d7a047B/For-Huawei-Honor-8X-Tempered-Glass-9D-Cover-Screen-Protector-for-huawei-honor-8x-8a-8c.jpg_220x220xz.jpg_.webp',
    price: 45,
    description: 'Huawei honor 8X, закаленное стекло, оригинал, 9D, защита экрана, для huawei honor 8x, 8a, 8c, pro, закаленное стекло, защитная пленка',
    rating:'4.9',
    link:'https://aliexpress.ru/item/4000068274010.html?spm=a2g0o.productlist.0.0.79dc1402i7tMPi&algo_pvid=241ffeb4-4d30-4c2f-a163-0714a9cfc6e3&algo_expid=241ffeb4-4d30-4c2f-a163-0714a9cfc6e3-13&btsid=0ab6f82115814940547585552e3910&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
  }
  ,
  {
    name: 'Xiaomi Redmi Note 8 ',
    image: 'https://ae01.alicdn.com/kf/He526a70a5d1945d7a90cfccafb42a52ed/Global-ROM-Xiaomi-Redmi-Note-8-4GB-64GB-Snapdragon-665-Octa-Core-Smartphone-6-3-48MP.jpg_220x220xz.jpg_.webp',
    price: 8797,
    description: '6.3" Full HD+ полноэкранный режим, Экран занимает 90%корпуса 详情_04 8000 x 6000, четыре в одном, 1,6 мкм 4K-видео   Отличное разрешение, более четкий режим ночной съемки, поддержка функцииEIS стабилизации',
    rating:'4.9',
    link:'https://aliexpress.ru/item/4000039844416.html?spm=a2g0o.productlist.0.0.277d2580RjA2zN&algo_pvid=aafe0f6a-a96a-4508-b68a-e129c47a337e&algo_expid=aafe0f6a-a96a-4508-b68a-e129c47a337e-2&btsid=0ab6d70515814988969053468e464d&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
  }
  ,
  {
    name: 'Поддержка смартфона POPSOCKET ',
    image: 'https://ae01.alicdn.com/kf/Ud872c1758c1c47d89260c5aef1bd7e24A/5-PEZZI-SUPPORTO-SMARTPHONE-POPSOCKET-GANCIO-ADESIVO-CELLULARE-SELFIE.png_220x220xz.png_.webp',
    price: 701,
    description: 'Подставка простая и инновационная Выдвижная удобно брать телефон двумя пальцами удобно и элегантно делать фотографии и селфи.',
    rating:'-',
    link:'https://aliexpress.ru/item/4000665184048.html?spm=a2g0o.productlist.0.0.429e59efYBu398&algo_pvid=16888ee4-1f9c-4e8e-91fa-2b28ce34c91a&algo_expid=16888ee4-1f9c-4e8e-91fa-2b28ce34c91a-3&btsid=0ab50f6115814998322973391e77dd&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
  }
  ,
  {
    name: 'BGA паяльная паста',
    image: 'https://ae01.alicdn.com/kf/HTB1bhbOXynrK1Rjy1Xcq6yeDVXa0/Free-shipping-2013-New-2PCS-Lot-100-Hong-Kong-MECHANIC-BGA-Solder-Flux-Paste-Soldering-Tin.jpg_220x220xz.jpg_.webp',
    price: 482,
    description: 'Новинка 2 шт./лот 100% Гонконг механик BGA паяльный флюс паста пайка оловянный крем Sn63/Pb37 25-45um XG-40 10CC',
    rating:'4.9',
    link:'https://aliexpress.ru/item/922291342.html?spm=a2g0o.productlist.0.0.62ae5c727Gdp71&s=p&algo_pvid=cbe12fbb-1937-4760-a1ce-8c54067ae8c9&algo_expid=cbe12fbb-1937-4760-a1ce-8c54067ae8c9-9&btsid=0ab50f4415815004161341533e7994&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
  }
  ,
  {
    name: 'Радиоуправляемый динозавр',
    image: 'https://ae01.alicdn.com/kf/H2d8617e9e57a47c08ed49fbf6bb802f6J/RC-Intelligent-Dinosaur-Model-Electric-Remote-Control-Robot-Mechanical-War-Dragon-With-Music-Light-Functions-Children.jpg_220x220xz.jpg_.webp',
    price: 3406,
    description: 'Радиоуправляемая интеллектуальная модель динозавра, Электрический робот с дистанционным управлением, механический военный дракон, с музыкой и светильник, детские игрушки для хобби',
    rating:'4.7',
    link:'https://aliexpress.ru/item/32843233855.html?spm=a2g0o.productlist.0.0.66935c727xJ72J&algo_pvid=5cd3bd9b-a68e-4bc8-bdba-7ead7a2b291d&algo_expid=5cd3bd9b-a68e-4bc8-bdba-7ead7a2b291d-10&btsid=0ab50f4415815005209741051e7994&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
  }
  ,
  {
    name: '6 DOF робот',
    image: 'https://ae01.alicdn.com/kf/HTB1EjCwXjihSKJjy0Feq6zJtpXaU/6-DOF-Robot-Manipulator-Metal-Alloy-Mechanical-Arm-Clamp-Claw-Kit-MG996R-DS3115-for-Arduino-Robotic.jpg_220x220xz.jpg_.webp',
    price: 1957,
    description: '6 DOF робот манипулятор металлический сплав механическая рука зажим коготь комплект MG996R DS3115 для Arduino роботизированного образования',
    rating:'4.9',
    link:'https://aliexpress.ru/item/32831130256.html?spm=a2g0o.productlist.0.0.6eb05c72Y5xWuJ&algo_pvid=e80f1f8d-f85f-4af2-b8f6-07b8ea2f97da&algo_expid=e80f1f8d-f85f-4af2-b8f6-07b8ea2f97da-4&btsid=0ab50f4415815009045918354e7994&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
  }
  ,
  {
    name: 'Музыкальная шкатулка',
    image: 'https://ae01.alicdn.com/kf/H734baf6de752428c946c0e347a82f29an/NICEXMAS-1-Pc-Music-Box-Dolphin-Pattern-Miniature-Wooden-Mechanical-Music-Box-for-Birthday.jpg_220x220xz.jpg_.webp',
    price: 477,
    description: 'Музыкальная шкатулка изготовлена из высококачественного материала, вы можете увидеть, как работает движение. Для воспроизведения музыки требуется непрерывное скручивание. ',
    rating:'4.9',
    link:'https://aliexpress.ru/item/4000031952285.html?spm=a2g0o.productlist.0.0.758a5c72Bd6WUG&algo_pvid=2674a281-6ab8-4cd1-89d4-75f01ef7afe5&algo_expid=2674a281-6ab8-4cd1-89d4-75f01ef7afe5-2&btsid=0ab50f4415815010663691407e7994&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
  }
  ,
  {
    name: 'WH109 портативная',
    image: 'https://ae01.alicdn.com/kf/H222bb3f3f2a84abcb77c5e19dc520fe4b/S900-High-Quality-Wired-Gaming-Mouse-USB-Optical-Gamer-Mouse-5000DPI-6-Buttons-for-Laptop-Desktop.jpg_220x220xz.jpg_.webp',
    price: 210,
    description: 'WH109 портативная 2,4 ГГц Беспроводная оптическая мышь с usb-приемником, предназначенная для дома, офиса, игр, использования Plug Play',
    rating:'5.0',
    link:'https://aliexpress.ru/item/32975200543.html?spm=a2g0o.productlist.0.0.252936e89SuQmf&algo_pvid=39d8000d-bddd-4f3f-aa99-873e9199e111&algo_expid=39d8000d-bddd-4f3f-aa99-873e9199e111-0&btsid=0ab50f4415815012242781979e7994&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
  }

   

  // {
  //   name: 'Phone Standard',
  //   price: 299,
  //   description: ''
  // }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/