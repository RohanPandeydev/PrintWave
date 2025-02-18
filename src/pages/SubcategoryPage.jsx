import React, { useEffect, useState } from "react";
import Innerban2 from "../layout/Innerban2";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Col, Container, Row, Button } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import SubcategoryServices from "../services/SubcategoryServices";
import ProductServices from "../services/ProductServices";
import { useQuery } from "@tanstack/react-query";
import Loader from "../utils/Loader/Loader";
import useCartContext from "../contexts/CartContext";
import { handleAddToCart } from "../helper/carthelper/AddtoCart";
import { BsCartCheckFill } from "react-icons/bs";
import { PiShoppingCartFill } from "react-icons/pi";
import { RiLuggageCartFill } from "react-icons/ri";

const SubcategoryPage = () => {
  let { id: subCateId } = useParams();
  const [subcategories, setSubcategories] = useState([]);
  const [id, setId] = useState("");
  const { cartList, setCartList } = useCartContext()

  const { data: productList, isLoading: isProductListLoading } = useQuery(
    ["productlist", id],
    () => ProductServices.getProductBySubcategory(id),
    {
      enabled: !!id,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        console.log("Data category ", data?.data);
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

  useEffect(() => {
    try {
      if (subCateId) {
        // console.log(subCateId, "subCateId");

        const decodeId = atob(subCateId);
        setId(decodeId);
      } else {
      }
    } catch (error) {
      console.error("Error decoding user ID:", error.message);
    }
  }, [subCateId]);

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const response = await SubcategoryServices.getSubcategoryList();
        setSubcategories(response.data.data.subcategory);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchSubCategories();
  }, []);

  // console.log(cartList,"cartListcartList")

  return (
    <>
      <Header />

      <Innerban2 subcategory={subcategories} subCateId={id} />

      <section className="main-wrap">
        <Container>
          <Row>
            {isProductListLoading ? (
              <Loader />
            ) : (
              productList?.data?.data?.products.map((product) => {
                const isAlreadyAdded = cartList?.findIndex(each => {
                  // console.log("Comparing:", each?.product?._id, "with", product?._id);
                  return String(each?.product?._id) === String(product?._id);
                }) !== -1;




                return <Col lg={3} md={4}>
                  <div className="product-bx">
                    {/* <Link to={`/product/${btoa(product?.id)}`}> */}
                    <div className="pro-img">
                      <img src={product?.productImages[0]} alt="" />
                      <div className="btn-overlay">
                        {
                          isAlreadyAdded ? <>
                          <BsCartCheckFill color="#fff" fontSize="50px" className="cart-icon-already"/>

                          {/* <RiLuggageCartFill /> */}
                          </> : <Button onClick={(e) => handleAddToCart(e, product, cartList, setCartList)} className="btn btn-success">
                            CART
                          </Button>
                        }

                      </div>
                    </div>
                    <div className="p-3">
                      <h3>{product?.productName}</h3>
                      {/* <p>100 starting at</p> */}
                      <h5 className="price">${product?.price}</h5>
                      <hr className="my-3" />
                      <p>{product?.description}</p>
                      {/* <ul>
                          <li>{product?.description}</li>
                        </ul> */}
                      {/* <ul>
                          <li>Classic style for any business</li>
                          <li>14-17 pt. paper stock options</li>
                          <li>Print in 1 business day</li>
                        </ul> */}
                    </div>
                    {/* </Link> */}
                  </div>
                </Col>
              })
            )}
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default SubcategoryPage;
