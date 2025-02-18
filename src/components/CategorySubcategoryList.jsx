import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

const CategorySubcategoryList = ({ subcategoryList, isLoading }) => {
  // console.log("category list",subcategoryList);

  return (
    <>
      {subcategoryList &&
        subcategoryList?.map((subcategory, index) => {
          return (
            <Col lg={3} md={4} key={index}>
              <div className="product-bx">
                <Link to={`/subcategory/${btoa(subcategory?._id)}`}>
                  <div className="pro-img">
                    <img src={subcategory?.subCateImage} alt="" />
                  </div>
                  <div className="p-3">
                    <h3>{subcategory?.subcategoryName}</h3>
                    <hr className="my-3" />
                    {/* <p>{cplist.description}</p> */}
                  </div>
                </Link>
              </div>
            </Col>
          );
        })}
    </>
  );
};

export default CategorySubcategoryList;
