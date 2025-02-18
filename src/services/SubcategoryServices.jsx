import axios from "axios";
import config from "../../config";
import HttpHeaders from "../helper/httphelper/HttpHeaders";


const SubcategoryServices = {};

SubcategoryServices.getSubcategoryListByCategory = (cateId) => {
    return axios.get(`${config.apiUrl}/api/subcategory/get/${cateId}`, HttpHeaders.getAuthHeader());
};

SubcategoryServices.getSubcategoryList = () => {
    return axios.get(`${config.apiUrl}/api/subcategory/get`, HttpHeaders.getAuthHeader());
};

export default SubcategoryServices;