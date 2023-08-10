import { useSelector } from "react-redux";
import classes from "./CartButton.module.scss";
import { FaShoppingCart } from "react-icons/fa";

function CartButton(props) {
  const selector = useSelector((state) => state.cart);
  return (
    <div className={classes["cart-btn"]} onClick={props.onClick}>
      <p className={classes["total-value"]}>{`$${selector.totalValue.toFixed(
        2
      )}`}</p>
      <FaShoppingCart className={classes["cart-icon"]} />
      <span>{selector.items?.length || 0}</span>
    </div>
  );
}

export default CartButton;
