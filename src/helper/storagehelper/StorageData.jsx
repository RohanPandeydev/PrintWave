import secureLocalStorage from "react-secure-storage";
import config from "../../../config";


class StorageData {
  setToken(data) {
    secureLocalStorage.setItem(config.localStorageUserToken, data);
  }
  setRefreshToken(data) {
    secureLocalStorage.setItem(config.localStorageUserRefreshToken, data);
  }
  setData(data) {
    secureLocalStorage.setItem(
      config?.localStorageUserDetails,
      JSON.stringify(data)
    );
  }
  setCartData(data) {
    secureLocalStorage.setItem(
      config?.localStorageUserCart,
      JSON.stringify(data)
    );
  }
  getToken() {
    return secureLocalStorage.getItem(config.localStorageUserToken);
  }
  getRefreshToken() {
    return secureLocalStorage.getItem(config.localStorageUserRefreshToken);
  }

  getUserData() {
    return JSON.parse(
      secureLocalStorage.getItem(config?.localStorageUserDetails)
    );
  }
  getUserCartData() {
    return JSON.parse(
      secureLocalStorage.getItem(config?.localStorageUserCart)
    );
  }
  removeData() {
    secureLocalStorage.removeItem(config?.localStorageUserDetails);
    secureLocalStorage.removeItem(config.localStorageUserToken);
    return;
  }
  removeCartData() {
    secureLocalStorage.removeItem(config?.localStorageUserCart);
    return;
  }
}

export default StorageData = new StorageData();
