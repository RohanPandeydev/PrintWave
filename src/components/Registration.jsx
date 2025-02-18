import { useFormik } from "formik";
import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { AddUser } from "../helper/ValidationHelper/Validation";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import AuthServices from "../services/AuthServices";
import ButtonLoader from "../utils/Loader/ButtonLoader";

const Registration = ({ state, handleToggleRegistration }) => {
  const navigate = useNavigate();
  const location = useLocation()
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: AddUser,
    onSubmit: (values) => {
      submitHandler(values);
    },
  });

  const submitHandler = (data) => {
    resgisterUserMutate.mutate(data);
  };

  const resgisterUserMutate = useMutation(
    (data) => AuthServices.create(data),
    {
      onSuccess: (data) => {
        formik.resetForm();
        Swal.fire({
          title: "Successful",
          text: "User Registered Successfully",
          icon: "success",
        });

        // // If cart sync fails, still redirect
        const lastPathname = state || "/";
        window.location.replace(lastPathname);
        // window.location.replace(state|| "/");
      },

      onError: (err) => {
        console.log("Error response data:", err.response?.data);
        const msg =
          err.response?.data?.message ||
          "An unexpected error occurred. Please try again.";
        Swal.fire({
          title: "Error",
          text: msg,
          icon: "error",
        });
      },
    }
  );


  // console.log(formik.errors)

  return (
    <>
      <h3 className="modal-title">Create an Account</h3>
      <Form className="mt-4" onSubmit={formik.handleSubmit}>
        <FormGroup>
          <Label>First Name</Label>
          <Input
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <p className="text-danger">{formik.errors.firstName}</p>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <p className="text-danger">{formik.errors.lastName}</p>
          )}
        </FormGroup>
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
            <p className="text-danger">{formik.errors.email}</p>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Phone Number</Label>
          <Input
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <p className="text-danger">{formik.errors.phoneNumber}</p>
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
            <p className="text-danger">{formik.errors.password}</p>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Confirm Password</Label>
          <Input
            name="confirmPassword"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="text-danger">
              {formik.errors.confirmPassword}
            </p>
          )}
        </FormGroup>

        <Button className="btn btn-success w-100 mb-3" disabled={resgisterUserMutate?.isLoading}>

          {resgisterUserMutate?.isLoading ? <ButtonLoader /> : "Create My Account"}
        </Button>

        <FormGroup className="text-center">
          Already have an Account{" "}
          <Button className="register" onClick={handleToggleRegistration}>
            Login
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default Registration;
