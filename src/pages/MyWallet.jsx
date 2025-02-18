import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import { Col, Container, Row } from 'reactstrap'
import coin from "../assets/coin.png"
import coin2 from "../assets/coin2.png"
import ProfileMenuSidebar from '../layout/ProfileMenuSidebar'
import { useQuery } from '@tanstack/react-query'
import UserServices from '../services/UserServices'
import Swal from 'sweetalert2'
import WalletOrderList from '../components/profile/WalletOrderList'
import Loader from '../utils/Loader/Loader'
import NoDataFound from '../utils/NoDataFound'

const MyWallet = () => {

    const { data: walletOrderList, isLoading: isWalletOrderLoad } = useQuery(['wallet-balance'],
        () => {

            let queryParams = [];

            // queryParams.push(`status=${config.orderStatus[1]}`);
            // let finalParams = queryParams.length ? `?${queryParams.join("&")}` : "";
            return UserServices.myWallet()
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



// console.log(walletOrderList,isWalletOrderLoad)

    return (
        <>

            <Header />

            <section className='main-wrap'>
                <Container>
                    <h2 className='page-title'>My Wallet</h2>

                    {isWalletOrderLoad ? <Loader /> : <Row className="mt-5">
                        <Col lg={2} md={3}>
                            <ProfileMenuSidebar />
                        </Col>

                        <Col lg={10} md={9}>
                            <div className='total-point-bx'>
                                <h3>Total Collect Point</h3>
                                <h3><img src={coin} alt='' /> {walletOrderList?.balance || 0} <span>(${(walletOrderList?.balance || 0)* 0.1} Cash)</span></h3>
                            </div>

                          
                            {
                                walletOrderList?.statements?.length==0?<NoDataFound msg="No Statement Found"/>:walletOrderList?.statements?.map((each)=>{
                                    return   <WalletOrderList statement={each} />
                                })
                            }

                          
                            {/* <div className='order-bx'>
                                <div>
                                    <h3>Order ID: #PWUSA98745</h3>
                                    <h4>Order Date: 12 Oct, 2024</h4>
                                </div>
                                <h3><img src={coin2} alt='' /> 60</h3>
                            </div>
                            <div className='order-bx'>
                                <div>
                                    <h3>Order ID: #PWUSA32564</h3>
                                    <h4>Order Date: 08 Aug, 2024</h4>
                                </div>
                                <h3><img src={coin2} alt='' /> 65</h3>
                            </div>
                            <div className='order-bx'>
                                <div>
                                    <h3>Order ID: #PWUSA26543</h3>
                                    <h4>Order Date: 25 Dec, 2024</h4>
                                </div>
                                <h3><img src={coin2} alt='' /> 55</h3>
                            </div> */}
                        </Col>
                    </Row>}
                </Container>
            </section>

            <Footer />

        </>
    )
}

export default MyWallet