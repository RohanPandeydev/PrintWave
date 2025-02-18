import React from "react";

const Innerban2 = ({ subcategory, subCateId }) => {
  // console.log("subcategory", subcategory);

  // console.log("subCat Id: ", subCateId);

  const filterSubCateId = subcategory?.find((subCate) => subCate._id === subCateId);

  // console.log("Sub Category Details: ",filterSubCateId);
  
  

  return (
    <>
      <div className="inr-ban mt-3">
        <img src={filterSubCateId?.subCateBannerImage} alt="" />
        <div className="banner-title">
          <h3>{filterSubCateId?.subcategoryName}</h3>
          {/* <ul>
                  <li>Round, slim, square, and custom shapes available</li>
                  <li>Premium finish and cardstock choices</li>
                  <li>Design your business cards online or upload your own design</li>
              </ul> */}
        </div>
      </div>
    </>
  );
};

export default Innerban2;
