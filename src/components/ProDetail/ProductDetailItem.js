import { Link } from "react-router-dom";
import classes from "./ProductDetailItem.module.scss";
import Button from "../UI/Button";
import MagnifyImg from "./MagnifyImg";
import SizeButton from "../Products/SizeButton";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

function ProductDetailItem({ product }) {
  const [activePrice, setActivePrice] = useState("");
  const [activeValue, setActiveValue] = useState(null);
  const [proSize, setProSize] = useState("");

  const dispatch = useDispatch();

  const amountRef = useRef();

  const activeValues = (aValue, aPrice, size) => {
    setActiveValue(aValue);
    setProSize(size);
    aPrice && setActivePrice(aPrice);
  };

  const item = {
    imgUrl: product.imgUrl,
    price: product.price.length > 1 ? activeValue : product.price[0],
    name: `${
      product.sizes ? `${product.modelName} - ${proSize}` : product.modelName
    }`,
    id: `${product.id}${proSize}`,
  };

  const cartHandler = () => {
    if (!activeValue && product.price.length !== 1) return;

    dispatch(
      cartActions.addItemCart({
        ...item,
        amount: +amountRef.current.value,
        totalPrice:
          product.price.length > 1
            ? activeValue * +amountRef.current.value
            : product.price[0] * +amountRef.current.value,
      })
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes["pro__img"]}>
        <MagnifyImg url={product.imgUrl} />
      </div>
      <div>
        <div className={classes["pro__info"]}>
          <div className={classes["pro__nav"]}>
            <Link to="/">Home </Link>
            <Link to={`/product-catacory/${product.catacory.toLowerCase()}`}>
              / {product.catacory}
            </Link>
            <span> / {product.modelName}</span>
          </div>

          <h4 className="heading-h4">{product.modelName}</h4>

          <div className={classes["pro__details"]}>
            <p className={classes["pro__price"]}>
              {product.price.length > 1
                ? activePrice
                : `$${product.price[0].toFixed(2)}`}{" "}
              <span>& Free Shipping</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {product.sizes && (
            <SizeButton
              sizes={product.sizes}
              price={product.price}
              onActiveValues={activeValues}
            />
          )}

          <div className={classes["pro__cart"]}>
            <input
              type="number"
              min="1"
              max="5"
              defaultValue="1"
              ref={amountRef}
            />
            <Button onClick={cartHandler}>Add to cart</Button>
          </div>
        </div>

        <div className={classes["pro__catacory"]}>
          <p>
            Catecory:{" "}
            <Link to={`/product-catacory/${product.catacory.toLowerCase()}`}>
              {product.catacory}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailItem;
{
  /* <div className={classes["pro-catacory"]}>
          <Link to={`/product-catacory/bicycles`}>Bicycles</Link>
        </div> */
}
