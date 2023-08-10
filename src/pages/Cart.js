import { useActionData } from "react-router-dom";
import MainCart from "../components/Cart/MainCart/MainCart";
import { Helmet } from "react-helmet";
import titles from "../title";

function CartPage() {
  return (
    <>
      <Helmet>
        <title>{titles.cart}</title>
      </Helmet>
      <MainCart />
    </>
  );
}

export default CartPage;
