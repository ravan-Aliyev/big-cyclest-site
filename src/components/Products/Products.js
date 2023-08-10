import ContentCenter from "../UI/Content";
import ProductItem from "./ProductItem";
import classes from "./Products.module.scss";
import Button from "../UI/Button";
import { useState } from "react";
import EmptyItem from "../Empty/EmptyProductItem";
import { useSelector } from "react-redux";

function Products({ products, heading }) {
  let start = 0;
  const [toggle, setToggle] = useState(false);
  const [end, setEnd] = useState(4);

  const { loading } = useSelector((state) => state.data);

  const clickHandler = () => {
    setToggle((preState) => !preState);

    if (toggle) {
      setEnd(4);
    } else {
      setEnd(products?.length);
    }
  };

  return (
    <section className={classes.products}>
      <h2 className="heading-h2">{heading}</h2>
      <ContentCenter className={classes.container}>
        <div className={classes["products__content"]}>
          {loading ? (
            <>
              <EmptyItem />
              <EmptyItem />
              <EmptyItem />
              <EmptyItem />
            </>
          ) : (
            products &&
            products.slice(start, end).map((item) => {
              if (item.catacory === "Bicycles") {
                return (
                  <ProductItem
                    modelName={item.modelName}
                    imgUrl={item.imgUrl}
                    catacory={item.catacory}
                    price={item.price}
                    key={item.id}
                    id={item.id}
                  />
                );
              }

              if (item.catacory === "Accessories") {
                return (
                  <ProductItem
                    modelName={item.modelName}
                    imgUrl={item.imgUrl}
                    catacory={item.catacory}
                    price={item.price}
                    sizes={item.sizes}
                    key={item.id}
                    id={item.id}
                  />
                );
              }
            })
          )}
        </div>

        {products?.length <= 4 ? (
          ""
        ) : (
          <Button onClick={clickHandler}>
            {toggle ? "View Less" : "View All"}
          </Button>
        )}
      </ContentCenter>
    </section>
  );
}

export default Products;
