import classes from "./MainNavigation.module.scss";
import ContentCenter from "./UI/Content";
import CartButton from "./Cart/CartButton";
import Cart from "./Cart/SideCart/Cart";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { FaX } from "react-icons/fa6";

const links = [
  {
    linkName: "Home",
    path: "/",
  },
  {
    linkName: "Shop",
    path: "/shop",
  },
  {
    linkName: "Bicycles",
    path: "/product-catacory/bicycles",
  },
  {
    linkName: "Accessories",
    path: "/product-catacory/accessories",
  },
  {
    linkName: "About Us",
    path: "/about",
  },
  {
    linkName: "Contact",
    path: "/contact",
  },
];

function MainNavigation() {
  const [cartShow, setCartShow] = useState(false);
  const [changeNav, setCahngeNav] = useState(false);
  const [match, setMatch] = useState(false);

  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  const scrollHandler = () => {
    if (window !== undefined) {
      window.scrollY > 500 ? setCahngeNav(true) : setCahngeNav(false);
    }
  };

  const openNavHandler = () => {
    setNavOpen((preState) => !preState);
  };

  useEffect(() => {
    setMatch(false);
    if (
      location.pathname !== "/" &&
      location.pathname !== "/about" &&
      location.pathname !== "/contact"
    ) {
      setMatch(true);
    }
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [location.pathname]);

  const openCartHandler = () => {
    setCartShow(true);
    document.querySelector("body").style.overflow = "hidden";
  };

  const closeCartHandler = () => {
    setCartShow(false);
    document.querySelector("body").style.overflow = "auto";
  };

  return (
    <>
      <Cart onClose={closeCartHandler} showCart={cartShow} />

      <div
        className={`${classes.navigation}  ${
          changeNav || match ? classes["nav-red"] : ""
        }`}
        style={match ? { position: "relative" } : {}}
      >
        <ContentCenter>
          <div className={classes.nav}>
            <div className={classes["navigation__logo"]}>
              <Link to="/">
                <img src="../../cyclest-img/logo-1.png"></img>
              </Link>
            </div>

            <div>
              <ul className={classes["navigation__nav"]}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="shop">Shop</Link>
                </li>
                <li>
                  <Link to="product-catacory/bicycles">Bicycles</Link>
                </li>
                <li>
                  <Link to="product-catacory/accessories">Accessories</Link>
                </li>
                <li>
                  <Link to="about">About us</Link>
                </li>
                <li>
                  <Link to="contact">Contact</Link>
                </li>
              </ul>
            </div>

            {navOpen && (
              <ul className={classes["navigation__nav--little"]}>
                {links.map((link) => {
                  return (
                    <li key={link.linkName}>
                      <NavLink
                        onClick={() => setNavOpen(false)}
                        to={link.path}
                        style={({ isActive }) =>
                          isActive ? { color: "rgb(223, 69, 62)" } : {}
                        }
                        end
                      >
                        {link.linkName}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            )}

            <div className={classes["side-buttons"]}>
              <button className={classes.burger} onClick={openNavHandler}>
                {!navOpen ? <CiMenuBurger /> : <FaX />}
              </button>
              <CartButton onClick={openCartHandler} />
            </div>
          </div>
        </ContentCenter>
      </div>
    </>
  );
}

export default MainNavigation;
