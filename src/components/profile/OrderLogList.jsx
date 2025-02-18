import React, { useState } from "react";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from "reactstrap";
import cart1 from "../../assets/cart1.jpg";
import coin2 from "../../assets/coin2.png";
import coin from "../../assets/coin.png";
import cart2 from "../../assets/cart2.jpg";
import cart3 from "../../assets/cart3.jpg";

import { CgTrack } from "react-icons/cg";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import FormatAmount from "../../utils/FormatAmount";

const OrderLogList = ({ orderList }) => {
    const [open, setOpen] = useState(""); // Single string to track the open item

    const toggle = (id) => {
        if (open === id) {
            setOpen("");
        } else {
            setOpen(id);
        }
    };

    const formatString = (string) => {
        return string
            .replace(/_/g, " ")
            .replace(/(\d{4})/g, "$1 ")
            .trim();
    };

    return (
        <>
            <Accordion open={open} toggle={toggle} className="order-accordion">
                {orderList?.map((each) => (
                    <AccordionItem key={each._id}>
                        <AccordionHeader targetId={each._id}>
                            <h3>
                                Order ID: <span>#{each?.orderId || "N/A"}</span>
                            </h3>
                            <h3>
                                Customer Name:{" "}
                                <span>{each?.orderDetails[0]?.name || "N/A"}</span>
                            </h3>
                            <div className="d-flex align-items-center justify-content-end">
                                <h4 className="me-3">
                                    Order Placed:{" "}
                                    <span>{moment(each?.created_at).format("ll")}</span>
                                </h4>
                                <Link
                                    to={"/order/details/" + btoa(each?._id)}
                                    className="btn btn-success"
                                >
                                    <CgTrack /> TRACK ORDER
                                </Link>
                            </div>
                        </AccordionHeader>
                        <AccordionBody accordionId={each._id}>
                            <div className="p-4">
                                {each?.orderItems?.length &&
                                    each?.orderItems?.map((item, index) => {
                                        const productImage =
                                            (item?.product?.productImages?.length &&
                                                item?.product?.productImages[0]) ||
                                            cart1;

                                        return (
                                            <div className="order-summery-bx mt-4" key={index}>
                                                <div className="cart-pro-dtls">
                                                    <div className="cart-pro-img">
                                                        <img src={productImage} alt="" />
                                                    </div>
                                                    <div className="cart-pro-info">
                                                        <h4>{item.name}</h4>
                                                        <p>{item.product?.description}</p>
                                                        <p>
                                                            <span className="quantity">
                                                                {item?.quantity} PS
                                                            </span>
                                                            <span className="price">
                                                                ${FormatAmount(item?.price || 0)}
                                                            </span>
                                                            <span className="coin">
                                                                <img src={coin2} alt="" /> {item.points}
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="status-bx">
                                                    <label>Status</label>
                                                    <p>{each?.status}</p>
                                                </div>
                                                <div className="status-bx">
                                                    <label>Delivery Expected By</label>
                                                    <p>{moment(each?.updated_at).format("lll")}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>

                            <div className="order-footer">
                                <div className="collect-point-bx">
                                    {/* <h4>Collect Point</h4>
                                    <h4>
                                        <img src={coin} alt="" /> 55
                                    </h4> */}
                                </div>
                                <div className="total-price-bx">
                                    <p>
                                        Paid using{" "}
                                        {each?.payment[0]?.method &&
                                            formatString(each?.payment[0]?.method)}{" "}
                                    </p>
                                    <h4>${FormatAmount(each?.totalAmount || 0)}</h4>
                                </div>
                            </div>
                        </AccordionBody>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};

export default OrderLogList;


