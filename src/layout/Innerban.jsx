import React from "react";
import innerBanImg from '../assets/inr-ban1.png'

const Innerban = ({ category,cateId }) => {
  // console.log("category", category);
  console.log("category ididi", cateId);

  const filteredCateDetails = category?.find((cate) => cate._id === cateId);

  console.log("Filtered Category Details", filteredCateDetails);


  return (
    <>
      {/* {category?.map((category, index) => ( */}
        {/* <div className="inr-ban mt-3" key={index}> */}
        <div className="inr-ban mt-3">
          {/* <img src={category?.categoryImage} alt="" /> */}
          <img src={filteredCateDetails?.categoryImage} alt="" />
          <div className="banner-title">
            <h3>{filteredCateDetails?.title}</h3>
            {/* <p>Amplify your efforts by adding a personalized touch to traditional marketing.</p> */}
          </div>
        </div>
      {/* ))} */}
    </>
  );
};

export default Innerban;
