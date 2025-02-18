import axios from "axios";
import config from "../../config";
import HttpHeaders from "../helper/httphelper/HttpHeaders";

const BannerServices = {}

BannerServices.getBanners = () => {
    return axios.get(`${config.apiUrl}/api/banner/get`, HttpHeaders.getAuthHeader());
}

export default BannerServices;