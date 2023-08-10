import ContentCenter from "../../UI/Content";
import classes from "./MainCart.module.scss";
import MainCartItem from "./MainCartItem";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { cartActions } from "../../../store/cart-slice";
import { Form } from "react-router-dom";
import { useActionData } from "react-router-dom";

function MainCart({ actData }) {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const [disabled, setDisable] = useState(true);

  let input = [];

  const changeHandler = (action) => {
    setDisable(action);
  };

  // const items = cartData.items.filter((item) => item.id === input[2]);

  const updateHandler = (e) => {
    e.preventDefault();

    e.target.amount.value
      ? input.push(+e.target.amount.value)
      : e.target.amount.forEach((item) => input.push(+item.value));

    input.forEach((amount, index) => {
      return dispatch(
        cartActions.updateItemCart({
          ...cartData.items[index],
          amount: amount,
          totalPrice: cartData.items[index].price * amount,
        })
      );
    });

    input = [];

    // dispatch(cartActions.updateItemCart(upDatedCart));
  };

  return (
    <section className={classes.section}>
      <ContentCenter className={classes.container}>
        <h4 className="heading-h4">Cart</h4>

        {cartData.items?.length === 0 && (
          <div className={classes.empty}>
            <p>Your cart is currently empty</p>
          </div>
        )}

        {cartData.items?.length !== 0 && (
          <>
            <form className={classes.form} onSubmit={updateHandler}>
              <table className={classes["product-table"]}>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.items?.map((item) => (
                    <MainCartItem
                      cartItem={item}
                      key={item.id}
                      onChange={changeHandler}
                    />
                  ))}
                  <tr>
                    <td colSpan="6">
                      <div className={classes["cart-action"]}>
                        <div style={{ display: "flex", marginRight: "auto" }}>
                          <input
                            type="text"
                            placeholder="Coupon code"
                            // name="coupon"
                          />
                          <Button style={{ width: "100%" }}>
                            Apply coupon
                          </Button>
                        </div>
                        <Button
                          disabled={disabled}
                          style={{ opacity: disabled && "0.5" }}
                        >
                          Uptade Cart
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>

            <div className={classes.check}>
              <h5 className="heading-h5">Cart total</h5>
              <table>
                <tbody>
                  <tr>
                    <td className={classes.subtotal}>
                      <span>Subtotal</span>
                    </td>
                    <td>
                      <span>${cartData.totalValue.toFixed(2)}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.total}>
                      <span>Total</span>
                    </td>
                    <td>
                      <span>${cartData.totalValue.toFixed(2)}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Button>Proceed the checkout</Button>
            </div>
          </>
        )}
      </ContentCenter>
    </section>
  );
}

export default MainCart;

// const arr = [1, 2, 3].reduce((pre, cur) => pre + cur, 0);

// console.log(arr);

// export const action = async ({ request, params }) => {};
