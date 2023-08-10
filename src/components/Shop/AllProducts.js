import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import classes from "./AllProducts.module.scss";
import ProductItem from "../Products/ProductItem";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function AllProducts({ products, setSortHandler }) {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const catacory = useParams().catacory;

  const backwardPageHandler = () => {
    setPage((preState) => preState - 1);
  };

  const forwardPageHandler = () => {
    setPage((preState) => preState + 1);
  };

  const numberPageHandler = (e) => {
    setPage(+e.target.innerText);
  };

  const navigateHandler = (e) => {
    setSortHandler(e.target.value);
  };

  let errText = products.length === 0 ? <p>There is nothing like that</p> : "";

  const start = (page - 1) * 12;
  const end = page * 12;

  const pageNum = Math.ceil(products.length / 12);
  return (
    <div className={classes.container}>
      <div className={classes.nav}>
        <Link to="/">Home</Link>
        {page === 1 ? (
          <span> / Shop</span>
        ) : (
          <>
            <Link to="/shop"> / Shop</Link>
            <span> / Page {page}</span>
          </>
        )}
      </div>

      {catacory && (
        <h1
          className={`heading-h1 ${classes.header}`}
          style={{
            color: "rgb(223, 69, 62)",
            textTransform: "capitalize",
            fontFamily: '"Racing Sans One", cursive',
          }}
        >
          {catacory}
        </h1>
      )}

      {products.length !== 0 && (
        <div className={classes.showing}>
          <p>{`Showing ${start + 1} - ${
            pageNum === page ? products.length : end
          } of ${products.length} results`}</p>
          <select onChange={navigateHandler}>
            <option value="menu_order">Default Sorting</option>
            <option value="popularity">Sort by popularity</option>
            <option value="date">Sort by latest</option>
            <option value="price">Sort by price: low to high</option>
            <option value="price_dsc">Sort by price: high to low</option>
          </select>
        </div>
      )}

      <div className={classes["products-list"]}>
        {errText ||
          products.slice(start, end).map((item) => {
            if (item.catacory === "Bicycles") {
              return (
                <ProductItem
                  modelName={item.modelName}
                  price={item.price}
                  catacory={item.catacory}
                  imgUrl={item.imgUrl}
                  id={item.id}
                  key={item.id}
                />
              );
            }
            if (item.catacory === "Accessories") {
              return (
                <ProductItem
                  modelName={item.modelName}
                  price={item.price}
                  sizes={item.sizes}
                  catacory={item.catacory}
                  imgUrl={item.imgUrl}
                  id={item.id}
                  key={item.id}
                />
              );
            }
          })}
      </div>

      {products.length !== 0 && (
        <div className={classes["pagination-buttons"]}>
          {page !== 1 && (
            <span
              className={classes["pagination-btn"]}
              onClick={backwardPageHandler}
            >
              &larr;
            </span>
          )}

          {Array.from(Array(pageNum)).map((_, index) => {
            return pageNum === 1 ? null : (
              <span
                key={index}
                className={`${
                  page === index + 1
                    ? classes.active
                    : classes["pagination-btn"]
                }`}
                onClick={numberPageHandler}
              >
                {index + 1}
              </span>
            );
          })}
          {page !== pageNum && (
            <span
              className={classes["pagination-btn"]}
              onClick={forwardPageHandler}
            >
              &rarr;
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default AllProducts;

// const navigateHandler = (e) => {
//   setFilterValue(e.target.value);
// };

// const applyFilter = () => {
//   let pro = products;

//   // console.log(e.target.value);

//   if (filterValue === "price") {
//     pro = pro.sort((a, b) => {
//       return a.price[0] - b.price[0];
//     });
//   }

//   if (filterValue === "price_dsc") {
//     pro = pro.sort((a, b) => {
//       return b.price[0] - a.price[0];
//     });
//   }

//   setFilteredItems(pro);
// };

// // console.log(filteredItems);

// useEffect(() => {
//   applyFilter();
// }, [filterValue]);

// item.modelName.trim().replaceAll(" ", "").toLowerCase()

// const arr = [
//   { age: 23 },
//   { age: 12 },
//   { age: 24 },
//   { age: 35 },
//   { age: 10 },
//   { age: 16 },
// ];

// console.log(arr.sort((a, b) => b.age - a.age));

// let arr = [1, 1, 1, 1, 2, 2, 3, 4, 2];

// Array.from(Array(3)).map((item, index) => console.log(index));

// Array(3).map((item, index) => console.log(index));
