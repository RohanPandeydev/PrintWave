import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../layout/Header";
import Innerban from "../layout/Innerban";
import { Container, Row } from "reactstrap";
import Footer from "../layout/Footer";
import CategorySubcategoryList from "../components/CategorySubcategoryList";
import SubcategoryServices from "../services/SubcategoryServices";
import { useQuery } from "@tanstack/react-query";
import Loader from "../utils/Loader/Loader";
import CategoryServices from "../services/CategoryServices";

const CategoryPage = () => {
  let { id: categId } = useParams();
  const [categories, setCategories] = useState([]);
  const [id, setId] = useState("");

  const { data: subcategoryList, isLoading: isSubcategoryListLoading } =
    useQuery(
      ["subcategorylist", id],
      () => SubcategoryServices.getSubcategoryListByCategory(id),
      {
        enabled: !!id,
        onSuccess: (data) => {
          // console.log("Data category ", data?.data);
          const total = Math.ceil(data?.data?.count / 10);
          //   setTotalPages(total);
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
      if (categId) {
        // console.log(categId, "categId");

        const decodeId = atob(categId);
        setId(decodeId);
      } else {
      }
    } catch (error) {
      console.error("Error decoding user ID:", error.message);
    }
  }, [categId]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await CategoryServices.getCategoryList();
        setCategories(response.data.data.Categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <>
        <Header />

        <Innerban category={categories} cateId={id} />

        <section className="main-wrap">
          <Container>
            <Row>
              <CategorySubcategoryList
                subcategoryList={subcategoryList?.data?.data?.subcategory}
                isLoading={isSubcategoryListLoading}
              />

              {/* <div className="text-center mt-5">
                <Link to="#" className="btn btn-success">
                  Load More
                </Link>
              </div> */}
            </Row>
          </Container>
        </section>

        <Footer />
      </>
    </div>
  );
};

export default CategoryPage;
