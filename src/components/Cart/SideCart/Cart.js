import Modal from "../../UI/Modal";
import classes from "./Cart.module.scss";
import { FaX } from "react-icons/fa6";
import CartItem from "./CartItem";
import Button from "../../UI/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../../../assets/sass/animations.scss";
import Transition from "react-transition-group/Transition";
function Cart(props) {
  const items = useSelector((state) => state.cart);

  const navigate = useNavigate();

  return (
    <Transition mountOnEnter unmountOnExit in={props.showCart} timeout={300}>
      {(state) => {
        const cartClass = `${classes.cart} ${
          state === "entering" ? classes["cart-open"] : ""
        } ${state === "exiting" ? classes["cart-close"] : ""}`;

        return (
          <Modal
            className={cartClass}
            style={props.style}
            onClose={props.onClose}
          >
            <div className={classes["cart__header"]}>
              <p>Shopping cart</p>
              <button
                className={classes["cart__btn--close"]}
                onClick={props.onClose}
              >
                <FaX />
              </button>
            </div>
            <div className={classes["cart__list"]}>
              {items.items.map((item) => {
                return (
                  <CartItem
                    imgUrl={item.imgUrl}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    key={item.id}
                    totalPrice={item.totalPrice}
                    id={item.id}
                  />
                );
              })}
            </div>

            {items.items.length !== 0 && (
              <div className={classes["cart__total"]}>
                <p>Subtotal:</p>
                <p>{`$${items.totalValue.toFixed(2)}`}</p>
              </div>
            )}

            <div className={classes["cart__buttons"]}>
              {items.items.length !== 0 && (
                <Button
                  onClick={() => {
                    props.onClose();
                    navigate("/cart");
                  }}
                >
                  View Cart
                </Button>
              )}
              {items.items.length !== 0 && <Button>Checkout</Button>}
              {items.items.length === 0 && (
                <Button
                  onClick={() => {
                    props.onClose();
                    navigate("/shop");
                  }}
                >
                  Continue shopping
                </Button>
              )}
            </div>
          </Modal>
        );
      }}
    </Transition>
  );
}

export default Cart;
