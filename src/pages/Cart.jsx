import React, { useMemo, useState } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import { Button, Col, Container, Row, Table } from 'reactstrap'
import cart1 from "../assets/cart1.jpg"
import cart2 from "../assets/cart2.jpg"
import cart3 from "../assets/cart3.jpg"
import { Link } from 'react-router-dom'
import CartItems from '../components/cart/CartItems'
import useCartContext from '../contexts/CartContext'
import StorageData from '../helper/storagehelper/StorageData'
import { deleteCartItemInDatabase, updateCartItemInDatabase } from '../helper/carthelper/AddtoCart'
import config from '../../config'
import FormatAmount from '../utils/FormatAmount'
import NoDataFound from '../utils/NoDataFound'

const Cart = () => {
    const { cartList, setCartList } = useCartContext()
    const [qtyErrMsg, setqtyErrMsg] = useState([])
    const shippingCost = config.cartShippingCost
    const salesTaxPercentage = config.cartSalesTaxPercentage
    const handleQuantityChange = (e, data) => {
        const newQty = parseInt(e.target.value || 1);
        const cloneCartList = [...cartList];
        console.log(data, "dataQTY Change")

        // Find the product in cart
        const itemIndex = cloneCartList.findIndex(
            (each) => each?.product?._id === data?.product?._id
        );

        if (itemIndex !== -1) {
            // Update quantity
            cloneCartList[itemIndex].quantity = newQty;
            // Update total price for this item
            cloneCartList[itemIndex].totalPrice = newQty * data.product.price;
            if (newQty < data?.product?.minBulkQuantity) {
                setqtyErrMsg((prevErrors) => {
                    // Remove any existing error for this product first
                    const filteredErrors = prevErrors.filter(err => err.id !== data?.product?._id);

                    return [
                        ...filteredErrors,
                        { id: data?.product?._id, msg: `Minimum ${data?.product?.minBulkQuantity} qty needed` }
                    ];
                });
                return;

            }
            setqtyErrMsg((prevErrors) => {
                // Remove any existing error for this product first
                const filteredErrors = prevErrors.filter(err => err.id !== data?.product?._id);
                return filteredErrors
            });

            const text = qtyErrMsg.filter(err => err.id !== data?.product?._id);
            console.log(text, "123")






            // If user is logged in, update in database
            const isUserLoggedIn = !!StorageData.getUserData()?._id;
            if (isUserLoggedIn) {
                updateCartItemInDatabase(cloneCartList[itemIndex],);
            }
            // Update context with new cart data
            setCartList(cloneCartList);
        }




    };
    const handleRemoveProduct = async (e, data) => {
        const cloneCartList = [...cartList];
        const itemIndex = cloneCartList.findIndex(
            (each) => each?.product?._id === data?.product?._id
        );

        if (itemIndex !== -1) {
            // Find the product in cart
            const filterOutProduct = cloneCartList.filter(
                (each) => each?.product?._id !== data?.product?._id
            );
            setqtyErrMsg((prevErrors) => {
                // Remove any existing error for this product first
                const filteredErrors = prevErrors.filter(err => err.id !== data?.product?._id);
                return filteredErrors
            });

            console.log(data, "data")


            // If user is logged in, update in database
            const isUserLoggedIn = !!StorageData.getUserData()?._id;
            if (isUserLoggedIn) {

                const res = await deleteCartItemInDatabase(cloneCartList[itemIndex]);
                console.log(res, "Response")
            }
            // Update context with new cart data
            setCartList(filterOutProduct);
        }



    }







    const subTotalPrice = useMemo(() => {
        const initialValue = 0;
        const sumWithInitial = cartList.reduce(
            (accumulator, currentValue) => accumulator + parseFloat((parseFloat(currentValue?.product?.price) * parseFloat(currentValue?.quantity)) || 0),
            initialValue,
        );

        return sumWithInitial
    }, [cartList])

    const salesTax = useMemo(() => {
        if (!subTotalPrice || !salesTaxPercentage) return 0; // Handle edge cases
        return (subTotalPrice * salesTaxPercentage) / 100;
    }, [subTotalPrice, salesTaxPercentage]);

    const totalPrice = useMemo(() => {
        return salesTax + subTotalPrice + shippingCost;
    }, [subTotalPrice, salesTax, shippingCost]);



    return (
        <>
            <Header />

            <section className='main-wrap'>
                <Container>
                    <h2 className='page-title'>Shopping Cart</h2>

                    {cartList?.length == 0 ? <NoDataFound msg={"No Item Found"} /> : <Row className='mt-5'>
                        <Col md={8}>
                            {cartList?.length == 0 ? <NoDataFound msg={"No Item Found"} /> : <Table className='cart-table' responsive>
                                <thead>
                                    <tr>
                                        <th>Products</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Total Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <tr>
                                    <td>
                                        <div className='cart-pro-dtls'>
                                            <div className='cart-pro-img'>
                                                <img src={cart1} alt='' />
                                            </div>
                                            <div>
                                                <h4>Standard Postcards</h4>
                                                <p>4" X 6" | 14 Pt. Cardstock Gloss</p>
                                                <Button className='remove-btn'>Remove</Button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <FormGroup>
                                            <Input type="select">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>
                                        </FormGroup>
                                    </td>
                                    <td>
                                        <h5 className='price'>$88.70</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='cart-pro-dtls'>
                                            <div className='cart-pro-img'>
                                                <img src={cart2} alt='' />
                                            </div>
                                            <div>
                                                <h4>Folded Postcards</h4>
                                                <p>10" X 7" (Folds To 5" X 7") | 14 Pt. Cardstock Gloss</p>
                                                <Button className='remove-btn'>Remove</Button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <FormGroup>
                                            <Input type="select">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>
                                        </FormGroup>
                                    </td>
                                    <td>
                                        <h5 className='price'>$333.60</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='cart-pro-dtls'>
                                            <div className='cart-pro-img'>
                                                <img src={cart3} alt='' />
                                            </div>
                                            <div>
                                                <h4>Folded Greeting Cards</h4>
                                                <p>7" X 5" (Folds To 3.5" X 5") | 16 Pt. Cardstock Gloss</p>
                                                <Button className='remove-btn'>Remove</Button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <FormGroup>
                                            <Input type="select">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>
                                        </FormGroup>
                                    </td>
                                    <td>
                                        <h5 className='price'>$140.35</h5>
                                    </td>
                                </tr> */}
                                    <CartItems qtyErrMsg={qtyErrMsg} cartList={cartList} handleRemoveProduct={handleRemoveProduct} handleQuantityChange={handleQuantityChange} />
                                </tbody>
                            </Table>}
                        </Col>

                        <Col md={4}>
                            <div className='summery-bx'>
                                <h3>Order Summery</h3>
                                <hr />
                                <ul className="order-lst">
                                    <li>
                                        <h4>SUBTOTAL</h4>
                                        <h4>${FormatAmount(subTotalPrice)}</h4>
                                    </li>
                                    <li>
                                        <p>Shipping</p>
                                        <p><strong>${config.cartShippingCost}</strong></p>
                                    </li>
                                    <li>
                                        <p>Sales Tax</p>
                                        <p><strong>${FormatAmount(salesTax)}</strong></p>
                                    </li>
                                    <li>
                                        <h4>TOTAL</h4>
                                        <h4>${FormatAmount(totalPrice)}</h4>
                                    </li>
                                </ul>

                                {qtyErrMsg?.length == 0 && <Link className="btn btn-dark w-100 mt-3" to="/checkout" aria-disabled={qtyErrMsg?.length}>CHECKOUT NOW</Link>}
                            </div>
                        </Col>
                    </Row>}
                </Container>
            </section>

            <Footer />
        </>
    )
}

export default Cart