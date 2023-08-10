import BGContainer from "../UI/BGimageContainer";
import ContentCenter from "../UI/Content";
import Button from "../UI/Button";
import classes from "./New.module.scss";

function New() {
  return (
    <BGContainer bgImg="./cyclest-img/bike-hero.jpg" className={classes.new}>
      <ContentCenter className={classes["new__content"]}>
        <h4 className="heading-h4">The All New</h4>
        <h2 className="heading-h2">Kryo X26 MTB Is Here</h2>
        <p>
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
          vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris
          in erat justo.
        </p>
        <Button>Shop Now</Button>
      </ContentCenter>
    </BGContainer>
  );
}

export default New;
