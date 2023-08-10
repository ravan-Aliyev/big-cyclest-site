import classes from "./EmptyItems.module.scss";

function EmptyItem() {
  return (
    <div className={classes["product"]}>
      <div className={classes.img}></div>
      <div className={classes["product__catecory"]}></div>
      <div className={classes.heading}></div>
      <span className={classes.icons}></span>
      <p className={classes["product__price"]}></p>
    </div>
  );
}

export default EmptyItem;
