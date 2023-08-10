import { FaX } from "react-icons/fa6";
import classes from "./CartItem.module.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

function CartItem({ imgUrl, name, amount, price, id, totalPrice }) {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(cartActions.removeItemCart({ id, totalPrice, name }));
  };

  return (
    <div className={classes.item}>
      <img src={imgUrl} alt="Products img" className={classes["item__img"]} />
      <div className={classes["item__info"]}>
        <p className={classes["item__name"]}>{name}</p>
        <p className={classes["item__price"]}>{`${amount} x $${price.toFixed(
          2
        )}`}</p>
      </div>
      <button className={classes["item__button"]} onClick={removeHandler}>
        <FaX />
      </button>
    </div>
  );
}

export default CartItem;
