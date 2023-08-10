import BGContainer from "../UI/BGimageContainer";
import classes from "./Header.module.scss";
import { BsPlayCircle } from "react-icons/bs";

function Header() {
  return (
    <BGContainer
      bgImg={`	https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/moutain-bike.jpg`}
      className={classes.header}
    >
      <div className={classes.container}>
        <h2 className="heading-h1">Who are we</h2>

        <div className={classes.imgcontainer}>
          <BsPlayCircle />
          <h4 className="heading-h4">Watch the movie</h4>
        </div>
      </div>
    </BGContainer>
  );
}

export default Header;
