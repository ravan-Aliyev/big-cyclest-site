import classes from "./BGImageContainer.module.scss";

function BGContainer(props) {
  const inlineStyle = {
    backgroundImage: `url(${props.bgImg})`,
  };

  const classNames = `${classes.bg} ${props.className}`;

  return (
    <div className={classNames} style={inlineStyle}>
      <div className={classes.overlay}>{props.children}</div>
    </div>
  );
}

export default BGContainer;
