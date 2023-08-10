import classes from "./List.module.scss";
import { FaBullseye } from "react-icons/fa";

function List({ listItems, color }) {
  const listClassName = `${classes[`list__icon`]} ${
    classes[`list__icon--${color}`]
  }`;
  return (
    <ul className={classes.list}>
      {listItems.map((item, index) => {
        return (
          <li className={classes["list__item"]} key={index}>
            <span className={listClassName}>
              <FaBullseye />
            </span>
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
