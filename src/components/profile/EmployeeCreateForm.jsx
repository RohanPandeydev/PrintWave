import { useFormik } from "formik";
import React, { useEffect } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { EmployeeFormValidation } from "../../helper/ValidationHelper/Validation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ButtonLoader from "../../utils/Loader/ButtonLoader";
import Generatepassword from "../../utils/GeneratePassword";
import AuthServices from "../../services/AuthServices";
import Swal from "sweetalert2";
import config from "../../../config";

const EmployeeCreateForm = ({ loggedInUserId }) => {
  const queryClient = useQueryClient();

  const initialValues = {
    firstName: "",
    lastName: "",
    designation: "",
    email: "",
    phoneNumber: "",
    password: Generatepassword() || "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: EmployeeFormValidation,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (data) => {
    if (!loggedInUserId) return
    employeeCreateMutate?.mutate({ ...data, userType: config.userType, workingUnderOrg: loggedInUserId });
  };

  const employeeCreateMutate = useMutation(
    (data) => AuthServices.create(data),
    {
      onSuccess: async (data) => {
        // Reset form and set user data
        // Show success notification
        Swal.fire({
          title: "Successful",
          text: "User Created Successfully",
          icon: "success",
        });
        formik.resetForm();
        queryClient.refetchQueries("employee-list");
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

  return (
    <>
      <Form className="shipping-form mt-4" onSubmit={formik.handleSubmit}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label>First Name</Label>
              <Input
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter first name"
                type="text"
              />
            </FormGroup>
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-danger">{formik.errors.firstName}</p>
            )}
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Last Name</Label>
              <Input
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter last name"
                type="text"
              />
            </FormGroup>
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-danger">{formik.errors.lastName}</p>
            )}
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Designation</Label>
              <Input
                name="designation"
                value={formik.values.designation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter Designation"
                type="text"
              />
            </FormGroup>
            {formik.touched.designation && formik.errors.designation && (
              <p className="text-danger">{formik.errors.designation}</p>
            )}
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Email Address</Label>
              <Input
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter email address"
                type="email"
              />
            </FormGroup>
            {formik.touched.email && formik.errors.email && (
              <p className="text-danger">{formik.errors.email}</p>
            )}
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Phone Number</Label>
              <Input
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter phone number"
                type="tel"
              />
            </FormGroup>
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <p className="text-danger">{formik.errors.phoneNumber}</p>
            )}
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Password</Label>
              <Input
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter phone number"
                type="text"
              />
            </FormGroup>
            {formik.touched.password && formik.errors.password && (
              <p className="text-danger">{formik.errors.password}</p>
            )}
          </Col>
          <Col md={6}>
            <Button
              disabled={employeeCreateMutate?.isLoading}
              className="btn btn-success"
            >
              {employeeCreateMutate?.isLoading ? <ButtonLoader /> : "Submit"}
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default EmployeeCreateForm;
