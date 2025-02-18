import React from "react";
import ReactDOM from "react-dom/client";
import { Route } from "react-router-dom";
import Home from "../../pages/Home";
import Markettingproduct from "../../pages/Markettingproduct";
import Productlist from "../../pages/Productlist";
import Contact from "../../pages/Contact";
import Faq from "../../pages/Faq";
import Cart from "../../pages/Cart";
import Checkout from "../../pages/Checkout";
import CategoryPage from "../../pages/CategoryPage";
import SubcategoryPage from "../../pages/SubcategoryPage";
import RequireAuth from "../../guard/RoutesGuard";
import EmployeeCreate from "../../pages/EmployeeCreate";
import MyOrder from "../../pages/MyOrder";
import PersonalInfo from "../../pages/PersonalInfo";
import OrderDetails from "../../pages/OrderDetails";
import OrdeLog from "../../pages/OrdeLog";
import MyWallet from "../../pages/MyWallet";
import PaymentGateway from "../../pages/PaymentGateway";

const CommonRoutes = () => {
  return (
    <>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Markettingproduct" element={<Markettingproduct />} />
      <Route exact path="/Productlist" element={<Productlist />} />
      <Route exact path="/Contact" element={<Contact />} />
      <Route exact path="/Faq" element={<Faq />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/checkout/:id?" element={<> <Checkout /></>} />
      <Route exact path="/checkout/:id/payment" element={<RequireAuth><PaymentGateway /></RequireAuth>} />

      <Route exact path="/personalinfo" element={<RequireAuth><PersonalInfo /></RequireAuth>} />
      <Route exact path="/mywallet" element={<RequireAuth><MyWallet /></RequireAuth>} />
      <Route exact path="/order" element={<RequireAuth><MyOrder /></RequireAuth>} />
      <Route exact path="/orderlog" element={<RequireAuth><OrdeLog /></RequireAuth>} />
      <Route exact path="/order/details/:id" element={<RequireAuth><OrderDetails /></RequireAuth>} />
      <Route exact path="/employee/create" element={<RequireAuth><EmployeeCreate /></RequireAuth>} />
      <Route exact path="/category/:id?" element={<CategoryPage />} />
      {/* <Route exact path="/category/:id" element={<CategoryPage />} /> */}
      <Route exact path="/subcategory/:id" element={<SubcategoryPage />} />
    </>
  );
};

export default CommonRoutes;
