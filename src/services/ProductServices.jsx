import axios from "axios"
import HttpHeaders from "../helper/httphelper/HttpHeaders";
import config from "../../config";

const ProductServices = {}

ProductServices.getTrendingProducts = () => {
    return axios.get(`${config.apiUrl}/api/product/trending/get`, HttpHeaders.getAuthHeader());
}
ProductServices.getProductBySubcategory = (id) => {
    return axios.get(`${config.apiUrl}/api/product/subcategory/get/${id}`, HttpHeaders.getAuthHeader());
}

export default ProductServices