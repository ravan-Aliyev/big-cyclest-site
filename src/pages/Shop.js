import { Outlet, useLocation, useParams } from "react-router-dom";
import MainShop from "../components/Shop/MainShop";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData, dataActions } from "../store/data-slice";
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

//   {
//     modelName: "Bicycle Gloves Gold",
//     price: [35, 27, 30],
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
//   {
//     modelName: "Bicycle Gloves Yellow",
//     price: [27, 30, 35],
//     id: "p9",
//     catacory: "Accessories",
//     imgUrl:
//       "https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/accessories-6.jpg",
//     sizes: ["L", "M", "XL"],
//   },
//   {
//     modelName: "Bicycle Helmet Blue",
//     price: [27, 30, 35],
//     id: "p10",
//     catacory: "Accessories",
//     imgUrl:
//       "https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/helmet-5.jpg",
//     sizes: ["L", "M", "XL"],
//   },
//   {
//     modelName: "Bicycle Helmet Green",
//     price: [27, 30, 35],
//     id: "p11",
//     catacory: "Accessories",
//     imgUrl:
//       "https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/helmet-3.jpg",
//     sizes: ["L", "M", "XL"],
//   },
//   {
//     modelName: "Bicycle Helmet Pink",
//     price: [27, 30, 35],
//     id: "p12",
//     catacory: "Accessories",
//     imgUrl:
//       "https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/helmet-1.jpg",
//     sizes: ["L", "M", "XL"],
//   },
//   {
//     modelName: "Bicycle Helmet Red",
//     price: [27, 30, 35],
//     id: "p13",
//     catacory: "Accessories",
//     imgUrl:
//       "https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/helmet-4.jpg",
//     sizes: ["L", "M", "XL"],
//   },
//   {
//     modelName: "Bicycle Helmet Sky Blue",
//     price: [27, 30, 35],
//     id: "p14",
//     catacory: "Accessories",
//     imgUrl:
//       "	https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/helmet-2.jpg",
//     sizes: ["L", "M", "XL"],
//   },
// ];

function ShopPage() {
  const loacation = useLocation();
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);

  const catacory = useParams().catacory;

  const title = catacory ? titles[catacory] : titles.shop;

  useEffect(() => {
    dispatch(dataActions.clearData());

    dispatch(fetchData());
  }, [dispatch, loacation.pathname]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {data && <MainShop products={data} />}
      <Outlet />
    </>
  );
}

export default ShopPage;
