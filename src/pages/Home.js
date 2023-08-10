import Collection from "../components/Home/Collection/Collection";
import Header from "../components/Home/Header/Header";
import New from "../components/Home/New";
import Products from "../components/Products/Products";
import Why from "../components/Home/Why/Why";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../store/data-slice";
import { Helmet } from "react-helmet";
import titles from "../title";

// const DUMMY_PRODUCTS = [
//   {
//     modelName: "Kryo X26 MTB - Model R",
//     price: [350],
//     id: "p1",
//     catacory: "Bicycles",
//     imgUrl:
//       "https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/bicycle-4.jpg",
//   },
//   {
//     modelName: "Kryo X26 MTB - Model Y",
//     price: [350],
//     id: "p2",
//     catacory: "Bicycles",
//     imgUrl:
//       "https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/bicycle-5.jpg",
//   },
//   {
//     modelName: "Kryo X26 MTB - Model K",
//     price: [350],
//     id: "p3",
//     catacory: "Bicycles",
//     imgUrl:
//       "	https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/bicycle-7.jpg",
//   },
//   {
//     modelName: "Kryo X26 MTB - Model X",
//     price: [350],
//     id: "p4",
//     catacory: "Bicycles",
//     imgUrl:
//       "https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/bicycle-1.jpg",
//   },
// ];

// const DUMMY_PRODUCTS2 = [
//   {
//     modelName: "Bicycle Gloves Gold",
//     price: [30, 27, 35],
//     id: "p5",
//     catacory: "Accessories",
//     imgUrl:
//       "	https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/accessories-4.jpg",
//     sizes: ["L", "M", "XL"],
//   },
//   {
//     modelName: "Bicycle Gloves Blue",
//     price: [35, 30, 27],
//     id: "p6",
//     catacory: "Accessories",
//     imgUrl:
//       "https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/accessories-4.jpg",
//     sizes: ["L", "M", "XL"],
//   },
//   {
//     modelName: "Bicycle Gloves Red",
//     price: [27, 30, 35],
//     id: "p7",
//     catacory: "Accessories",
//     imgUrl:
//       "https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/accessories-3.jpg",
//     sizes: ["L", "M", "XL"],
//   },
//   {
//     modelName: "Bicycle Gloves Pink",
//     price: [27, 30, 35],
//     id: "p8",
//     catacory: "Accessories",
//     imgUrl:
//       "https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/accessories-5.jpg",
//     sizes: ["L", "M", "XL"],
//   },
// ];

function HomePage() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const products1 = data?.filter((pro) => pro.catacory === "Bicycles");
  const products2 = data?.filter((pro) => pro.catacory === "Accessories");
  // console.log(loading, data, error);
  return (
    <>
      <Helmet>
        <title>{titles.home}</title>
      </Helmet>
      <Header />
      <Products products={products1} heading="New Arrivales" />
      <Collection />
      <Why />
      <Products products={products2} heading="Explore Accessories" />
      <New />
    </>
  );
}

export default HomePage;
