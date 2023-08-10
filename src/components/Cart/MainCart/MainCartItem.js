import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";
import classes from "./MainCartItem.module.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { useState } from "react";

function MainCartItem({ cartItem, onChange }) {
  const dispatch = useDispatch();

  const link = cartItem.name
    .replace("-", "")
    .replace("  ", " ")
    .replaceAll(" ", "-")
    .toLowerCase();

  const removeHandler = () => {
    dispatch(
      cartActions.removeItemCart({
        id: cartItem.id,
        totalPrice: cartItem.totalPrice,
        name: cartItem.name,
      })
    );
  };

  const changeHandler = (e) => {
    const codition = +e.target.value === cartItem.amount;
    onChange(codition, +e.target.value, cartItem.id);
  };

  return (
    <tr>
      <td className={classes.remove}>
        <button onClick={removeHandler} type="button">
          <FaX />
        </button>
      </td>
      <td className={classes.img}>
        <img src={cartItem.imgUrl} alt="" />
      </td>
      <td className={classes.name}>
        <span className={classes["product-info"]}>Product:</span>
        <Link to={`/product/${link}`}>{cartItem.name}</Link>
      </td>
      <td className={classes.price}>
        <span className={classes["product-info"]}>Price:</span>
        <p>${cartItem.price.toFixed(2)}</p>
      </td>
      <td className={classes.quantity}>
        <span className={classes["product-info"]}>Quantity:</span>
        <input
          type="number"
          defaultValue={cartItem.amount}
          size="4"
          min="1"
          max="10"
          onChange={changeHandler}
          name="amount"
          // id="amount"
        />
      </td>
      <td className={classes.subtotal}>
        <span className={classes["product-info"]}>Subtotal:</span>
        <p>${cartItem.totalPrice.toFixed(2)}</p>
      </td>
    </tr>
  );
}

export default MainCartItem;
