import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import { Link } from "react-router-dom";
import ProductServices from "../services/ProductServices";
import Loader from "../utils/Loader/Loader";
import NoDataFound from "../utils/NoDataFound";
import { useQuery } from "@tanstack/react-query";

const TrendingProduct = () => {
  const { data: trendingProductList, isLoading: isTrendingProductListLoading } =
    useQuery(
      ["trendingproductlist"],
      () => ProductServices.getTrendingProducts(),
      {
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
          // console.log("Data category ", data?.data);
          // const total = Math.ceil(data?.data?.count / 10);
          // setTotalPages(total);
          // StorageData.setData(data?.data?.data?.users);
          return data?.data;
        },

        onError: (err) => {
          console.log(err.message);
          if (err?.response?.status === 401) {
            ValidateAuthenticationKey(
              err?.response?.status,
              "Your login session has expired. Please log in again."
            );
          } else {
            return false;
          }
        },
      }
    );

  return (
    <>
      {isTrendingProductListLoading ? (
        <Loader />
      ) : trendingProductList?.data?.data?.products?.length == 0 ? (
        <NoDataFound />
      ) : (
        <div className="cate-area mt-5">
          {trendingProductList?.data?.data?.products.map((product, index) => {
            return (
              <div className="cate-bx" key={index}>
                <img src={product.productImages[0]} alt="" />
                <div className="cate-text">
                  <h3>{product.productName}</h3>
                  <Link to={`/product/${product._id}`} className="btn btn-success mt-3">
                    SHOP NOW
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default TrendingProduct;
``