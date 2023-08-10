import classes from "./SortingSection.module.scss";
import { FaAngleRight } from "react-icons/fa";
import Button from "../UI/Button";
import MultiRangeSlider from "../UI/DoubleRange";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useParams } from "react-router-dom";

function SortingSection({ products, setPriceHandler, setSearchHandler }) {
  const accessories = products.filter(
    (item) => item.catacory === "Accessories"
  ).length;

  const searchInput = useRef();
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    // if (!searchInput.current.value) return;
    // console.log(searchInput.current.value);
    setSearchHandler(
      searchInput.current.value.trim().toLowerCase().replaceAll(" ", "")
    );
    // navigate(
    //   `?s=${searchInput.current.value.trim().toLowerCase().replace(" ", "+")}`
    // );
  };

  const priceHandler = (e) => {
    e.preventDefault();

    setPriceHandler([+e.target.min.value, +e.target.max.value]);
  };

  const proMinMax = products
    .flatMap((pro) => pro.price)
    .toSorted((a, b) => a - b);

  return (
    <div className={classes["sorting-container"]}>
      <form className={classes["search-container"]} onSubmit={searchHandler}>
        <label htmlFor="search">Search</label>
        <div>
          <input
            type="search"
            id="search"
            placeholder="Search Products..."
            ref={searchInput}
          />
          <Button>
            <FaAngleRight />
          </Button>
        </div>
      </form>
      <form className={classes["range-container"]} onSubmit={priceHandler}>
        <h2 className={classes.filter}>Filter by price</h2>
        <MultiRangeSlider min={proMinMax[0]} max={proMinMax.at(-1)} />
        <Button>Apply</Button>
      </form>

      <div className={classes["catacories-container"]}>
        <h2 className={classes.filter}>Filter by catacories</h2>
        <Link to="/product-catacory/bicycles">
          Bicycles <span>({products.length - accessories})</span>
        </Link>
        <Link to="/product-catacory/accessories">
          Accessories <span>({accessories})</span>
        </Link>
      </div>
    </div>
  );
}

export default SortingSection;

// const string = ["jnfnein"];
// console.log(string.join("&"));
// console.log(string.trim().replace(/[s?=+]/g, ""));

// const string = "s?=rev+der";
// console.log(string.trim().replace(/[s?=+]/g, ""));

// const arr = [3, 5, 2, 7, 3, 8];

// const sort = arr.toSorted((a, b) => a - b);

// console.log(arr, sort);
