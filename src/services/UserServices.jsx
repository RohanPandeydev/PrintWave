
import axios from "axios"
import config from "../../config"
import HttpHeaders from '../helper/httphelper/HttpHeaders'


const UserServices = {}


UserServices.employeedList = (data) => {
    return axios.get(`${config.apiUrl}/api/users/${data}`, HttpHeaders.getAuthHeader())
}
UserServices.getMe = (data) => {
    return axios.get(`${config.apiUrl}/api/users/${data?.id}`, HttpHeaders.getAuthHeader())
}
UserServices.updateData = (data) => {
    return axios.put(`${config.apiUrl}/api/users/${data?.id || data?.get("id")}`, data, HttpHeaders.getAuthHeader())
}
UserServices.getAddressById = (data) => {
    return axios.get(`${config.apiUrl}/api/users/${data?.id}`, HttpHeaders.getAuthHeader())
}

UserServices.getUserAddress = (data) => {
    return axios.get(`${config.apiUrl}/api/address`, HttpHeaders.getAuthHeader())
}

UserServices.updateUserAddress = (data) => {
    return axios.put(`${config.apiUrl}/api/address/${data?.id}`, data, HttpHeaders.getAuthHeader())
}
UserServices.createUserAddress = (data) => {
    return axios.post(`${config.apiUrl}/api/address`, data, HttpHeaders.getAuthHeader())
}

UserServices.orderList = (data) => {
    if (data!=false) {

        return axios.get(`${config.apiUrl}/api/order/${data}`, HttpHeaders.getAuthHeader())
    }
    return axios.get(`${config.apiUrl}/api/order`, HttpHeaders.getAuthHeader())
}
UserServices.orderDetails = (data) => {
    return axios.get(`${config.apiUrl}/api/orders/${data?.id}`, HttpHeaders.getAuthHeader())
}
UserServices.myWallet = (data) => {
    return axios.get(`${config.apiUrl}/api/wallet`, HttpHeaders.getAuthHeader())
}







export default UserServices;