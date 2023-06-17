import React from "react";
import Translate from "../../../utils/Translate";
import { useSelector, useDispatch } from "react-redux";
import { setTab, setModal, setProductUrl } from "../../../redux/product.slice";
import Details from "./Details";
import Documents from "./Documents";
import { FiShare2 } from "react-icons/fi";

const ProductDetails = ({ product }) => {
  const d = useDispatch();
  const { tab } = useSelector((state) => state.product);

  const { title, price, description, images, documents, details, slug } =
    product;

  const tanHandler = (tab) => {
    const components = {
      params: <Details details={details} />,
      docs: <Documents documents={documents} />,
    };

    return components[tab];
  };

  const cases = [
    {
      id: "params",
      title: {
        en: "Parameters",
        ru: "Параметры",
        uz: "Parametrlar",
      },
    },
    {
      id: "docs",
      title: {
        en: "Documents",
        ru: "Документы",
        uz: "Hujjatlar",
      },
    },
  ];

  const shareHandler = () => {
    d(setModal(true));
    d(setProductUrl(window.location.href));
  };

  return (
    <div className="">
      <h1 className="font-black text-4xl text-secondary tracking-wider">
        <Translate dictionary={title} />
      </h1>
      <div className="flex items-center gap-5 mt-5">
        <p className="text-3xl text-main font-semibold">
          {price[0].amount} so'm
        </p>
        <p className="text-2xl text-gray-400">(${price[1].amount})</p>
      </div>
      <div>
        <p className="text-gray-500 mt-5 text-xl">
          <Translate dictionary={description} />
        </p>
        <div className="flex gap-5 items-center pt-10">
          <a
            className="bg-main hover:shadow-xl duration-300 w-[200px] text-center pt-4 pb-3 rounded-lg tracking-wider text-xl font-semibold text-white inline-block"
            href="tel:+998936563672"
          >
            <Translate
              dictionary={{
                en: "More details",
                ru: "Подробнее",
                uz: "Batafsil",
              }}
            />
          </a>
          <FiShare2
            onClick={shareHandler}
            title="Share"
            className="p-2 duration-200 rounded-xl shadow-md hover:shadow-lg cursor-pointer"
            size={55}
            color="#333"
          />
        </div>
      </div>
      <div className="pt-14">
        <h1 className="font-black text-secondary tracking-wide text-[26px]">
          <Translate
            dictionary={{
              en: "More Information",
              ru: "Дополнительная информация",
              uz: "Qo'shimcha ma'lumot",
            }}
          />
        </h1>
        <div>
          <div className="grid grid-cols-2 rounded-xl overflow-hidden relative z-[1] border mt-2">
            <div
              className={`absolute w-1/2 bg-main h-full rounded-xl -z-[1] duration-300 ${
                tab === "params" ? "translate-x-0" : "translate-x-full"
              }`}
            ></div>
            {cases.map(({ id, title }) => {
              return (
                <button
                  key={id}
                  className={`w-full pb-3 pt-4 text-xl duration-300 font-semibold ${
                    tab === id ? "text-white bg-white" : "text-secondary"
                  }}`}
                  onClick={() => d(setTab(id))}
                >
                  <Translate dictionary={title} />
                </button>
              );
            })}
          </div>
          <div className="mt-5">{tanHandler(tab)}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
