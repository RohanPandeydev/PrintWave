import React, { createContext, useContext, useState, useEffect } from "react";
import StorageData from "../helper/storagehelper/StorageData";
import CartServices from "../services/CartServices";

const cartContext = createContext();

const CartContextWrapper = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const initializeCart = async () => {
      const userData = StorageData.getUserData();
      const isUserLoggedIn = !!userData?._id;

      if (isUserLoggedIn) {
        try {

          const databaseCart = await CartServices.userCartList();
          const cartData = databaseCart?.data?.carts ||[];
          setCartList(cartData);
        } catch (error) {
          console.error('Error fetching cart:', error);
          setCartList([]);
        }
      } else {
        const localCartData = StorageData.getUserCartData() || [];
        setCartList(localCartData);
      }
    };

    initializeCart();
  }, []);

  // Update localStorage when cartList changes (for non-logged-in users)
  useEffect(() => {
    const userData = StorageData.getUserData();
    const isUserLoggedIn = !!userData?._id;

    if (!isUserLoggedIn) {
      StorageData.setCartData([...cartList]);
    }
  }, [cartList]);


  return (
    <cartContext.Provider value={{ cartList, setCartList }}>
      {children}
    </cartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(cartContext);
};

export default useCartContext;
export { CartContextWrapper };
