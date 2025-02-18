import React from 'react'
import { Button, FormGroup, Input } from 'reactstrap'
import cart1 from "../../assets/cart1.jpg"
import NoDataFound from '../../utils/NoDataFound';
import FormatAmount from '../../utils/FormatAmount';

const CartItems = ({ qtyErrMsg, cartList, setCartList, handleQuantityChange, handleRemoveProduct }) => {
    // console.log(cartList, "cartList")
    const generateQuantityOptions = (minQuantity) => {
        // Default quantities to show after minimum quantity
        const increments = [10, 50, 100, 300, 800];

        return increments.map(inc => minQuantity + inc).filter(qty => qty > minQuantity);
    };


    console.log(qtyErrMsg, cartList, "qtyErrMsg")



    return (
        <>
            {
                cartList?.length && cartList?.map((each) => {
                    const productImage = (each?.product?.productImages?.length && each?.product?.productImages[0]) || cart1

                    return <tr>
                        <td>
                            <div className='cart-pro-dtls'>
                                <div className='cart-pro-img'>
                                    <img src={productImage} alt='' />
                                </div>
                                <div>
                                    <h4>{each?.product?.productName || ""
                                    }</h4>
                                    <p>{each?.product?.description || ""}</p>
                                    <Button className='remove-btn' onClick={(e) => handleRemoveProduct(e, each)}>Remove</Button>
                                </div>
                            </div>
                        </td>
                        {/* <td>
                            <FormGroup>
                                <Input
                                    type="select"
                                    value={each?.quantity || 0}
                                    onChange={(e) => handleQuantityChange(e, each)}
                                >
                                    <option value={each?.product?.minBulkQuantity}>
                                        {each?.product?.minBulkQuantity}
                                    </option>
                                    {generateQuantityOptions(each?.product?.minBulkQuantity).map((qty) => (
                                        <option key={qty} value={qty}>
                                            {qty}
                                        </option>
                                    ))}
                                </Input>
                            </FormGroup>
                        </td> */}
                        <td>
                            <FormGroup>
                                <Input
                                    type="number"
                                    value={each?.quantity || ""}
                                    onChange={(e) => handleQuantityChange(e, each)}
                                // min={each?.product?.minBulkQuantity} // Ensures quantity doesn't go below minimum
                                />
                            </FormGroup>
                            {qtyErrMsg
                                .filter((err) => err.id === each?.product?._id) // Find errors matching this item
                                .map((err, index) => (
                                    <p key={index} className="text-danger">{err.msg}</p> // Display error message
                                ))}
                        </td>
                        <td>
                            <h5 className='price'> ${each?.product?.price}</h5>
                        </td>
                        <td>
                            <h5 className='price'> ${FormatAmount(each?.product?.price * each?.quantity)}</h5>
                        </td>
                    </tr>

                })
            }

        </>
    )
}

export default CartItems