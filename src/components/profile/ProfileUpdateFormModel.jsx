import { useFormik } from 'formik'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
import countryList from '../../utils/JSON/CountryList'
import client from "../../assets/client.png"
import { ProfileUpdateAddressFormValidation, ProfileUpdateFormValidation } from '../../helper/ValidationHelper/Validation'
import UserServices from '../../services/UserServices'
import { useMutation } from '@tanstack/react-query'
import Swal from 'sweetalert2'
import validateFileImage from '../../utils/ValidateFileImage'
import ButtonLoader from '../../utils/Loader/ButtonLoader'
import Loader from '../../utils/Loader/Loader'
const ProfileUpdateFormModel = ({ modal, handleModalToggle, handleCloseModal, phase, userData, addressList, isLoadAddress }) => {
    const allowedExtensionsImage = [".jpg", ".jpeg", ".png", ".gif"];

    const [img, setImg] = useState(false)
    const [err, setError] = useState("");
    const [showImg, setShowImg] = useState(false);
    const fileRef = useRef(null);

    const handleImage = (e) => {
        if (e?.target?.files?.length == 0) return;
        const isFileValid = validateFileImage(e?.target?.files[0], 2, allowedExtensionsImage);
        // console.log("validateFile", isFileValid);
        if (!isFileValid?.isValid) {
            setError(isFileValid?.errorMessage);
            return;
        }
        setImg(e?.target?.files[0]);
        setShowImg(URL.createObjectURL(e?.target?.files[0]));
    };






    const initialValues = {
        fname: '',
        lname: '',
        email: '',
        phone: '',
        country: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        addressphone: "",
        addressname: "",
    }
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: phase == "address" ? ProfileUpdateAddressFormValidation : ProfileUpdateFormValidation,
        onSubmit: (values, action) => {
            handleSubmit(values)
        }
    })


    const handleSubmit = (data) => {

        const sendData = {
            id: userData?._id,
            firstName: data?.fname,
            lastName: data?.lname,
            email: data?.email,
            phone: data?.phone,



        }


        if (phase == "address") {
            const address = {
                address: data?.address,
                country: data?.country,
                state: data?.state,
                city: data?.city,
                zipCode: data?.zip,
                phoneNumber: data?.addressphone,
                name: data?.addressname

            }
            // console.log(address, "address")
            userAddressCreate?.mutate(address)
            return
        }
        else if (phase == "credential") {

            userProfileUpdate?.mutate(sendData)
            return
        }
        else if (phase == "profileimage") {

            const formData = new FormData()
            if (err) {
                return
            }
            formData.append('profileImage', img)
            formData.append('id', userData?._id)
            userProfileUpdate?.mutate(formData)
        }
    }

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
        const zip_code = cityList.find((each) => each?.name === e.target.value)?.zip_code || "";
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
    const userProfileUpdate = useMutation((data) => UserServices.updateData(data), {
        onSuccess: async (data) => {

            console.log(data?.data, "============")
            // Reset form and set user data  
            // Show success notification
            Swal.fire({
                title: "Successful",
                text: "User Update Successfull",
                icon: "success",
            });
            handleCloseModal()






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
    });
    const userAddressCreate = useMutation((data) => UserServices.createUserAddress(data), {
        onSuccess: async (data) => {

            console.log(data?.data, "============")
            // Reset form and set user data  
            // Show success notification
            Swal.fire({
                title: "Successful",
                text: "User Address Create Successfull",
                icon: "success",
            });
            handleCloseModal()






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
    });



    useEffect(() => {
        if (userData?._id) {
            formik.setFieldValue('fname', userData?.firstName);
            formik.setFieldValue('lname', userData?.lastName);
            formik.setFieldValue("email", userData?.email);
            formik.setFieldValue("phone", userData?.phoneNumber);
            // formik.setFieldValue('country', userData?.country)
            // formik.setFieldValue('address', userData?.address)
            // formik.setFieldValue("city", userData?.city);
            // formik.setFieldValue("state", userData?.state);
            // formik.setFieldValue("zip", userData?.zip);


        }
    }, [userData])




    // console.log(addressList,"addressList")

    return (
        <>
            <Modal
                isOpen={modal}
                fade={false}
                toggle={handleModalToggle}
                centered={true}
                className="login-modal"
            >
                <ModalHeader toggle={handleCloseModal}></ModalHeader>
                <ModalBody>

                    <>
                        <h3 className="modal-title">Profile Update Form</h3>

                        <Form className="mt-4" onSubmit={formik.handleSubmit} >
                            <Row>
                                {phase == "profileimage" && <Col md={6}>
                                    <FormGroup>
                                        <Label>Image</Label>
                                        <Input
                                            placeholder="Enter first name"
                                            type="file"
                                            ref={fileRef}
                                            accept={allowedExtensionsImage}
                                            onChange={handleImage}
                                        />
                                        <img
                                            src={showImg || client}
                                            className="img-fluid"
                                            height={100}
                                            width={100}
                                        />
                                        {err && <p className="text-danger">{err}</p>}
                                    </FormGroup>

                                </Col>}
                                {phase == "credential" && <>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>First Name</Label>
                                            <Input
                                                placeholder="Enter first name"
                                                name="fname"
                                                value={formik.values.fname}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                type="text"
                                            />
                                        </FormGroup>
                                        {formik.touched.fname && formik.errors.fname && (
                                            <p className="text-danger">{formik.errors.fname}</p>
                                        )}
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>Last Name</Label>
                                            <Input
                                                placeholder="Enter last name"
                                                name="lname"
                                                value={formik.values.lname}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                type="text"
                                            />
                                        </FormGroup>
                                        {formik.touched.lname && formik.errors.lname && (
                                            <p className="text-danger">{formik.errors.lname}</p>
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
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                placeholder="Enter phone number"
                                                name="phone"
                                                type="tel"
                                            />
                                        </FormGroup>
                                        {formik.touched.phone && formik.errors.phone && (
                                            <p className="text-danger">{formik.errors.phone}</p>
                                        )}
                                    </Col>
                                </>}
                                {(phase == "address" && !isLoadAddress) && <>
                                    {
                                        <>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label> Name</Label>
                                                    <Input
                                                        placeholder="Enter  name"
                                                        name="addressname"
                                                        value={formik.values.addressname}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        type="text"
                                                    />
                                                </FormGroup>
                                                {formik.touched.addressname && formik.errors.addressname && (
                                                    <p className="text-danger">{formik.errors.addressname}</p>
                                                )}
                                            </Col>

                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Phone Number</Label>
                                                    <Input
                                                        value={formik.values.addressphone}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter phone number"
                                                        name="addressphone"
                                                        type="tel"
                                                    />
                                                </FormGroup>
                                                {formik.touched.addressphone && formik.errors.addressphone && (
                                                    <p className="text-danger">{formik.errors.addressphone}</p>
                                                )}
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Country</Label>
                                                    <Input
                                                        value={formik.values.country}
                                                        onChange={handleCountry}
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
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        name="address"
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
                                                        onChange={handleState}
                                                        name="state"
                                                        disabled={!!!formik.values.country}
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
                                                        onChange={handleCity}
                                                        name="city"
                                                        disabled={!!!formik.values.state}
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
                                                        onChange={handleZipCode}
                                                        name="zip"
                                                        disabled={!!!formik.values.city}
                                                        placeholder="Enter ZIP code"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                                {formik.touched.zip && formik.errors.zip && (
                                                    <p className="text-danger">{formik.errors.zip}</p>
                                                )}
                                            </Col>

                                        </>
                                    }


                                </>}
                            </Row>

                            <Button className="btn btn-success w-100 mb-3" type='submit' disabled={userAddressCreate?.isLoading || userProfileUpdate?.isLoading} >{userProfileUpdate?.isLoading || userProfileUpdate?.isLoading ? <ButtonLoader /> : "Save"}</Button>


                        </Form>
                    </>

                </ModalBody>
            </Modal>
        </>
    )
}

export default ProfileUpdateFormModel