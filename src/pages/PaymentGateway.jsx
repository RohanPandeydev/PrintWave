import React, { useEffect, useState } from "react";
import PaymentGateways from "../components/checkout/PaymentGateways";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import CartServices from "../services/CartServices";
import Swal from "sweetalert2";
import config from "../../config";
import ButtonLoader from "../utils/Loader/ButtonLoader";
import useConfirmOnReload from "../utils/UseConfirmedReload";

const PaymentGateway = () => {
    const { id } = useParams();
    const [myId, setMyId] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const method = location?.state?.method||false;
    const amount = location?.state?.amount||false;

    const orderPaymentMutate = useMutation(
        (data) => CartServices.orderPaymentUpdate(data),
        {
            onSuccess: async (data) => {
                console.log(data, "123456 Payment Payment ");
                data?.data?.payment?.order &&
                    orderPaymentResponse.mutate({
                        id: data?.data?.payment?.order,
                        status: config.paymentStatus[1],
                    });
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
                orderPaymentResponse.mutate({
                    id: myId,
                    status: config.paymentStatus[2],
                });
            },
        }
    );
    const orderPaymentResponse = useMutation(
        (data) => CartServices.orderPaymentGatewayResponseUpdate(data),
        {
            onSuccess: async (data, requestData) => {
                console.log(data?.data, "============");
                // Reset form and set user data
                // Show success notification
                let msg =
                    requestData?.status == config.paymentStatus[1]
                        ? "Payment Done Successfull"
                        : "Payment Failed you money will be refund in 3-5 working days";

                Swal.fire({
                    title:
                        requestData?.status == config.paymentStatus[1]
                            ? "Successful"
                            : "Error",
                    text: msg,
                    icon:
                        requestData?.status == config.paymentStatus[1]
                            ? "success"
                            : "error",
                });

                // console.log(data, "123456 Payment Response")
                data?.data?.payment?.order &&
                    navigate("/order/details/" + btoa(data?.data?.payment?.order));
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
                navigate(-1);
            },
        }
    );

    const handlePay = () => {
        const sendData = {
            id: myId,
            method: method,
        };
        orderPaymentMutate?.mutate(sendData);
    };
    useEffect(() => {
        try {
            const decodeId = id && atob(id);
            console.log("decodeId", !!id, id);

            id && setMyId(() => decodeId || "");
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Something went wrong",
                icon: "error",
            });
            navigate(-1);

            // console.error("Error decoding user ID:", error.message);
            // Handle the error gracefully, e.g., display an error message to the user
        }
    }, [id]);

    useEffect(() => {
        if (!amount || !method) {
            Swal.fire({
                title: "Error",
                text: "Something went wrong ! please try again later",
                icon: "error",
            });
            navigate(-1);
        }
    }, [method, amount]);


    useConfirmOnReload();


    return (
        <>
            <Row className="mt-3">
                <Col md={12}>
                    <FormGroup>
                        <Label>Card Number</Label>
                        <Input placeholder="Enter your full address" type="text" />
                    </FormGroup>
                </Col>
                <Col md={8}>
                    <FormGroup>
                        <Label>Expiration Date</Label>
                        <Row>
                            <Col md={6}>
                                <Input type="select">
                                    <option>Month</option>
                                    <option>Jan</option>
                                    <option>Feb</option>
                                    <option>Mar</option>
                                    <option>Apr</option>
                                    <option>May</option>
                                    <option>Jun</option>
                                    <option>Jul</option>
                                    <option>Aug</option>
                                    <option>Sep</option>
                                    <option>Oct</option>
                                    <option>Nov</option>
                                    <option>Dec</option>
                                </Input>
                            </Col>
                            <Col md={6}>
                                <Input type="select">
                                    <option>Year</option>
                                    <option>2010</option>
                                    <option>2011</option>
                                    <option>2012</option>
                                    <option>2013</option>
                                    <option>2014</option>
                                    <option>2015</option>
                                    <option>2016</option>
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                    <option>2020</option>
                                    <option>2021</option>
                                </Input>
                            </Col>
                        </Row>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label>Security Code</Label>
                        <Input placeholder="Security Code" type="text" />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <Button
                        type="click"
                        disabled={
                            orderPaymentMutate?.isLoading || orderPaymentResponse?.isLoading
                        }
                        className="btn btn-warning"
                        onClick={handlePay}
                    >
                        {" "}
                        {orderPaymentMutate?.isLoading ||
                            orderPaymentResponse?.isLoading ? (
                            <ButtonLoader />
                        ) : (
                            `${amount} Pay`
                        )}
                    </Button>
                </Col>
            </Row>
            {/* <p>If you try to reload the page, it will ask for confirmation.</p> */}

        </>
    );
};

export default PaymentGateway;
