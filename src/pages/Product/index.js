import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import products from "../../db/products.db";

import Container from "../../layout/Container";

// components
import ProductGallery from "./components/ProductGallery";
import ProductBackground from "./components/ProductBackground";
import ProductDetails from "./components/ProductDetails";
import Product404 from "./components/Product404";
import MyModal from "../../components/MyModal";
import ShareTo from "../../components/ShareTo";

import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../redux/product.slice";

const Index = () => {
  const { slug } = useParams();
  const d = useDispatch();
  const { modal, productUrl } = useSelector((state) => state.product);

  const findProduct = (slug) => {
    return products.find((product) => product.slug === slug);
  };
  const product = findProduct(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <MyModal
        className="xl:w-[600px] md:w-3/4 w-[85%]"
        opened={modal}
        close={() => d(setModal(false))}
      >
        <ShareTo link={productUrl} />
      </MyModal>
      <ProductBackground product={product} />
      <Container>
        {product ? (
          <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-[100px] md:gap-[30px] gap-10 md:py-16 py-10">
            <div className="col-span-1">
              <ProductGallery images={product.images} />
            </div>
            <div className="col-span-1">
              <ProductDetails product={product} />
            </div>
          </div>
        ) : (
          <Product404 />
        )}
      </Container>
    </div>
  );
};

export default Index;
