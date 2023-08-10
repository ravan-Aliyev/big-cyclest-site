import classes from "./MainShop.module.scss";
import ContentCenter from "../UI/Content";
import SortingSection from "./SortingSection";
import AllProducts from "./AllProducts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MainShop({ products }) {
  const proMinMax = products
    .flatMap((pro) => pro.price)
    .toSorted((a, b) => a - b);

  const [price, setPrice] = useState([proMinMax[0], proMinMax.at(-1)]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const catacory = useParams().catacory;

  const [filteredProducts, setFilteredProducts] = useState(products);

  const priceHandler = (minMaxValue) => {
    setPrice(minMaxValue);
  };

  const searchHandler = (searchValue) => {
    setSearch(searchValue);
  };

  const sortHandler = (sortValue) => {
    setSort(sortValue);
  };

  const applySorting = () => {
    let pro = products;

    if (search) {
      // if (serch)
      pro = pro.filter((item) => {
        return item.modelName
          .trim()
          .replaceAll(" ", "")
          .toLowerCase()
          .includes(search);
      });
    }

    const min = price[0];
    const max = price[1];

    if (price) {
      pro = pro.filter((item) => {
        const value = item.price.toSorted((a, b) => b - a);
        return value[0] >= min && value[0] <= max;
      });
    }

    if (sort) {
      if (sort === "price") {
        pro = pro.sort((a, b) => {
          return a.price[0] - b.price[0];
        });
      }

      if (sort === "price_dsc") {
        pro = pro.sort((a, b) => {
          return b.price[0] - a.price[0];
        });
      }
    }

    if (catacory === "bicycles") {
      pro = pro.filter((item) => item.catacory === "Bicycles");
      // setFilteredItems(products.filter((item) => item.catacory === "Bicycles"));
    }
    if (catacory === "accessories") {
      pro = pro.filter((item) => item.catacory === "Accessories");
      // setFilteredItems(
      //   products.filter((item) => item.catacory === "Accessories")
      // );
    }

    setFilteredProducts(pro);
  };

  useEffect(() => {
    applySorting();
  }, [price, search, sort]);

  return (
    <section className={classes["main-shop"]}>
      <div className={classes["main-container"]}>
        <SortingSection
          products={products}
          setPriceHandler={priceHandler}
          setSearchHandler={searchHandler}
        />
        <AllProducts products={filteredProducts} setSortHandler={sortHandler} />
      </div>
    </section>
  );
}

export default MainShop;
