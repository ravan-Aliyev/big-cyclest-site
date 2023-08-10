import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import Page from "./pages/Page";
import ProductDetailPage from "./pages/ProductDetails";
import CartPage from "./pages/Cart";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCartData, postCartData } from "./store/cart-slice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
        children: [
          {
            path: "page/:pageNum",
            element: <Page />,
          },
          {
            path: ":?orderby",
            element: <Page />,
          },
          {
            path: ":?s",
            element: <Page />,
          },
        ],
      },
      {
        path: "product-catacory/:catacory",
        element: <ShopPage />,
        children: [
          {
            path: "page/:pageNum",
            element: <Page />,
          },
          {
            path: ":?orderby",
            element: <Page />,
          },
          {
            path: ":?s",
            element: <Page />,
          },
        ],
      },
      {
        path: "product/:proName",
        element: <ProductDetailPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

let isInitial = true;

function App() {
  const selector = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (selector.change) {
      dispatch(postCartData(selector));
    }
  }, [selector.items]);

  useEffect(() => {
    dispatch(getCartData());
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
