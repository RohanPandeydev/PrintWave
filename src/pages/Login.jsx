import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import Registration from "../components/Registration";
import { useFormik } from "formik";
import { LoginForm } from "../helper/ValidationHelper/Validation";
import AuthServices from "../services/AuthServices";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import StorageData from "../helper/storagehelper/StorageData";
import ButtonLoader from "../utils/Loader/ButtonLoader";
import { fetchUserCart, mergeCartsOnLogin, saveCartToDatabase } from "../helper/carthelper/AddtoCart";
import useCartContext from "../contexts/CartContext";

const Login = ({ state, loginToggle, modal }) => {
  const navigate = useNavigate();
  const location = useLocation()

  const { setCartList } = useCartContext()
  const [toggleRegistration, setToggleRegistration] = useState(false);
  const handleToggleRegistration = () => {
    setToggleRegistration(!toggleRegistration);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    validationSchema: LoginForm,
    initialValues: initialValues,
    onSubmit: (values) => {
      submitHandler(values);
    },
  });

  const submitHandler = (data) => {
    loginUserMutate.mutate(data);
  };

  const loginUserMutate = useMutation((data) => AuthServices.loginUser(data), {
    onSuccess: async (data) => {
      try {
        // Reset form and set user data
        formik.resetForm();
        StorageData.setToken(data?.data?.authToken);
        StorageData.setData(data?.data?.data?.user);

        // Show success notification
        Swal.fire({
          title: "Successful",
          text: "User Logged In Successfully",
          icon: "success",
        });

        // Get local cart data
        const localCart = StorageData.getUserCartData() || [];

        console.log(localCart, "localCart")

        // Get user's cart from database
        const databaseCart = await fetchUserCart(data?.data?.data?.user._id);
        console.log(databaseCart, "databaseCart");

        // Merge carts
        const mergedCart = await mergeCartsOnLogin(localCart, databaseCart);
        console.log(mergedCart, "mergedCart")


        // Update context with merged cart
        setCartList(mergedCart);

        // Save merged cart to database
        if (mergedCart?.length > 0) {

          const saveToDb = await saveCartToDatabase(mergedCart, data?.data?.data?.user._id);
          console.log(saveToDb, "saveToDb");


        }

        // Redirect to the last pathname or home
        const lastPathname = state || "/";
        // console.log(lastPathname)
        window.location.replace(lastPathname);
        // Clear local storage cart
 StorageData.setCartData([]);



      } catch (error) {
        console.error("Cart synchronization error:", error);

        // // If cart sync fails, still redirect
        // const lastPathname = location?.state?.path || "/";
        // window.location.replace(lastPathname);

        Swal.fire({
          title: "Warning",
          text: "Logged in successfully, but there was an issue syncing your cart.",
          icon: "warning",
        });
      }
    },

    onError: (err) => {
      console.log("Error response data:", err.response?.data);
      const msg =
        err.response?.data?.error ||
        "An unexpected error occurred. Please try again.";
      Swal.fire({
        title: "Error",
        text: msg,
        icon: "error",
      });
    },
  });

  return (
    <>
      <Modal
        isOpen={modal}
        fade={false}
        toggle={loginToggle}
        centered={true}
        className="login-modal"
      >
        <ModalHeader toggle={loginToggle}></ModalHeader>
        <ModalBody>
          {toggleRegistration ? (
            <Registration state={state} handleToggleRegistration={handleToggleRegistration} />
          ) : (
            <>
              <h3 className="modal-title">Login</h3>

              <Form className="mt-4" onSubmit={formik.handleSubmit}>
                <FormGroup>
                  <Label>Email Address</Label>
                  <Input
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="email"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-danger">
                      {formik.errors.email}
                    </p>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input
                    name="password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <p className="text-danger">
                      {formik.errors.password}
                    </p>
                  )}
                </FormGroup>
                <Button className="btn btn-success w-100 mb-3" >{loginUserMutate?.isLoading ? <ButtonLoader /> : "LOGIN"}</Button>

                <FormGroup className="text-center">
                  New User?{" "}
                  <Button
                    className="register"
                    onClick={handleToggleRegistration}
                  >
                    Create an Account
                  </Button>
                </FormGroup>
              </Form>
            </>
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default Login;
