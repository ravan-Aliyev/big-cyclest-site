import Button from "../../UI/Button";
import ContentCenter from "../../UI/Content";
import classes from "./Header.module.scss";
import List from "../../UI/List";

const DUMMY_DATA = [
  `Lightweight 18" Frame`,
  `Steel Suspension Fork`,
  `Steel Hardtail Frame`,
];

function Header() {
  return (
    <div className={classes["header-container"]}>
      <ContentCenter>
        <div className={classes["content-container"]}>
          <h4 className="heading-h4">Newly launched</h4>
          <h1 className="heading-h1">Kryo X26 MTB</h1>
          <div>
            <h5 className="heading-h5">Specification</h5>

            <List listItems={DUMMY_DATA} color="white" />
          </div>

          <Button>Buy now</Button>
        </div>
      </ContentCenter>
    </div>
  );
}

export default Header;
