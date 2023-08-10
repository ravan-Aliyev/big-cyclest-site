import classes from "./Collection.module.scss";
import CollectionItem from "./CollectionItem";

const DUMMY_COLLECTONS = [
  {
    collection: "Mountain Bikes",
    imgURL: "./cyclest-img/moutain-bike.jpg",
    bikeData: [
      `Officia deserunt mollit`,
      `Excepteur sint occaecat`,
      `Sunt in culpa qui`,
      `Officia deserunt mollit`,
      `Excepteur sint occaecat`,
      `Sunt in culpa qui`,
    ],
    id: "c1",
  },
  {
    collection: "City Bikes",
    imgURL: "./cyclest-img/city-bike.jpg",
    bikeData: [
      `Officia deserunt mollit`,
      `Excepteur sint occaecat`,
      `Sunt in culpa qui`,
      `Officia deserunt mollit`,
      `Excepteur sint occaecat`,
      `Sunt in culpa qui`,
    ],
    id: "c2",
  },
  {
    collection: "Speciality Bikes",
    imgURL: "./cyclest-img/speciality-bike.jpg",
    bikeData: [
      `Officia deserunt mollit`,
      `Excepteur sint occaecat`,
      `Sunt in culpa qui`,
      `Officia deserunt mollit`,
      `Excepteur sint occaecat`,
      `Sunt in culpa qui`,
    ],
    id: "c3",
  },
];

function Collection() {
  return (
    <section className={classes.collection}>
      {DUMMY_COLLECTONS.map((collection) => {
        return (
          <CollectionItem
            collecCatacory={collection.collection}
            collectionURL={collection.imgURL}
            bikeDataList={collection.bikeData}
            key={collection.id}
          />
        );
      })}
    </section>
  );
}

export default Collection;
