import React from "react";
import MiniHeader from "../../../components/MiniHeader";
import Translate from "../../../utils/Translate";
import DateFormatter from "../../../utils/DateFormatter";
import { Link } from "react-router-dom";

const recent_posts = [
  {
    id: 1,
    title: {
      en: "Lorem ipsum dolor sit amet consectetur.",
      ru: "Lorem ipsum dolor sit amet consectetur.",
      uz: "Lorem ipsum dolor sit amet consectetur.",
    },
    image: "https://picsum.photos/200/200",
    slug: "lorem-ipsum-1",
    date: "2021-05-05",
  },
  {
    id: 2,
    title: {
      en: "Lorem ipsum dolor sit amet consectetur",
      ru: "Lorem ipsum dolor sit amet consectetur",
      uz: "Lorem ipsum dolor sit amet consectetur",
    },
    image: "https://picsum.photos/200/200",
    slug: "lorem-ipsum-2",
    date: "2021-05-05",
  },
  {
    id: 3,
    title: {
      en: "Lorem ipsum dolor sit amet consectetur",
      ru: "Lorem ipsum dolor sit amet consectetur",
      uz: "Lorem ipsum dolor sit amet consectetur",
    },
    image: "https://picsum.photos/200/200",
    slug: "lorem-ipsum-3",
    date: "2021-05-05",
  },
];

const Post = ({ title, image, date, slug }) => {
  return (
    <Link
      to={slug}
      className="grid grid-cols-8 w-full py-5 border-b-2 gap-3 cursor-pointer post"
    >
      <div className="col-span-2 flex items-center justify-center">
        <div className="rounded-full w-[80px] h-[80px] overflow-hidden">
          <img className="w-full h-full" src={image} alt={title.en} />
        </div>
      </div>
      <div className="col-span-6 flex items-center">
        <div>
          <p className="text-[20px] font-semibold text-secondary post-text">
            <Translate dictionary={title} />
          </p>
          <p className="text-gray-600 font-semibold">
            <DateFormatter date={date} />
          </p>
        </div>
      </div>
    </Link>
  );
};

const FeaturedPosts = ({ posts = recent_posts }) => {
  return (
    <div className="mt-5">
      <MiniHeader
        title={{
          en: "Featured Posts",
          ru: "Рекомендуемые Новости",
          uz: "Maxsus Yangiliklar",
        }}
      />
      <div className="flex flex-col items-center justify-center">
        {posts.map((post, index) => {
          return <Post key={index} {...post} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedPosts;
