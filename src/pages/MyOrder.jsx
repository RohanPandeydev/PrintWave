import React from 'react'
import Footer from '../layout/Footer'
import { Col, Container, Row } from 'reactstrap'
import OrderList from '../components/profile/OrderList'
import Header from '../layout/Header'
import UserServices from '../services/UserServices'
import { useQuery } from '@tanstack/react-query'
import Swal from 'sweetalert2'
import Loader from '../utils/Loader/Loader'
import NoDataFound from '../utils/NoDataFound'
import ProfileMenuSidebar from '../layout/ProfileMenuSidebar'
import config from '../../config'

const MyOrder = () => {
    const { data: orderList, isLoading: isOrderListLoad } = useQuery(['order-list'],
        () => {

            let queryParams = [];

            // queryParams.push(`status=${config.orderStatus[1]}`);
            let finalParams = queryParams.length ? `?${queryParams.join("&")}` : "";
            return UserServices.orderList(finalParams)
        }, {

        select: (data) => {


            return data?.data
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




    

    // console.log(orderList, "orderList")

    return (
        <>
            <Header />
            <section className='main-wrap'>
                <Container>
                    <h2 className='page-title'>My Orders</h2>
                    <Row className="mt-5">
                        <Col lg={2} md={3}>
                            <ProfileMenuSidebar />
                        </Col>
                        <Col lg={10} md={9}>
                            {isOrderListLoad ? <Loader /> : orderList?.orders?.length == 0 ? <NoDataFound msg={"No Data Found"} /> : <OrderList orderList={orderList?.orders} />}
                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer />
        </>
    )
}

export default MyOrder