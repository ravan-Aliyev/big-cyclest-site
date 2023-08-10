import classes from "./Stories.module.scss";
import ContentCenter from "../UI/Content";
import { WhyItem } from "../Home/Why/WhyItems";

function Stories() {
  return (
    <section className={classes.stories}>
      <ContentCenter className={classes.container}>
        <h2 className="heading-h2">Explore the stories</h2>
        <div className={classes["stories-container"]}>
          <WhyItem imgUrl="https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/2002.jpg">
            <div>
              <p>Get on & go</p>
              <p className={classes.year}>2008</p>
            </div>
          </WhyItem>
          <WhyItem imgUrl="https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/2002.jpg">
            <div>
              <p>Get on & go</p>
              <p className={classes.year}>2008</p>
            </div>
          </WhyItem>
          <WhyItem
            imgUrl="https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/2002.jpg"
            className={classes.right}
          >
            <div>
              <p>Get on & go</p>
              <p className={classes.year}>2008</p>
            </div>
          </WhyItem>
        </div>
        <div className={classes["stories-container"]}>
          <WhyItem
            imgUrl="https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/2002.jpg"
            className={classes.left}
          >
            <div>
              <p>Get on & go</p>
              <p className={classes.year}>2008</p>
            </div>
          </WhyItem>
          <WhyItem imgUrl="https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/2002.jpg">
            <div>
              <p>Get on & go</p>
              <p className={classes.year}>2008</p>
            </div>
          </WhyItem>
          <WhyItem imgUrl="https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/2002.jpg">
            <div>
              <p>Get on & go</p>
              <p className={classes.year}>2008</p>
            </div>
          </WhyItem>
        </div>
      </ContentCenter>
    </section>
  );
}

export default Stories;
