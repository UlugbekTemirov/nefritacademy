import Translate from "./Translate";

export const assignColorHandler = (cats, colors) => {
  const obj = {};
  cats.forEach(({ value }, index) => {
    obj[value] = colors[index];
  });
  return obj;
};

export const categoryTitleHandler = (cats, category) => {
  const title = cats.find((cat) => cat.value === category).name;
  return <Translate dictionary={title} />;
};

export const categorySearchHandler = (category, location, navigate) => {
  const params = new URLSearchParams(location.search);
  params.set("category", category);
  navigate(`?${params.toString()}`);
};

export const findTargetItemHandler = (slug, data) => {
  const item = data.find((el) => el.slug === slug);
  return item;
};

export const category_colors = [
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-orange-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-gray-500",
];

export const RANGE_COLOR = "#710193";
export const SHARE_BUTTON_COLOR = "#710193";

export const categoryAllHandler = (categories, amount) => {
  return [
    {
      id: "all-category",
      name: {
        en: "All",
        ru: "Все",
        uz: "Hammasi",
      },
      slug: "all",
      amount: amount,
    },
    ...categories,
  ];
};
