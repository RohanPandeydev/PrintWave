import CartServices from "../../services/CartServices";
import StorageData from "../storagehelper/StorageData";

const generateSessionId = () => {
    return `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Function to handle API call for logged-in users
export const saveCartToDatabase = async (cartData, userId) => {
    try {
        console.log(cartData, "cartData")
        const productIdsQty = cartData?.map((each) => {
            return {
                product: each?.product?._id,
                quantity: each?.quantity
            }
        })
        const savetoDatabase = await CartServices.createCart({ products: productIdsQty })
        return savetoDatabase
    } catch (error) {
        console.error('Error saving cart to database:', error);
        throw error;
    }
};

export const handleAddToCart = async (e, product, cartList, setCartList) => {
    const userData = StorageData.getUserData();
    const isUserLoggedIn = !!userData?._id;

    try {
        // Update cart list in memory first
        const updatedCart = StoreToLocalStorage(product, cartList);
        setCartList([...updatedCart]);

        if (isUserLoggedIn) {
            const databaseCart = await CartServices.userCartList();
            const cartData = databaseCart?.data?.carts || [];
            // Check if the product already exists in the cart
            const existingProduct = cartData.find(item => item.product._id === product._id);

            console.log(existingProduct, "Checking existing product:")



            console.log(updatedCart, "cartData")

            if (existingProduct) {
                // Update quantity for existing product
                const sendDataForUpdate = {
                    _id: existingProduct._id,
                    quantity: existingProduct.quantity + 1  // Increment quantity
                };

                console.log("Updating product in DB:", sendDataForUpdate);

                try {
                    const data = await updateCartItemInDatabase(sendDataForUpdate, userData._id);
                    // console.log("Updated existing product:", data);
                } catch (error) {
                    console.error("Error updating product:", error);
                }
            } else {
                // Create new cart entry for the product
                const sendDataForCreate = {
                    product: {
                        _id: product?._id,
                    },
                    quantity: product?.minBulkQuantity || 1 // Ensure a valid quantity
                };

                console.log("Adding new product to DB:", sendDataForCreate);

                try {
                    const data = await saveCartToDatabase([sendDataForCreate], userData._id);
                    console.log("Added new product:", data);
                } catch (error) {
                    console.error("Error adding product:", error);
                }
            }

            // Fetch updated cart from the database
            try {
                const databaseCart = await CartServices.userCartList();
                const cartData = databaseCart?.data?.carts || [];
                setCartList(cartData);
            } catch (error) {
                console.error("Error fetching cart:", error);
                setCartList([]);
            }
        } else {
            // If user is not logged in, save to localStorage
            StorageData.setCartData(updatedCart);
        }
    } catch (error) {
        console.error('Error handling add to cart:', error);
        // You might want to show an error message to the user here
    }
};

export const StoreToLocalStorage = (product, cartList) => {
    let cartData = cartList || [];
    const existingProductIndex = cartData.findIndex(item => item.product._id === product._id);

    if (existingProductIndex !== -1) {
        cartData[existingProductIndex].quantity += 1;
    } else {
        cartData.push({
            product: product,
            sessionId: generateSessionId(),
            quantity: product?.minBulkQuantity || 10,
        });
    }

    return cartData;
};

// Function to sync local cart with database when user logs in
export const syncCartWithDatabase = async (cartList) => {
    const userData = StorageData.getUserData();
    if (!userData?._id || !cartList.length) return;

    try {
        await saveCartToDatabase(cartList, userData._id);
        // Clear localStorage cart after successful sync
        StorageData.setCartData([]);
    } catch (error) {
        console.error('Error syncing cart with database:', error);
        throw error;
    }
};
// Function to sync local cart with database when user logs in
export const fetchUserCart = async (cartList) => {
    const userData = StorageData.getUserData();
    if (!userData?._id || !cartList.length) return;

    try {
        const cartList = await CartServices.userCartList()
        return cartList?.data?.carts;
        // Clear localStorage cart after successful sync
    } catch (error) {
        console.error('Error syncing cart with database:', error);
        throw error;
    }
};

// Function to merge local and database carts when user logs in
export const mergeCartsOnLogin = async (localCart, databaseCart) => {
    const mergedCart = [...databaseCart];

    localCart.forEach(localItem => {
        const existingItem = mergedCart.find(dbItem =>
            dbItem.product._id === localItem.product._id
        );

        if (existingItem) {
            existingItem.quantity = localItem.quantity;
        } else {
            mergedCart.push(localItem);
        }
    });

    return mergedCart;
};




export const updateCartItemInDatabase = async (cartData) => {
    console.log(cartData, "1233")
    try {
        if (!cartData?._id) return
        console.log(cartData, "Update Phase")
        const cartList = await CartServices.updateCart({ id: cartData?._id, data: { quantity: cartData?.quantity || cartData?.product?.minBulkQuantity } })
        if (!cartList.ok) {
            // throw new Error('Failed to update cart');
        }
        else {
            console.log(cartList, "cartList After Update")

        }
    } catch (error) {
        console.error('Error updating cart:', error);
    }
};

export const deleteCartItemInDatabase = async (cartData) => {
    try {
        console.log(cartData, "cartData123")
        if (!cartData?._id) return
        console.log(cartData, "Update Phase")
        const cartList = await CartServices.userDeleteCartItem({ id: cartData?._id })
        return cartList
        if (!cartList.ok) {
            // throw new Error('Failed to update cart');
        }
        else {

            console.log(cartList, "cartList After Update")

        }

    } catch (error) {
        console.error('Error updating cart:', error);
    }
};