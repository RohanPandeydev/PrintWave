import React from "react";
import Slider from "react-slick";
import banner1 from "../assets/banner1.jpg";
import { useQuery } from "@tanstack/react-query";
import BannerServices from "../services/BannerServices";
import { NavLink } from "react-router-dom";

const Banner = () => {
  var settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  const { data: bannerList, isLoading: isBannerListLoading } = useQuery(
    ["bannerlist"],
    () => BannerServices.getBanners(),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        // console.log("Data category ", data?.data);
        // const total = Math.ceil(data?.data?.count / 10);
        // setTotalPages(total);
        // StorageData.setData(data?.data?.data?.users);
        console.log(bannerList?.data?.data);
        
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
      <Slider {...settings}>
      {bannerList &&
          bannerList?.data?.data?.banners?.map((item, index) => {
            return (
              <>
                <div key={index}>
                  <div className="banner-inner-section">
                    <NavLink className='banner-img' to={item?.bannerLink}>
                      <img
                        src={item?.bannerImage}
                        alt=""
                      />
                    </NavLink>
                    <div className="banner-txt">
                      <h2>
                        One-stop shop for <br />
                        all your Business Needs
                        <span>CHECK OUR BUSINESS DESIGNS</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </Slider>
      {/* <Slider {...settings} className="banner-slider">
        {bannerList &&
          bannerList?.data?.data?.banners?.map((item, index) => {
            return (
              <>
                <div key={index}>
                  <div className="banner-inner-section">
                    <NavLink to={item?.bannerLink}>
                      <img
                        src={item?.bannerImage}
                        alt=""
                      />
                    </NavLink>
                    <div className="banner-txt">
                      <h2>
                        One-stop shop for <br />
                        all your Business Needs
                        <span>CHECK OUR BUSINESS DESIGNS</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </Slider> */}
    </>
  );
};

export default Banner;
