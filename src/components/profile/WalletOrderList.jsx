import React from 'react'
import coin2 from "../../assets/coin2.png"
import moment from 'moment/moment'
import { Link } from 'react-router-dom'

const WalletOrderList = ({ statement }) => {
    return (
        <>
            <div className='order-bx'>
                <div>
                    <Link to={"/order/details/"+btoa(statement?.order?._id)}><h3>Order ID: #{statement?.order?.orderId || "N/A"}</h3></Link>
                    <h4>Order Date: {statement?.createdAt && moment(statement?.createdAt).format("ll")}</h4>
                </div>
                <h3> {statement?.coins || 0} <img src={coin2} alt='' /> (   {statement?.status || "N/A"}) </h3>
            </div>
        </>
    )
}

export default WalletOrderList