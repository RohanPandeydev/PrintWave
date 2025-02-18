import axios from "axios"
import config from "../../config";
import HttpHeaders from "../helper/httphelper/HttpHeaders";

const CategoryServices = {};

CategoryServices.getCategoryList = (type) => {
    return axios.get(`${config.apiUrl}/api/category/get`, HttpHeaders.getAuthHeader());
};

export default CategoryServices;