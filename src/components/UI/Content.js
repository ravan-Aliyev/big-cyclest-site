import classes from "./Content.module.scss";

function ContentCenter(props) {
  const classNames = `${classes.container} ${props.className}`;

  return <div className={classNames}>{props.children}</div>;
}

export default ContentCenter;
