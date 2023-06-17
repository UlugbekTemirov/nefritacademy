const DYMMY_DATA =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis maximus turpis. Maecenas sed orci dignissim, consectetur neque aliquet, venenatis velit. Fusce felis lacus, suscipit lacinia ullamcorper in, molestie sed sapien. Suspendisse vel urna aliquam, finibus ipsum sed, iaculis urna. Duis vestibulum non lacus et lobortis. Nam vitae sollicitudin felis. Donec nunc urna, eleifend et pulvinar nec, semper quis tortor. Nam at commodo tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque quis diam fringilla, fermentum sem nec, volutpat est. Nunc non erat magna. Fusce maximus pharetra risus porttitor consequat. Suspendisse egestas nulla orci, id tempus dolor lobortis non. Curabitur et elementum leo. Donec elementum felis in metus dapibus, at laoreet lectus iaculis. Morbi ut urna ac mi viverra pulvinar eget vitae nunc. Sed nec commodo purus.";

export const news = [
  {
    id: 1,
    slug: "smart-home-systems",
    image: "https://picsum.photos/200/200",
    categories: ["business", "technology"],
    title: {
      en: "Smart home systems are becoming more and more popular",
      ru: "Системы «умный дом» становятся все более популярными",
      uz: "Smart home systems are becoming more and more popular",
    },
    date: "2023-05-05",
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ru: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      uz: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    content: `
      <p>${DYMMY_DATA}</p>
      <image src="https://picsum.photos/200/200" alt="something" />
      <h1>Heading</h1>
      <p>${DYMMY_DATA}</p>
      <image src="https://picsum.photos/200/200" alt="something" />
    `,
  },
  {
    id: 2,
    slug: "new-product-arrived",
    image: "https://picsum.photos/200/200",
    images: [
      "https://picsum.photos/200/200",
      "https://picsum.photos/200/200",
      "https://picsum.photos/200/200",
      "https://picsum.photos/200/200",
      "https://picsum.photos/200/200",
    ],
    categories: ["what-is-new"],
    title: {
      en: "New Product Arrived in Our Store",
      ru: "Новый продукт появился в нашем магазине",
      uz: "Yangi mahsulotlar do'konimizga yetib keldi",
    },
    date: "2023-05-05",
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ru: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      uz: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    content: `
      <p>${DYMMY_DATA}</p>
      <image src="https://picsum.photos/200/200" alt="something" />
      <p>${DYMMY_DATA}</p>
      <image src="https://picsum.photos/200/200" alt="something" />
    `,
  },
  {
    id: 3,
    slug: "our-company-is-growing",
    image: "https://picsum.photos/200/200",
    images: [
      "https://picsum.photos/200/200",
      "https://picsum.photos/200/200",
      "https://picsum.photos/200/200",
      "https://picsum.photos/200/200",
      "https://picsum.photos/200/200",
    ],
    categories: ["articles"],
    title: {
      en: "Our company is growing day by day",
      ru: "Наша компания растет с каждым днем",
      uz: "Bizning kompaniya har kuni o'sayapti",
    },
    date: "2023-01-05",
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ru: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      uz: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    content: `
      <p>${DYMMY_DATA}</p>
      <image src="https://picsum.photos/200/200" alt="something" />
      <p>${DYMMY_DATA}</p>
      <image src="https://picsum.photos/200/200" alt="something" />
    `,
  },
];
