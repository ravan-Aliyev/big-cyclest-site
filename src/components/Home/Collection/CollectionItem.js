import classes from "./CollectionItem.module.scss";
import ContentCenter from "../../UI/Content";
import List from "../../UI/List";
import Button from "../../UI/Button";
import BGContainer from "../../UI/BGimageContainer";

function CollectionItem({ collecCatacory, collectionURL, bikeDataList }) {
  return (
    <BGContainer bgImg={collectionURL}>
      <ContentCenter className={classes["collection-container"]}>
        <h5 className="heading-h5">Discover collection</h5>

        <h3 className="heading-h3">{collecCatacory}</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
        </p>

        <List listItems={bikeDataList} color="red" />

        <Button>Explore Now</Button>
      </ContentCenter>
    </BGContainer>
  );
}

export default CollectionItem;
