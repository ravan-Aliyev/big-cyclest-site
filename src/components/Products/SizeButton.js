import { useRef, useEffect } from "react";
import classes from "./SizeButton.module.scss";

function SizeButton({ sizes, price, onActiveValues }) {
  const priceSize = price.length > 1 && [...price].toSorted((a, b) => a - b);
  const value =
    priceSize &&
    `$${priceSize[0].toFixed(2)} - $${priceSize.at(-1).toFixed(2)}`;
  const sizeButton = useRef();

  useEffect(() => {
    onActiveValues(null, value);
  }, []);

  const activeButtonHandler = (e) => {
    const clicked = e.target.closest("span");
    sizeButton.current.childNodes.forEach((element) => {
      if (element !== clicked) element.classList.remove("active-btn");
    });

    if (clicked) {
      clicked.classList.toggle("active-btn");

      if (clicked.classList.contains("active-btn")) {
        const number = +clicked.dataset.price;
        const newValue = `$${number.toFixed(2)}`;
        const size = clicked.textContent;
        onActiveValues(null, newValue);
        onActiveValues(number, null, size);
      } else {
        onActiveValues(null, value);
        onActiveValues(null);
      }
    }
  };
  return (
    <div
      className={classes.size}
      onClick={activeButtonHandler}
      ref={sizeButton}
    >
      {sizes.map((size, index) => (
        <span
          key={index}
          className={`${classes["size-button"]}`}
          data-price={priceSize[index]}
        >
          {size}
        </span>
      ))}
    </div>
  );

  // return (

  // )
}

export default SizeButton;

// function SizeButton({ size, price }) {
//   return (
//     <span className={`${classes["size-button"]}`} data-price={price}>
//       {size}
//     </span>
//   );
// }
