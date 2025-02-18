import React, { useEffect, useMemo, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import card from "../assets/card.png";
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
import CheckoutForm from "../components/checkout/CheckoutForm";
import ListCartItem from "../components/checkout/ListCartItem";
import customContext from "../contexts/Context";
import useCartContext from "../contexts/CartContext";
import config from "../../config";
import { useMutation, useQuery } from "@tanstack/react-query";
import AuthServices from "../services/AuthServices";
import Swal from "sweetalert2";
import CartServices from "../services/CartServices";
import Login from "./Login";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import StorageData from "../helper/storagehelper/StorageData";
import UserServices from "../services/UserServices";

const Checkout = () => {
    const { id } = useParams();
    const [couponCode, setCouponCode] = useState("")

    const { userData, token, userType } = customContext();
    const { cartList, setCartList } = useCartContext();
    const [orderList, setOrderList] = useState([]);
    const shippingCost = config.cartShippingCost;
    const [myId, setMyId] = useState(false);

    const salesTaxPercentage = config.cartSalesTaxPercentage;
    const navigate = useNavigate();

    const { data: orderDetails, isLoading: isOrderDetailsLoad } = useQuery(
        ["order-details-by-id", myId],
        () => {
            return UserServices.orderDetails({ id: myId });
        },
        {
            enabled: !!myId,
            onSuccess: (data) => {
                // console.log(data, "1233")
                if (!data?.data?.order?.orderItems?.length) {
                    navigate(-1);
                    return;
                }
                const myOrderList = data?.data?.order?.orderItems?.map((each) => {
                    return {
                        quantity: each?.quantity,
                        product: each?.product,
                    };
                });

                // console.log(myOrderList, "myOrderList")
                setOrderList(() => myOrderList);
                // return data?.data?.order;
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

    const handleSubmit = (data) => {
        const sendData = {
            name: `${data.name}`,
            city: data?.city,
            state: data?.state,
            country: data?.country,
            address: data?.address,
            zipCode: data?.zip,
            phoneNumber: data?.phone,
            method: data?.method,
            email: data?.email,
        };
        if (applyCouponCodeMutate?.status == "success" && userType !== config.userType) {
            sendData.couponCode = couponCode
        }

        // console.log(userType == config.userType,sendData,"userType == config.userType")
        if (userType == config.userType) {
            delete sendData.method;
        }
        if (myId) {

            navigate("/checkout/" + btoa(myId) + "/payment", {
                state: {
                    method: data?.method,
                    amount: applyCouponCodeMutate?.data?.data?.coupon?.finalAmount
                }
            })

            // orderPaymentMutate.mutate(sendData);

            return;
        }

        // console.log(sendData)
        orderCreateMutate.mutate(sendData);
    };

    const subTotalPrice = useMemo(() => {
        const initialValue = 0;
        const listToUse = orderList?.length ? orderList : cartList;

        return listToUse.reduce(
            (accumulator, currentValue) =>
                accumulator +
                parseFloat(
                    (parseFloat(currentValue?.product?.price) || 0) *
                    (parseFloat(currentValue?.quantity) || 0)
                ),
            initialValue
        );
    }, [cartList, orderList, isOrderDetailsLoad]);

    const salesTax = useMemo(() => {
        if (!subTotalPrice || !salesTaxPercentage) return 0; // Handle edge cases
        return (subTotalPrice * salesTaxPercentage) / 100;
    }, [subTotalPrice, salesTaxPercentage]);

    const totalPrice = useMemo(() => {
        return salesTax + subTotalPrice + shippingCost;
    }, [subTotalPrice, salesTax, shippingCost]);

    const orderCreateMutate = useMutation(
        (data) => CartServices.placeOrder(data),
        {
            onSuccess: async (responseData, requestData) => {
                console.log(responseData?.data, requestData, "============");
                // Reset form and set user data
                // Show success notification
                Swal.fire({
                    title: "Successful",
                    text: "Order Place Successfull",
                    icon: "success",
                });


                StorageData.setCartData([]);
                setCartList([]);
                if (userType == config.userType) {
                    responseData?.data?.order?._id &&
                        navigate("/order/details/" + btoa(responseData?.data?.order?._id));
                    return
                }
                else {
                    responseData?.data?.order?._id && navigate("/checkout/" + btoa(responseData?.data?.order?._id) + "/payment", {
                        state: {
                            method: requestData?.method,
                            amount: responseData?.data?.order?.totalAmount

                        }
                    })
                }

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


    const [modal, setModal] = useState(true);

    // useEffect(() => {
    //     if (cartList?.length == 0) {
    //         navigate(-1)
    //     }
    // }, [cartList])

    // console.log(cartList, "cartListcartList")


    const handleCouponSubmit = () => {
        console.log(couponCode)
        if (!couponCode) {
            return
        }

        applyCouponCodeMutate.mutate({
            couponCode: couponCode,
            orderAmount: subTotalPrice
        })





    }


    const applyCouponCodeMutate = useMutation(
        (data) => CartServices.couponCodeApply(data),
        {
            onSuccess: async (responseData, requestData) => {
                console.log(responseData?.data, requestData, "============");

                // Reset form and set user data
                // Show success notification
                // Swal.fire({
                //     title: "Successful",
                //     text: "Order Place Successfull",
                //     icon: "success",
                // });




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

    return (
        <>
            <Header />

            {!!!token ? (
                <Login state={"/checkout"} modal={modal} />
            ) : (
                <section className="main-wrap">
                    <Container>
                        <h2 className="page-title">Checkout</h2>

                        <hr className="pt-3 line" />

                        <Row>
                            <Col md={8}>
                                <h3 className="title1">Shipping Information</h3>

                                {userType ? (
                                    <CheckoutForm
                                        userType={userType}
                                        orderCreateMutate={orderCreateMutate}
                                        userData={userData}
                                        token={token}
                                        handleSubmit={handleSubmit}
                                        myId={myId}

                                    />
                                ) : null}
                            </Col>

                            <Col md={4}>
                                <h3 className="title1">Cart Summary</h3>
                                <ListCartItem
                                    couponCode={couponCode}
                                    setCouponCode={setCouponCode}
                                    handleCouponSubmit={handleCouponSubmit}
                                    cartList={
                                        !isOrderDetailsLoad && orderList?.length
                                            ? orderList
                                            : cartList
                                    }
                                    isCheckout={true}
                                    shippingCost={shippingCost}
                                    subTotalPrice={subTotalPrice}
                                    salesTax={salesTax}
                                    totalPrice={totalPrice}
                                    applyCouponCodeMutate={applyCouponCodeMutate}
                                />
                            </Col>
                        </Row>
                    </Container>
                </section>
            )}

            <Footer />
        </>
    );
};

export default Checkout;
