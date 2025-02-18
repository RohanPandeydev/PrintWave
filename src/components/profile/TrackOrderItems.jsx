import moment from 'moment'
import React from 'react'

const TrackOrderItems = ({ orderDetails }) => {
    const order = orderDetails?.orderDetails?.[0];

    const address = [
        order?.address,
        order?.city,
        order?.state,
        order?.country,
        order?.zipCode
    ].filter(Boolean).join(", ");
    return (
        <>
            <div className='track-order-bx'>
                <h3>Order ID: #{orderDetails?.orderId || "N/A"}</h3>
                <p>Order Placed: <span>{moment(orderDetails?.created_at).format("ll")}</span></p>

                <div className='customer-info mt-3'>
                    <h4>{orderDetails?.orderDetails[0]?.name || "N/A"}</h4>
                    <p> {orderDetails?.orderDetails[0]?.phoneNumber || "N/A"}</p>
                </div>
                <div className='address-info mt-3'>
                    <h4>Address</h4>
                    <p>{address}</p>
                </div>
                {/* <div className='track-info mt-3'>
                    <h4>Expected Delivery On {moment(orderDetails?.updated_at).format("ll")}</h4>
                    <ul>
                        <li className='done'>
                            <h5>Order <span>{moment(orderDetails?.updated_at).format("lll")}</span></h5>
                        </li>
                        <li className='done'>
                            <h5>Shipped <span>10:12, 27 Dec, 2024</span></h5>
                        </li>
                        <li>
                            <h5>Delivered <span>Estimated delivery by 30 Dec, 2024</span></h5>
                        </li>
                    </ul>
                </div> */}
            </div>

        </>
    )
}

export default TrackOrderItems