import React, { useEffect, useMemo, useState } from 'react'
import Header from '../layout/Header'
import { Col, Container, Row } from 'reactstrap'
import Footer from '../layout/Footer'
import TrackOrderItems from '../components/profile/TrackOrderItems'
import ListCartItem from '../components/checkout/ListCartItem'
import { useNavigate, useParams } from 'react-router-dom'
import UserServices from '../services/UserServices'
import { useQuery } from '@tanstack/react-query'
import Swal from 'sweetalert2'
import ButtonLoader from '../utils/Loader/ButtonLoader'
import config from '../../config'
import ProfileMenuSidebar from '../layout/ProfileMenuSidebar'

const OrderDetails = () => {
    const { id } = useParams()
    const [myId, setMyId] = useState(false)
    const navigate = useNavigate()



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
            navigate(-1)

            // console.error("Error decoding user ID:", error.message);
            // Handle the error gracefully, e.g., display an error message to the user
        }
    }, [id]);

    const { data: orderDetails, isLoading: isOrderDetailsLoad } = useQuery(['order-details', myId],
        () => {


            return UserServices.orderDetails({ id: myId })
        }, {
        enabled: !!myId,
        select: (data) => {


            return data?.data?.order

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
    )


    function calculatePercentage(percent, total) {
        return (percent / 100) * total;
    }






    const salesTax = useMemo(() => {
        if (!orderDetails?.totalAmount || isOrderDetailsLoad) return
        const salesTax = calculatePercentage(config.cartSalesTaxPercentage, orderDetails?.totalAmount)
        return salesTax

    }, [isOrderDetailsLoad]);




    const subTotalPrice = useMemo(() => {
        if (!orderDetails?.subtotalAmount || !salesTax || isOrderDetailsLoad) return 0

        console.log(salesTax, "salesTax")

        const subTotal = orderDetails?.subtotalAmount




        return subTotal
    }, [salesTax, isOrderDetailsLoad])

    // console.log(orderDetails, isOrderDetailsLoad)

    return (
        <>
            <Header />
            <section className='main-wrap'>
                <Container>
                    <h2 className='page-title'>Order Details</h2>
                    <Row className="mt-5">
                        <Col lg={2} md={3}>
                            <ProfileMenuSidebar />
                        </Col>
                        <Col lg={6} md={5}>
                            <TrackOrderItems orderDetails={orderDetails} />
                        </Col>
                        <Col md={4}>
                            {isOrderDetailsLoad ? <ButtonLoader /> : orderDetails && <ListCartItem cartList={orderDetails?.orderItems || []} discountAmount={orderDetails?.discountAmount} shippingCost={config.cartShippingCost} subTotalPrice={subTotalPrice} salesTax={salesTax} totalPrice={(subTotalPrice + salesTax + config.cartShippingCost) || 0} collectpoints={orderDetails?.collectPoint} point={33} />}
                            

                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer />
        </>
    )
}

export default OrderDetails