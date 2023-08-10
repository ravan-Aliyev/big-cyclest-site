import { useState } from "react";
import Button from "../UI/Button";
import classes from "./ReviewForm.module.scss";
import { Rating } from "react-simple-star-rating";

function ReviewForm({ productName }) {
  const [rating, setRating] = useState(0);

  const ratingHandler = (value) => {
    setRating(value);
  };

  return (
    <div className={classes.container}>
      <p>There are no reviews yet</p>
      <div className={classes["review-form"]}>
        <div>
          <h3>Be the first to review “{productName}”</h3>
          <h4>
            Your email address will not be published. Required fields are marked
            *
          </h4>
        </div>

        <form className={classes.form}>
          <div className={classes["form__rating"]}>
            <label style={{ marginRight: "1rem" }}>Your Rating *</label>
            <Rating
              onClick={ratingHandler}
              initialValue={rating}
              size={30}
              fillColor="rgb(75, 79, 88)"
            />
          </div>
          <div className={classes["form__review"]}>
            <label htmlFor="review">Your Review *</label>
            <textarea cols="30" rows="7" id="review"></textarea>
          </div>
          <div className={classes["form__user-info"]}>
            <div className={classes["form__name"]}>
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" />
            </div>
            <div className={classes["form__email"]}>
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" />
            </div>
          </div>

          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default ReviewForm;
