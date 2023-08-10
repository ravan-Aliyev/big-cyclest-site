import ContentCenter from "../UI/Content";
import classes from "./ContactDetails.module.scss";
import Form from "./Form";

function ContactDetails() {
  return (
    <section className={classes.section}>
      <ContentCenter className={classes.container}>
        <Form />
        <div className={classes.details}>
          <h3 className="heading-h3">Contact Details</h3>
          <div className={classes.hours}>
            <h5 className="heading-h5">Our Hours</h5>
            <p>10.00 AM - 22.00 PM</p>
            <p>Monday - Friday</p>
          </div>
          <div className={classes.locatin}>
            <h5 className="heading-h5">Location</h5>
            <p>28 May St, Agjabadi, Azerbaijan</p>
          </div>
          <div className={classes.contact}>
            <h5 className="heading-h5">Contact us</h5>
            <p>Phone: 055 555 55 55</p>
            <p>Email: contact@company.com</p>
          </div>
        </div>
      </ContentCenter>
    </section>
  );
}

export default ContactDetails;
