import { useDispatch, useSelector } from "react-redux";
import PrductDetail from "../components/ProDetail/ProductDetail";
import { useParams } from "react-router-dom";
import { dataActions, fetchData } from "../store/data-slice";
import { useEffect } from "react";
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

function ProductDetailPage() {
  const params = useParams();

  const dispatch = useDispatch();
  // const [productData, setProductData]
  const { loading, data, error } = useSelector((state) => state.data);

  // const link = modelName
  //   .replace("-", "")
  //   .replace("  ", " ")
  //   .replaceAll(" ", "-")
  //   .toLowerCase();
  useEffect(() => {
    dispatch(dataActions.clearData());

    dispatch(fetchData());
  }, [dispatch, params.proName]);

  const filteredProducts =
    data &&
    data.filter((item) =>
      params.proName.includes(
        item.modelName
          .replace("-", "")
          .replace("  ", " ")
          .replaceAll(" ", "-")
          .toLowerCase()
      )
    );

  return (
    <>
      <Helmet>
        <title>{titles.proDetail}</title>
      </Helmet>
      {data && <PrductDetail product={filteredProducts[0]} products={data} />}
    </>
  );
}

export default ProductDetailPage;
