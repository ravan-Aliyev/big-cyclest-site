import classes from "./Why.module.scss";
import ContentCenter from "../../UI/Content";
import { WhyItem } from "./WhyItems";

const DUMMY_DATA = [
  {
    heading: "Light Weight",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.",
    imgUrl:
      "https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/specification-1.jpg",
  },
  {
    heading: "Lifetime Warrenty",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.",
    imgUrl:
      "	https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/specification-2.jpg",
  },
  {
    heading: "Biggest Service Network",
    imgUrl:
      "https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/specification-3.jpg",
  },
  {
    heading: "99% Assembled Delivery",
    imgUrl:
      "https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/specification-4.jpg",
  },
  {
    heading: "Free First Bike Service",
    imgUrl:
      "https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/specification-5.jpg",
  },
];

function Why() {
  return (
    <section className={classes.why}>
      <ContentCenter className={classes.container}>
        <h2 className="heading-h2">Why Choose CYRO?</h2>
        <div className={classes["item-container"]}>
          {DUMMY_DATA.map((item, index) => {
            if (item.text) {
              return (
                <WhyItem
                  heading={item.heading}
                  text={item.text}
                  imgUrl={item.imgUrl}
                  key={index}
                />
              );
            }
          })}
        </div>
        <div className={classes["item-container"]}>
          {DUMMY_DATA.map((item, index) => {
            if (!item.text) {
              return (
                <WhyItem
                  heading={item.heading}
                  imgUrl={item.imgUrl}
                  key={index}
                />
              );
            }
          })}
        </div>
      </ContentCenter>
    </section>
  );
}

export default Why;
