import BGContainer from "../UI/BGimageContainer";
import classes from "./Header.module.scss";

function Header() {
  return (
    <header className={classes.header}>
      <BGContainer
        bgImg="https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/about-movie-bg-1.jpg"
        className={classes.container}
      >
        <h1 className="heading-h1">Contact Us</h1>
      </BGContainer>
    </header>
  );
}

export default Header;
