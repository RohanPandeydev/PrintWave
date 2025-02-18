import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { Button, Input, Label } from 'reactstrap'
import ButtonLoader from './Loader/ButtonLoader'





const CouponSection = ({ couponCode, applyCouponCodeMutate, handleCouponToggle, isCouponOpen, handleCouponValueChange, handleCouponSubmit }) => {
    return (
        <>
            <div className='coupon-apply-box'>
                {/* <h5 className="apply-coupon-toggle" onClick={handleCouponToggle}>Click Here to Apply Your Coupon</h5> */}
                <div className={"coupon-box-show"}>
                    <Label for="coupon" className='coupon-label'>
                        Apply Coupon
                    </Label>
                    <div className='coupon-input-box'>
                        <Input
                            id="coupon"
                            name="coupon"
                            placeholder="Enter Coupon Code = ABCXY25"
                            type="text"
                            value={couponCode}
                            onChange={handleCouponValueChange}
                            required
                        />
                        {applyCouponCodeMutate?.status == "success" ? <p className='text-success '>Applied</p> : null}
                        <Button disabled={applyCouponCodeMutate?.isLoading || !!!couponCode} type='button' onClick={handleCouponSubmit} className='coupon-btn'>{applyCouponCodeMutate?.isLoading ? <ButtonLoader /> : <FaCheck />}</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CouponSection