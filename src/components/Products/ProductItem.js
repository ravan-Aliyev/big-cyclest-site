import { useState } from "react";
import classes from "./ProductItem.module.scss";
import { FaRegStar, FaShoppingCart } from "react-icons/fa";
import SizeButton from "./SizeButton";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { Link } from "react-router-dom";

function ProductItem({ modelName, price, sizes, catacory, imgUrl, id }) {
  const [activePrice, setActivePrice] = useState("");
  const [activeValue, setActiveValue] = useState(null);
  const dispatch = useDispatch();
  const [proSize, setProSize] = useState("");

  const activeValues = (aValue, aPrice, size) => {
    setActiveValue(aValue);
    setProSize(size);
    aPrice && setActivePrice(aPrice);
  };

  const item = {
    imgUrl,
    price: price.length > 1 ? activeValue : price[0],
    name: `${sizes ? `${modelName} - ${proSize}` : modelName}`,
    amount: 1,
    totalPrice: price.length > 1 ? activeValue : price[0],
    id: `${id}${proSize}`,
  };

  const addCartHandler = () => {
    if (!activeValue && price.length !== 1) return;

    dispatch(cartActions.addItemCart(item));
  };

  let tooltip;

  if (price.length === 1) {
    tooltip = "Add to cart";
  }

  if (price.length > 1) {
    tooltip = !activeValue ? "Select option" : "Add to cart";
  }

  const link = modelName
    .replace("-", "")
    .replace("  ", " ")
    .replaceAll(" ", "-")
    .toLowerCase();

  return (
    <div className={classes["product"]}>
      <div className={classes["product__item"]}>
        <Link to={`/product/${link}`}>
          <img
            src={imgUrl}
            alt="Product img"
            className={classes["product__image"]}
          />
        </Link>
        <div className={classes["cart-button"]}>
          <span className={classes["cart-icon"]} onClick={addCartHandler}>
            <FaShoppingCart />
          </span>
          <span className={classes["cart-tooltip"]}>{tooltip}</span>
        </div>
      </div>
      <span className={classes["product__catecory"]}>{catacory}</span>
      <Link to={`/product/${link}`}>
        <h2 className="heading-product-h2">{modelName}</h2>
      </Link>
      <span>
        <FaRegStar className={classes["product__icons"]} />
        <FaRegStar className={classes["product__icons"]} />
        <FaRegStar className={classes["product__icons"]} />
        <FaRegStar className={classes["product__icons"]} />
        <FaRegStar className={classes["product__icons"]} />
      </span>

      <p className={classes["product__price"]}>
        {price.length > 1 ? activePrice : `$${price[0].toFixed(2)}`}
      </p>

      {sizes && (
        <SizeButton sizes={sizes} price={price} onActiveValues={activeValues} />
      )}
    </div>
  );
}

export default ProductItem;

// function ProductItem({ modelName, price, sizes, catacory, imgUrl, id }) {
//   const sizeButton = useRef();
//   const priceSize = price.length > 1 && [...price].sort((a, b) => a - b);
//   const value =
//     priceSize &&
//     `$${priceSize[0].toFixed(2)} - $${priceSize.at(-1).toFixed(2)}`;

//   const [activePrice, setActivePrice] = useState(value);
//   const [activeValue, setActiveValue] = useState(null);
//   const dispatch = useDispatch();

//   const activeButtonHandler = (e) => {
//     const clicked = e.target.closest("span");
//     sizeButton.current.childNodes.forEach((element) => {
//       if (element !== clicked) element.classList.remove("active-btn");
//     });

//     if (clicked) {
//       clicked.classList.toggle("active-btn");

//       if (clicked.classList.contains("active-btn")) {
//         const number = +clicked.dataset.price;
//         const newValue = `$${number.toFixed(2)}`;
//         setActivePrice(newValue);
//         setActiveValue(number);
//       } else {
//         setActivePrice(value);
//         setActiveValue(null);
//       }
//     }
//   };

//   const item = {
//     imgUrl,
//     price: price.length > 1 ? activeValue : price[0],
//     name: modelName,
//     amount: 1,
//     totalPrice: price.length > 1 ? activeValue : price[0],
//     id,
//   };

//   const addCartHandler = () => {
//     if (!activeValue && price.length !== 1) return;

//     dispatch(cartActions.addItemCart(item));
//   };

//   let tooltip;

//   if (price.length === 1) {
//     tooltip = "Add to cart";
//   }

//   if (price.length > 1) {
//     tooltip = !activeValue ? "Select option" : "Add to cart";
//   }

//   return (
//     <div className={classes["product"]}>
//       <div className={classes["product__item"]}>
//         <img
//           src={imgUrl}
//           alt="Product img"
//           className={classes["product__image"]}
//         />
//         <div className={classes["cart-button"]}>
//           <span className={classes["cart-icon"]} onClick={addCartHandler}>
//             <FaShoppingCart />
//           </span>
//           <span className={classes["cart-tooltip"]}>{tooltip}</span>
//         </div>
//       </div>
//       <span className={classes["product__catecory"]}>{catacory}</span>
//       <h2 className="heading-product-h2">{modelName}</h2>
//       <span>
//         <FaRegStar className={classes["product__icons"]} />
//         <FaRegStar className={classes["product__icons"]} />
//         <FaRegStar className={classes["product__icons"]} />
//         <FaRegStar className={classes["product__icons"]} />
//         <FaRegStar className={classes["product__icons"]} />
//       </span>

//       <p className={classes["product__price"]}>
//         {price.length > 1 ? activePrice : `$${price[0].toFixed(2)}`}
//       </p>

//       {sizes && (
//         <div
//           className={classes["product__size"]}
//           onClick={activeButtonHandler}
//           ref={sizeButton}
//         >
//           {sizes.map((size, index) => (
//             <SizeButton size={size} key={index} price={priceSize[index]} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
