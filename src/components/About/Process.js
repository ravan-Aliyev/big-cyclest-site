import classes from "./Process.module.scss";
import ContentCenter from "../UI/Content";

const DUMMY_QUOTES = [
  {
    heading: "Research",
    text: "Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus nec ullam corper.",
  },
  {
    heading: "Idea & Concept",
    text: "Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus nec ullam corper.",
  },
  {
    heading: "Design & Production",
    text: "Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus nec ullam corper.",
  },
  {
    heading: "Sales & Service",
    text: "Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus nec ullam corper.",
  },
];

function Process() {
  return (
    <section className={classes.section}>
      <ContentCenter className={classes.container}>
        <h2 className="heading-h2">Our process</h2>
        <div className={classes.quotes}>
          {DUMMY_QUOTES.map((item, index) => {
            return (
              <div className={classes["quote-container"]}>
                <span>0{index + 1}</span>
                <h5 className="heading-h5">{item.heading}</h5>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </ContentCenter>
    </section>
  );
}

export default Process;
