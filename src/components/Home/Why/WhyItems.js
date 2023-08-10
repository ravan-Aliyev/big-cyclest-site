import classes from "./WhyItem.module.scss";

export function WhyItem({ heading, text, imgUrl, children, className }) {
  return (
    <div
      className={`${classes.item}  ${className}`}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className={classes.overlay}>
        <div className={classes[`${text ? "text-container" : ""}`]}>
          {!text ? (
            <h5 className="heading-h5">{heading}</h5>
          ) : (
            <h4 className="heading-h4">{heading}</h4>
          )}

          {text ? <p className={classes.text}>{text}</p> : ""}
          {children}
        </div>
      </div>
    </div>
  );
}
