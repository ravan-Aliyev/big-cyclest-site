import classes from "./Button.module.scss";

function Button(props) {
  const clasNames = `${classes.btn} ${props.clasName}`;
  return (
    <button
      className={clasNames}
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
      style={props.style}
    >
      {props.children}
    </button>
  );
}

export default Button;
