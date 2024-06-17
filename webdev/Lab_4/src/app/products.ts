export interface Product {

  id: number;
  name: string;
  price: number;

  img: string;
  description: string;
  src: string;
  rating: number;
  like: number;
  category: string;
}

export const products = [
  {
    id: 5,
    name: 'Смартфон Apple iPhone 13 128Gb черный',
    price: 376200,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
    description: 'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 6-ядерный Apple A15 Bionic\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 3095 мАч',
    src: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
    rating: 5,
    category: '',
    like: 0
  },
  {
    id: 6,
    name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
    price: 705570,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h19/h85/64508108931102.jpg?format=gallery-medium',
    description: 'диагональ: 6.7 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 6-ядерный Apple A16 Bionic\n' +
        'объем встроенной памяти: 256 ГБ\n' +
        'емкость аккумулятора: 3095 мАч',
    src: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
    rating: 5,
    category: '',
    like: 0
  },
  {
    id: 4,
    name: 'Смартфон Samsung Galaxy A13 4 ГБ/128 ГБ черный',
    price: 87490,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h1c/hac/64381277929502.jpg?format=gallery-large',
    description: 'диагональ: 6.6 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 8-ядерный Exynos 850\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    src: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item',
    rating: 5,
    category: '',
    like: 0
  },
  {
    id: 1,
    name: 'Смартфон Samsung Galaxy A23 6 ГБ/128 ГБ черный',
    price: 104630,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/had/hfc/64382158766110.jpg?format=gallery-medium',
    description: 'диагональ: 6.6 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 8-ядерный Snapdragon 680\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    src: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000#!/item',
    rating: 4,
    category: '',
    like: 0
  },
  {
    id: 7,
    name: 'Смартфон Samsung Galaxy A33 5G 6 ГБ/128 ГБ черный',
    price: 129700,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hdd/86033771364382.jpg?format=gallery-medium',
    description: 'диагональ: 6.4 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 8-ядерный Exynos 1280\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    src: 'https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-chernyi-104398547/?c=750000000#!/item',
    rating: 4,
    category: '',
    like: 0
  },
  {
    id: 2,
    name: 'Смартфон Samsung Galaxy S24 Ultra 5G 12 ГБ/256 ГБ серый',
    price: 72129,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
    description: 'диагональ: 6.71 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 8-ядерный Qualcomm Snapdragon 680\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    src: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000',
    rating: 3,
    category: '',
    like: 0
  },
  {
    id: 3,
    name: 'Смартфон Samsung Galaxy S23 Ultra 12 ГБ/256 ГБ черный',
    price: 127896,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-medium',
    description: 'диагональ: 6.67 дюйм\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'процессор: 8-ядерный Qualcomm Snapdragon 732G\n' +
        'объем встроенной памяти: 256 ГБ\n' +
        'емкость аккумулятора: 5020 мАч',
    src: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000',
    rating: 3,
    category: '',
    like: 0
  },



  {
    id: 8,
    name: 'Смартфон Apple iPhone 14 128Gb черный',
    price: 61990,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=gallery-medium',
    description: 'диагональ: 6.09 дюйм\n' +
        'размер оперативной памяти: 2 ГБ\n' +
        'процессор: 4-х ядерный Spreadtrum SC7731E\n' +
        'объем встроенной памяти: 32 ГБ\n' +
        'емкость аккумулятора: 3000 мАч',
    src: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000',
    rating: 1,
    category: '',
    like: 0
  },
  {
    id: 9,
    name: 'Смартфон Samsung Galaxy S22 Ultra 8 ГБ/128 ГБ черный',
    price: 57380,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hf7/he6/86009678528542.png?format=gallery-medium',
    description: 'диагональ: 5.45 дюйм\n' +
        'размер оперативной памяти: 2 ГБ\n' +
        'процессор: Unisoc SC9832E\n' +
        'объем встроенной памяти: 16 ГБ\n' +
        'емкость аккумулятора: 2200 мАч',
    src: 'https://kaspi.kz/shop/p/samsung-galaxy-s22-ultra-8-gb-128-gb-chernyi-103675087/?c=750000000',
    rating: 2,
    category: '',
    like: 0
  },
  {
    id: 10,
    name: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
    price: 57680,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium',
    description: 'диагональ: 5.45 дюйм\n' +
        'размер оперативной памяти: 2 ГБ\n' +
        'процессор: Unisoc SC9832E\n' +
        'объем встроенной памяти: 16 ГБ\n' +
        'емкость аккумулятора: 2200 мАч',
    src: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    rating: 2,
    category: '',
    like: 0
  },
  {
    id: 11,
    name: 'Смартфон Apple iPhone 15 Pro Max 256Gb синий',
    price: 61970,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h64/h50/83559848575006.png?format=gallery-medium',
    description: 'диагональ: 6.52 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: Unisoc Tiger T606\n' +
        'объем встроенной памяти: 64 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    src: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-sinii-113138428/?c=750000000',
    rating: 1,
    category: '',
    like: 0
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/