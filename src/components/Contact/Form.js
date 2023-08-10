import classes from "./Form.module.scss";
import Button from "../UI/Button";

function Form() {
  return (
    <div className={classes["form-container"]}>
      <h3 className="heading-h3">Let's Get in Touch</h3>
      <form className={classes.form}>
        <div className={classes.name}>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Enter email adress" />
        <textarea cols="30" rows="10" placeholder="Enter message"></textarea>

        <Button>Send message</Button>
      </form>
    </div>
  );
}

export default Form;
