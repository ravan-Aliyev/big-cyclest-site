import { useState } from "react";
import ContentCenter from "../UI/Content";
import clasess from "./ProductDetail.module.scss";
import ProductDetailItem from "./ProductDetailItem";
import ReviewForm from "./ReviewForm";
import ProductItem from "../Products/ProductItem";

function PrductDetail({ product, products }) {
  const [toggleContent, setToggleContent] = useState(true);

  const filteredPro = products.filter(
    (item) => item.catacory === product.catacory && item.id !== product.id
  );

  return (
    <section className={clasess.container}>
      <ContentCenter className={clasess["content-container"]}>
        <ProductDetailItem product={product} />

        <div className={clasess["des-rev"]}>
          <button
            onClick={() => setToggleContent(true)}
            style={{
              borderTop: toggleContent && "3.5px solid rgb(223, 69, 62)",
            }}
          >
            Description
          </button>
          <button
            onClick={() => setToggleContent(false)}
            style={{
              borderTop: !toggleContent && "3.5px solid rgb(223, 69, 62)",
            }}
          >
            Review <span>(0)</span>
          </button>
          <div className={clasess["des-rev__content"]}>
            {toggleContent ? (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            ) : (
              <ReviewForm productName={product.modelName} />
            )}
          </div>
        </div>

        <div className={clasess.related}>
          <h2 className="heading-h2">Related Products</h2>
          <div className={clasess["related__products-container"]}>
            {filteredPro.slice(0, 3).map((item) => {
              return (
                <ProductItem
                  modelName={item.modelName}
                  price={item.price}
                  catacory={item.catacory}
                  imgUrl={item.imgUrl}
                  id={item.id}
                  key={item.id}
                />
              );
            })}
          </div>
        </div>
      </ContentCenter>
    </section>
  );
}

export default PrductDetail;
