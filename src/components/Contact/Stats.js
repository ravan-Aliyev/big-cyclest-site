import ContentCenter from "../UI/Content";
import classes from "./Stats.module.scss";
import { FaStore, FaToolbox, FaTruckMoving } from "react-icons/fa";

function Stats() {
  return (
    <section className={classes.section}>
      <ContentCenter className={classes.container}>
        <div className={classes.stats}>
          <span>
            <FaTruckMoving />
          </span>
          <span className={classes.number}>1 020 932</span>
          <span>Sales Related Enquiries</span>
        </div>
        <div className={classes.stats}>
          <FaToolbox />
          <span className={classes.number}>1 020 932</span>
          <span>Service Related Enquiries</span>
        </div>
        <div className={classes.stats}>
          <FaStore />
          <span className={classes.number}>1 020 932</span>
          <span>Dealership Related Enquiries</span>
        </div>
      </ContentCenter>
    </section>
  );
}

export default Stats;
