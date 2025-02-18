import React, { useEffect, useMemo, useState } from "react";

import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import PaymentGateways from "./PaymentGateways";
import { useFormik } from "formik";
import { CheckoutFormValidation } from "../../helper/ValidationHelper/Validation";
import countryList from "../../utils/JSON/CountryList";
import ButtonLoader from "../../utils/Loader/ButtonLoader";
import customContext from "../../contexts/Context";
import config from "../../../config";
import UserServices from "../../services/UserServices";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

const CheckoutForm = ({
  userData,
  token,
  handleSubmit,
  orderCreateMutate,
  userType,
  myId,
}) => {
  const [address, setAddress] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    method: "credit_card",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: CheckoutFormValidation,
    onSubmit: (values, action) => {
      handleSubmit(values, action);
    },
  });

  const { data: addressList, isLoading: isLoadAddress } = useQuery(
    ["user-address-checkout"],
    () => UserServices.getUserAddress(),
    {
      onSuccess: (data) => {
        const userAddress = data?.data?.addresses?.length
          ? data?.data?.addresses[0]
          : false;

        formik.setFieldValue(
          "name",
          `${userAddress?.name || userData?.firstName} `
        );
        formik.setFieldValue(
          "phone",
          userAddress?.phoneNumber || userData?.phoneNumber
        );
        userAddress && formik.setFieldValue("address", userAddress?.address);
        userAddress && formik.setFieldValue("country", userAddress?.country);
        userAddress && formik.setFieldValue("state", userAddress?.state);
        userAddress && formik.setFieldValue("city", userAddress?.city);
        userAddress && formik.setFieldValue("zip", userAddress?.zipCode);
        userAddress && setAddress(userAddress?._id);

        return;
      },
      onError: (err) => {
        let msg = err?.response?.data?.msg || err?.message;
        Swal.fire({
          title: "Error",
          text: msg,
          icon: "error",
        });
      },
    }
  );

  console.log(userType);

  useEffect(() => {
    if (userData && token) {
      formik.setFieldValue("email", userData?.email);
    }
  }, [userData]);

  const handleCountry = (e) => {
    formik.setFieldValue("state", "");
    formik.setFieldValue("city", "");
    formik.setFieldValue("zip", "");
    formik.handleChange(e);
  };

  const handleState = (e) => {
    formik.setFieldValue("city", "");
    formik.setFieldValue("zip", "");
    formik.handleChange(e);
  };
  const handleCity = (e) => {
    const zip_code =
      cityList.find((each) => each?.name === e.target.value)?.zip_code || "";
    formik.setFieldValue("zip", zip_code);
    formik.handleChange(e);
  };
  const handleZipCode = (e) => {
    formik.handleChange(e);
  };

  const stateList = useMemo(() => {
    if (formik.values.country) {
      return (
        countryList?.find((each) => each?.name === formik.values?.country)
          ?.states || []
      );
    }
    return [];
  }, [formik.values.country]);

  const cityList = useMemo(() => {
    if (formik.values.state && stateList.length > 0) {
      return (
        stateList.find((each) => each?.name === formik.values?.state)?.cities ||
        []
      );
    }
    return [];
  }, [formik.values.country, formik.values.state, stateList]);

  const handlePrefillAddress = (e) => {
    if (!e?.target?.value) {
      setAddress("");
      formik.setFieldValue("name", userData?.firstName || "");
      formik.setFieldValue("phone", userData?.phoneNumber || "");
      formik.setFieldValue("address", "");
      formik.setFieldValue("country", "");
      formik.setFieldValue("state", "");
      formik.setFieldValue("city", "");
      formik.setFieldValue("zip", "");
      return;
    }
    const userAddress = addressList?.data?.addresses?.find(
      (each) => each?._id === e?.target?.value
    );

    if (!userAddress) return; // Exit if no matching address is found

    setAddress(userAddress?._id);
    formik.setFieldValue(
      "name",
      userAddress?.name || userData?.firstName || ""
    );
    formik.setFieldValue(
      "phone",
      userAddress?.phoneNumber || userData?.phoneNumber || ""
    );
    formik.setFieldValue("address", userAddress?.address || "");
    formik.setFieldValue("country", userAddress?.country || "");
    formik.setFieldValue("state", userAddress?.state || "");
    formik.setFieldValue("city", userAddress?.city || "");
    formik.setFieldValue("zip", userAddress?.zipCode || "");
  };

  return (
    <>
      <Form className="shipping-form mt-4" onSubmit={formik.handleSubmit}>
        <Row>
          {isLoadAddress ? (
            <ButtonLoader />
          ) : addressList?.data?.addresses?.length ? (
            <Col md={12}>
              <FormGroup>
                <Label>Select Address</Label>
                <Input
                  onChange={myId ? null : handlePrefillAddress}
                  type="select"
                  disabled={!!myId}
                  value={address}
                >
                  <option value={""}>Select saved address</option>
                  {addressList?.data?.addresses?.length &&
                    addressList?.data?.addresses?.map((each) => {
                      return (
                        <option value={each?._id}>
                          {each?.name} ({each?.address},{each?.country},
                          {each?.state},{each?.city})
                        </option>
                      );
                    })}
                </Input>
              </FormGroup>
            </Col>
          ) : (
            <NavLink to={"/personalinfo"}>Add Address </NavLink>
          )}
          {!isLoadAddress && addressList?.data?.addresses?.length > 0 ? (
            <>
              <Col md={6}>
                <FormGroup>
                  <Label> Name</Label>
                  <Input
                    placeholder="Enter last name"
                    name="name"
                    value={formik.values.name}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    disabled={true}
                    type="text"
                  />
                </FormGroup>
                {formik.touched.name && formik.errors.name && (
                  <p className="text-danger">{formik.errors.name}</p>
                )}
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Email Address</Label>
                  <Input
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter email address"
                    name="email"
                    disabled={true}
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
                    value={formik.values.phone}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}

                    placeholder="Enter phone number"
                    name="phone"
                    type="tel"
                    disabled={true}
                  />
                </FormGroup>
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-danger">{formik.errors.phone}</p>
                )}
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Country</Label>
                  <Input
                    value={formik.values.country}
                    // onChange={handleCountry}
                    disabled={true}
                    name="country"
                    type="select"
                  >
                    <option value={""}>Choose country</option>
                    {countryList.map((each) => {
                      return <option value={each?.name}>{each?.name}</option>;
                    })}
                  </Input>
                </FormGroup>
                {formik.touched.country && formik.errors.country && (
                  <p className="text-danger">{formik.errors.country}</p>
                )}
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label>Address</Label>
                  <Input
                    value={formik.values.address}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    name="address"
                    disabled={true}
                    placeholder="Enter your full address"
                    type="text"
                  />
                </FormGroup>
                {formik.touched.address && formik.errors.address && (
                  <p className="text-danger">{formik.errors.address}</p>
                )}
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>State</Label>
                  <Input
                    value={formik.values.state}
                    // onChange={handleState}
                    name="state"
                    disabled={true || !!!formik.values.country}
                    placeholder="Enter state"
                    type="select"
                  >
                    <option value={""}>Choose State</option>
                    {stateList.map((each) => {
                      return <option value={each?.name}>{each?.name}</option>;
                    })}
                  </Input>
                </FormGroup>
                {formik.touched.state && formik.errors.state && (
                  <p className="text-danger">{formik.errors.state}</p>
                )}
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>City</Label>
                  <Input
                    value={formik.values.city}
                    // onChange={handleCity}
                    name="city"
                    disabled={true || !!!formik.values.state}
                    placeholder="Enter city"
                    type="select"
                  >
                    <option value={""}>Choose City</option>
                    {cityList.map((each) => {
                      return <option value={each?.name}>{each?.name}</option>;
                    })}
                  </Input>
                </FormGroup>
                {formik.touched.city && formik.errors.city && (
                  <p className="text-danger">{formik.errors.city}</p>
                )}
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Zip Code</Label>
                  <Input
                    value={formik.values.zip}
                    // onChange={handleZipCode}
                    name="zip"
                    disabled={true || !!!formik.values.city}
                    placeholder="Enter ZIP code"
                    type="text"
                  />
                </FormGroup>
                {formik.touched.zip && formik.errors.zip && (
                  <p className="text-danger">{formik.errors.zip}</p>
                )}
              </Col>
            </>
          ) : null}
        </Row>

        {(userType !== config.userType) &&
          (!isLoadAddress &&
            addressList?.data?.addresses?.length > 0) ? (
          <PaymentGateways formik={formik} />
        ) : null}

        {userType && !isLoadAddress && addressList?.data?.addresses?.length > 0 ? (
          <Button disabled={orderCreateMutate?.isLoading} className="btn btn-dark w-50 mt-4">
            {orderCreateMutate?.isLoading ? (
              <ButtonLoader />
            ) : userType === config.userType ? (
              "Request Order For Approval"
            ) : myId ? (
              "Review Order and Complete Payment"
            ) : (
              "Place Order"
            )}
          </Button>
        ) : null}
      </Form>
    </>
  );
};

export default CheckoutForm;
