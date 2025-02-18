import axios from "axios";
import config from "../../config";
import HttpHeaders from "../helper/httphelper/HttpHeaders";


const CartServices = {};

CartServices.createCart = (data) => {
    return axios.post(`${config.apiUrl}/api/carts`, data, HttpHeaders.getAuthHeader());
};

CartServices.updateCart = (data) => {
    return axios.put(`${config.apiUrl}/api/carts/${data?.id}`, data?.data, HttpHeaders.getAuthHeader());
};

CartServices.userCartList = () => {
    return axios.get(`${config.apiUrl}/api/carts`, HttpHeaders.getAuthHeader());
};
CartServices.userDeleteCartItem = (data) => {
    return axios.delete(`${config.apiUrl}/api/carts/${data?.id}`, HttpHeaders.getAuthHeader());
};


// Order Place 
CartServices.placeOrder = (data) => {
    return axios.post(`${config.apiUrl}/api/order`, data, HttpHeaders.getAuthHeader());
};
// Coupon Code 
CartServices.couponCodeApply = (data) => {
    return axios.post(`${config.apiUrl}/api/coupons/apply`, data, HttpHeaders.getAuthHeader());
};
CartServices.updateOrderStatus = (data) => {
    return axios.put(`${config.apiUrl}/api/orders/${data?.id}`, data, HttpHeaders.getAuthHeader())
}
// Payment Gateway
CartServices.orderPaymentUpdate = (data) => {
    return axios.put(`${config.apiUrl}/api/order/${data?.id}/payment`, data, HttpHeaders.getAuthHeader())
}
CartServices.orderPaymentGatewayResponseUpdate = (data) => {
    return axios.get(`${config.apiUrl}/api/order/${data?.id}/payment/${data?.status}`, HttpHeaders.getAuthHeader())
}


export default CartServices;