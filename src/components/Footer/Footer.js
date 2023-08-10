import classes from "./Footer.module.scss";
import ContentCenter from "../UI/Content";
import Links from "./Links";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const DUMMY_LINKS = [
  {
    heading: "Usefull Links",
    links: ["Home", "Shop", "About Us", "Contact Us"],
  },
  {
    heading: "Our Collection",
    links: [
      "Mountain Bikes",
      "City Bikes",
      "Specality Bikes",
      "Electric Bikes",
    ],
  },
  {
    heading: "Account",
    links: ["Customer login", "Dealer login", "Adresses", "Payment methods"],
  },
];

function Footer() {
  return (
    <footer className={classes.footer}>
      <ContentCenter className={classes["footer__content"]}>
        <div className={classes["footer__main"]}>
          <div className={classes["footer__links"]}>
            <img src="../../cyclest-img/logo-1.png" alt="logo" />
            {DUMMY_LINKS.map((links, index) => {
              return (
                <Links
                  key={index}
                  linkHeading={links.heading}
                  links={links.links}
                />
              );
            })}
          </div>
        </div>
      </ContentCenter>
      <div className={classes["footer__copyright"]}>
        <ContentCenter>
          <p>Copyright &copy; 2023 Cycle Shop</p>
          <div className={classes["media-icons"]}>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </ContentCenter>
      </div>
    </footer>
  );
}

export default Footer;
