import React, { useContext, useEffect, useState } from "react";
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import {
  Link, NavLink,
  useLocation,
} from "react-router-dom";
import Login from "../pages/Login";
import NavBar from "./NavBar";
import CategoryServices from "../services/CategoryServices";
import { useQuery } from "@tanstack/react-query";
import customContext from "../contexts/Context";
import Swal from "sweetalert2";
import StorageData from "../helper/storagehelper/StorageData";
import useCartContext from "../contexts/CartContext";

const Header = () => {
  const { userData, token } = customContext();
  const { cartList, setCartList } = useCartContext()
  const [cartLength, setCartLength] = useState(0)
  // console.log("userData ", userData);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [modal, setModal] = useState(false);
  const loginToggle = () => setModal(!modal);
  const path=useLocation()

  const handleLogout = () => {
    StorageData.removeData();
    Swal.fire({
      title: "Succssfull",
      text: "Logout Successfully",
      icon: "success",
    });
    setTimeout(() => {
      window.location.reload()
      window.location.replace("/");
    }, 100);
    return;
  };

  const { data: categoryList, isLoading: isCategoryListLoading } = useQuery(
    ["categorylist"],
    () => CategoryServices.getCategoryList(),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        // console.log("Data category ", data?.data?.data);
        //   const total = Math.ceil(data?.data?.count / 10);
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
    console.log("Cart updated:", cartList);
  }, [cartList]);
  return (
    <>
      <header>
        <div className="head-top">
          <Container>
            <div className="d-flex align-items-center justify-content-between">
              {/* <ul className="top-menu">
                <li className="active">
                  <Link href="#">RETAIL</Link>
                </li>
                <li>
                  <Link href="#">CORPORATE</Link>
                </li>
              </ul> */}

              <ul className="top-cntct-lst">
                <li>Customer Support: </li>
                <li>
                  <a href="tel: 3017365952">
                    <i className="bi bi-headset"></i> +1-301-736-5952
                  </a>
                </li>
                <li>
                  <a href="mailto:">
                    <i className="bi bi-envelope-fill"></i> Write to us
                  </a>
                </li>
              </ul>
            </div>
          </Container>
        </div>

        <div className="head-mid">
          <Container>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <div className="logo">
                  <Link to="/">
                    <img className="img-fluid" src={logo} alt="" />
                  </Link>
                </div>
                <div className="top-srch">
                  <form>
                    <input
                      placeholder="Search for products or designs"
                      type="text"
                    />
                    <button type="submit" className="search-icon">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-end">
                <ul className="intro-lst">
                  {token ? (
                    <>
                      <li>
                        <Link to="#" onClick={handleLogout}>Logout</Link>
                      </li>
                      <li>
                        <Link to="/order"> Order</Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link to="/personalinfo">Welcome Guest</Link>
                      </li>
                      <li>
                        <Link to="#" onClick={loginToggle}>
                          Login
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
                {(
                  <Link to="/cart" className="cart-btn">
                    <img src={cart} alt="" /> My Cart
                    <span className="count">{cartList?.length}</span>
                  </Link>
                )}
              </div>
            </div>
          </Container>
        </div>
        <div className="head-bttm">
          <Container>
            <Navbar expand="lg">
              <NavbarToggler onClick={toggle} />

              <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                  {categoryList?.data?.data?.Categories?.map(
                    (category, index) => (
                      <NavItem key={index}>
                        <NavLink className={({ isActive }) => (isActive ? 'active-nav-head' : 'nav-head')}  to={`/category/${btoa(category._id)}`}>
                          {category?.title}
                        </NavLink>
                      </NavItem>
                    )
                  )}
                </Nav>
                <Link to="/Contact" className="btn btn-success">
                  GET FREE QUOTE
                </Link>
              </Collapse>
            </Navbar>
          </Container>
        </div>
      </header>

      <Login loginToggle={loginToggle} modal={modal} />
    </>
  );
};

export default Header;
