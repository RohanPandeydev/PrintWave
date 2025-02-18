import React, { useState } from "react";
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
import FormatAmount from "../../utils/FormatAmount";
import coin from "../../assets/coin.png";
import coin2 from "../../assets/coin2.png";
import { FaCheck } from "react-icons/fa";
import CouponSection from "../../utils/CouponSection";
const ListCartItem = ({
    cartList,
    shippingCost,
    subTotalPrice,
    salesTax,
    totalPrice,
    collectpoints,
    setCouponCode,
    handleCouponSubmit,
    applyCouponCodeMutate,
    couponCode,
    isCheckout,
    discountAmount
}) => {

    const [isCouponOpen, setIsCouponOpen] = useState(false);
    // console.log(applyCouponCodeMutate,"applyCouponCodeMutate")

    const handleCouponToggle = () => {
        setIsCouponOpen(!isCouponOpen);
        if (!isCouponOpen) {
            setCouponCode("")
        }

    }

    const handleCouponValueChange = (e) => {

        setCouponCode(e?.target?.value)
    }




    return (
        <div>
            <div className="summery-bx mt-3">
                {cartList?.length > 0 ?
                    cartList?.map((each) => {
                        return (
                            <div className="summery-dtls-bx">
                                <div>
                                    <h4>{each?.product?.productName || ""}</h4>
                                    <p>{each?.product?.description}</p>
                                    <h4>{each?.quantity}</h4>
                                </div>
                                <div>
                                    <h5 className="price">
                                        ${FormatAmount(each?.product?.price * each?.quantity)}
                                    </h5>
                                    {/* {point && <h4 className="coin mt-4">
                                        <img src={coin2} alt="" /> {each?.collectPoint || 0}
                                    </h4>} */}
                                </div>
                            </div>
                        );
                    }) : null}

                {/* <div className='summery-dtls-bx'>
                    <div>
                        <h4>Standard Postcards</h4>
                        <p>4" X 6" | 14 Pt. Cardstock Gloss</p>
                        <h4>1000</h4>
                    </div>
                    <h5 className="price">$88.70</h5>
                </div>
                <div className='summery-dtls-bx'>
                    <div>
                        <h4>Standard Postcards</h4>
                        <p>4" X 6" | 14 Pt. Cardstock Gloss</p>
                        <h4>1000</h4>
                    </div>
                    <h5 className="price">$88.70</h5>
                </div> */}
                {collectpoints && <div className="point-heading">
                    <h3>Collect Point</h3>
                    <h4 className="coin">
                        <img src={coin} alt="" /> {collectpoints || 0}

                    </h4>
                </div>}
            </div>
            {/*######################## Apply Coupo Section ##############*/}
            {isCheckout ? <CouponSection couponCode={couponCode} applyCouponCodeMutate={applyCouponCodeMutate} isCouponOpen={isCouponOpen} handleCouponToggle={handleCouponToggle} handleCouponSubmit={handleCouponSubmit} handleCouponValueChange={handleCouponValueChange} /> : null}


            <ul className="order-lst mt-4">
                <li>
                    <h4>SUBTOTAL</h4>
                    <h4>${FormatAmount(subTotalPrice)}</h4>
                </li>
                {(!applyCouponCodeMutate?.isLoading && applyCouponCodeMutate?.status == "success") ? <li>
                    <p>Discount</p>
                    <p>
                        <strong>${FormatAmount(applyCouponCodeMutate?.data?.data?.coupon?.discountApplied || 0)}</strong>
                    </p>
                </li> : null}
                {!isCheckout ? <li>
                    <p>Discount</p>
                    <p>
                        <strong>${FormatAmount(discountAmount || 0)}</strong>
                    </p>
                </li> : null}
                <li>
                    <p>Shipping</p>
                    <p>
                        <strong>${FormatAmount(shippingCost)}</strong>(Optional )
                    </p>
                </li>
                <li>
                    <p>Sales Tax</p>
                    <p>
                        <strong>${FormatAmount(salesTax)}</strong> (Optional )
                    </p>
                </li>
                <li>
                    <h4>TOTAL</h4>
                    {isCheckout ? <h4>${FormatAmount(subTotalPrice - (applyCouponCodeMutate?.data?.data?.coupon?.discountApplied || 0))}</h4> : <h4>${FormatAmount(subTotalPrice - discountAmount || 0)}</h4>
                    }
                </li>
            </ul>
        </div>
    );
};

export default ListCartItem;
