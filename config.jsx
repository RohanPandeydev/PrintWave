const apiUrl = import.meta.env.VITE_APP_API_URL;
const localStorageUserDetails = import.meta.env.VITE_SECURE_LOCAL_STORAGE_USER_KEY;
const localStorageUserToken = import.meta.env.VITE_SECURE_LOCAL_STORAGE_TOKEN_KEY;
const localStorageUserRefreshToken = import.meta.env.VITE_SECURE_LOCAL_STORAGE_REFRESH_TOKEN_KEY;
const localStorageUserCart = import.meta.env.VITE_SECURE_LOCAL_CART_STORAGE_KEY;
const cartShippingCost = import.meta.env.VITE_SECURE_LOCAL_CART_SHIPPING_COST;
const cartSalesTaxPercentage = import.meta.env.VITE_SECURE_LOCAL_CART_SALES_TAX_PERCENTAGE;
const userType = import.meta.env.VITE_SECURE_USER_TYPE;
const orderStatus = import.meta.env.VITE_SECURE_ORDER_STATUS;
const paymentStatus = import.meta.env.VITE_SECURE_PAYMENT_STATUS;





const config = {
    apiUrl: apiUrl,
    localStorageUserToken: localStorageUserToken,
    localStorageUserDetails: localStorageUserDetails,
    localStorageUserRefreshToken: localStorageUserRefreshToken,
    localStorageUserCart: localStorageUserCart,
    cartShippingCost: parseFloat(cartShippingCost),
    cartSalesTaxPercentage: parseFloat(cartSalesTaxPercentage),
    userType: userType,
    orderStatus: JSON.parse(orderStatus),
    paymentStatus: JSON.parse(paymentStatus),

};
export default config;