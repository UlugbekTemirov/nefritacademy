const products = [
  {
    id: 1,
    title: {
      en: "Product 1",
      ru: "Продукт 1",
      uz: "Mahsulot 1",
    },
    category: [
      {
        id: 1,
        value: "sockets",
        translations: {
          en: "Sockets",
          ru: "Розетки",
          uz: "Rozetkalar",
        },
      },
    ],
    details: [
      {
        name: {
          en: "Model",
          ru: "Модель",
          uz: "Model",
        },
        value: "HDL-M/MHR17U.1",
      },
      {
        name: {
          en: "SKU",
          ru: "Артикул",
          uz: "SKU",
        },
        value: "835101",
      },
      {
        name: {
          en: "Bus Power",
          ru: "Питание шины",
          uz: "Bus Power",
        },
        value: "14 mA",
      },
      {
        name: {
          en: "Width",
          ru: "Ширина",
          uz: "Kenglik",
        },
        value: "144 mm",
      },
      {
        name: {
          en: "Height",
          ru: "Высота",
          uz: "Balandlik",
        },
        value: "90 mm",
      },
      {
        name: {
          en: "Depth",
          ru: "Глубина",
          uz: "Chuqurlik",
        },
        value: "64 mm",
      },
      {
        name: {
          en: "Weight",
          ru: "Вес",
          uz: "Ves",
        },
        value: "469 g",
      },
    ],
    documents: [
      {
        title: {
          en: "Product 1 document 1",
          ru: "Продукт 1 документ 1",
          uz: "Mahsulot 1 hujjat 1",
        },
        url: "https://drive.google.com/file/d/1-JRBKB3LoEP8WnOIYKIbdZs8G1exCoOt/view?usp=sharing",
      },
      {
        title: {
          en: "Product 1 document 2",
          ru: "Продукт 1 документ 2",
          uz: "Mahsulot 1 hujjat 2",
        },
        url: "https://drive.google.com/file/d/1-JRBKB3LoEP8WnOIYKIbdZs8G1exCoOt/view?usp=sharing",
      },
    ],
    price: [
      {
        currency: "uzs",
        amount: 28800,
      },
      {
        currency: "usd",
        amount: 2.5,
      },
    ],
    description: {
      en: "Product 1 description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ru: "Описание продукта 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      uz: "Mahsulot 1 ta'rif Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    image: "https://picsum.photos/200/200",
    images: [
      "https://picsum.photos/200/200",
      "https://picsum.photos/200/200",
      "https://picsum.photos/200/200",
      "https://picsum.photos/200/200",
      "https://picsum.photos/200/200",
    ],
    slug: "product-1",
  },
  {
    id: 2,
    title: {
      en: "Product 2",
      ru: "Продукт 2",
      uz: "Mahsulot 2",
    },
    documents: [
      {
        title: {
          en: "Product 2 document 1",
          ru: "Продукт 2 документ 1",
          uz: "Mahsulot 2 hujjat 1",
        },
        url: "https://drive.google.com/file/d/1-JRBKB3LoEP8WnOIYKIbdZs8G1exCoOt/view?usp=sharing",
      },
      {
        title: {
          en: "Product 2 document 2",
          ru: "Продукт 2 документ 2",
          uz: "Mahsulot 2 hujjat 2",
        },
        url: "https://drive.google.com/file/d/1-JRBKB3LoEP8WnOIYKIbdZs8G1exCoOt/view?usp=sharing",
      },
    ],
    details: [
      {
        name: {
          en: "Brand",
          ru: "Бренд",
          uz: "Brend",
        },
        value: "Mennekes",
      },
      {
        name: {
          en: "Model",
          ru: "Модель",
          uz: "Model",
        },
        value: "AMTRON® Xtra 22 C2",
      },
      {
        name: {
          en: "Type",
          ru: "Тип",
          uz: "Turi",
        },
        value: "Socket",
      },
      {
        name: {
          en: "Color",
          ru: "Цвет",
          uz: "Rangi",
        },
        value: "White",
      },
    ],
    category: [
      {
        id: 2,
        value: "sockets",
        translations: {
          en: "Sockets",
          ru: "Розетки",
          uz: "Rozetkalar",
        },
      },
    ],
    price: [
      {
        currency: "uzs",
        amount: 2000,
      },
      {
        currency: "usd",
        amount: 2,
      },
    ],
    description: {
      en: "Product 2 description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ru: "Описание продукта 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      uz: "Mahsulot 2 ta'rif Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    image: "https://picsum.photos/200/200",
    images: ["https://picsum.photos/200/200", "https://picsum.photos/200/200"],
    slug: "product-2",
  },
  {
    id: 3,
    title: {
      en: "Product 3",
      ru: "Продукт 3",
      uz: "Mahsulot 3",
    },
    documents: [
      {
        title: {
          en: "Product 3 document 1",
          ru: "Продукт 3 документ 1",
          uz: "Mahsulot 3 hujjat 1",
        },
        url: "https://drive.google.com/file/d/1-JRBKB3LoEP8WnOIYKIbdZs8G1exCoOt/view?usp=sharing",
      },

      {
        title: {
          en: "Product 3 document 2",
          ru: "Продукт 3 документ 2",
          uz: "Mahsulot 3 hujjat 2",
        },
        url: "https://drive.google.com/file/d/1-JRBKB3LoEP8WnOIYKIbdZs8G1exCoOt/view?usp=sharing",
      },
    ],
    details: [
      {
        name: {
          en: "Brand",
          ru: "Бренд",
          uz: "Brend",
        },
        value: "Mennekes",
      },
    ],
    category: [
      {
        id: 3,
        value: "switches",
        translations: {
          en: "Sockets",
          ru: "Розетки",
          uz: "Rozetkalar",
        },
      },
      {
        id: 4,
        value: "knx",
        translations: {
          en: "KNX",
          ru: "KNX",
          uz: "KNX",
        },
      },
    ],
    price: [
      {
        currency: "uzs",
        amount: 3000,
      },
      {
        currency: "usd",
        amount: 3,
      },
    ],
    description: {
      en: "Product 3 description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ru: "Описание продукта 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      uz: "Mahsulot 3 ta'rif Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    image: "https://picsum.photos/200/200",
    images: ["https://picsum.photos/200/200", "https://picsum.photos/200/200"],
    slug: "product-3",
  },
  {
    id: 4,
    title: {
      en: "Product 4",
      ru: "Продукт 4",
      uz: "Mahsulot 4",
    },
    documents: [
      {
        title: {
          en: "Product 4 document 1",
          ru: "Продукт 4 документ 1",
          uz: "Mahsulot 4 hujjat 1",
        },
        url: "https://drive.google.com/file/d/1-JRBKB3LoEP8WnOIYKIbdZs8G1exCoOt/view?usp=sharing",
      },
      {
        title: {
          en: "Product 4 document 2",
          ru: "Продукт 4 документ 2",
          uz: "Mahsulot 4 hujjat 2",
        },
        url: "https://drive.google.com/file/d/1-JRBKB3LoEP8WnOIYKIbdZs8G1exCoOt/view?usp=sharing",
      },
    ],
    details: [
      {
        name: {
          en: "Brand",
          ru: "Бренд",
          uz: "Brend",
        },
        value: "Mennekes",
      },
    ],
    category: [
      {
        id: 6,
        value: "knx",
        translations: {
          en: "KNX",
          ru: "KNX",
          uz: "KNX",
        },
      },
    ],
    price: [
      {
        currency: "uzs",
        amount: 4000,
      },
      {
        currency: "usd",
        amount: 4,
      },
    ],
    description: {
      en: "Product 4 description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ru: "Описание продукта 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      uz: "Mahsulot 4 ta'rif Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    image: "https://picsum.photos/200/200",
    images: ["https://picsum.photos/200/200", "https://picsum.photos/200/200"],
    slug: "product-4",
  },
  {
    id: 5,
    title: {
      en: "Product 5",
      ru: "Продукт 5",
      uz: "Mahsulot 5",
    },
    documents: [
      {
        title: {
          en: "Product 5 document 1",
          ru: "Продукт 5 документ 1",
          uz: "Mahsulot 5 hujjat 1",
        },
        url: "https://drive.google.com/file/d/1-JRBKB3LoEP8WnOIYKIbdZs8G1exCoOt/view?usp=sharing",
      },
      {
        title: {
          en: "Product 5 document 2",
          ru: "Продукт 5 документ 2",
          uz: "Mahsulot 5 hujjat 2",
        },
        url: "https://drive.google.com/file/d/1-JRBKB3LoEP8WnOIYKIbdZs8G1exCoOt/view?usp=sharing",
      },
    ],
    details: [
      {
        name: {
          en: "Brand",
          ru: "Бренд",
          uz: "Brend",
        },
        value: "Mennekes",
      },
    ],
    category: [
      {
        id: 8,
        value: "others",
        translations: {
          en: "Others",
          ru: "Другие",
          uz: "Boshqalar",
        },
      },
    ],
    price: [
      {
        currency: "uzs",
        amount: 5000,
      },
      {
        currency: "usd",
        amount: 5,
      },
    ],
    description: {
      en: "Product 5 description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ru: "Описание продукта 5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      uz: "Mahsulot 5 ta'rif Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    image: "https://picsum.photos/200/200",
    images: ["https://picsum.photos/200/200", "https://picsum.photos/200/200"],
    slug: "product-5",
  },
];

export default products;
