import React, { useEffect, useState } from 'react'
import { GrEdit } from 'react-icons/gr'
import { Button } from 'reactstrap'
import client from "../../assets/client.png"
import { useFormik } from 'formik'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import UserServices from '../../services/UserServices'
import customContext from '../../contexts/Context'
import { values } from 'lodash'
import Swal from 'sweetalert2'
import ProfileUpdateFormModel from './ProfileUpdateFormModel'
import Loader from '../../utils/Loader/Loader'
import ButtonLoader from '../../utils/Loader/ButtonLoader'
import { BiPlus } from 'react-icons/bi'
import StorageData from '../../helper/storagehelper/StorageData'

const PersonalInfoForm = () => {
    const [modal, setModal] = useState(false);
    const [phase, setPhase] = useState("")
    const handleModalToggle = (_, phase) => {
        setPhase(phase)
        setModal(!modal)
    };
    const handleCloseModal = () => {
        setPhase("")
        setModal(!modal)
        queryClient.refetchQueries("user-details")
        queryClient.refetchQueries("user-address")
    };


    const { loggedInUserId } = customContext()
    const queryClient = useQueryClient()

    const { data, isLoading } = useQuery(["user-details", loggedInUserId], () => UserServices.getMe({ id: loggedInUserId }), {
        enabled: !!loggedInUserId,
        select: (data) => {
            return data?.data?.data?.user
        },
        onError: (err) => {
            let msg = err?.response?.data?.msg || err?.message
            Swal.fire({
                title: "Error",
                text: msg,
                icon: "error",
            });
        }
    })
    const { data: addressList, isLoading: isLoadAddress } = useQuery(["user-address", loggedInUserId], () => UserServices.getUserAddress(), {
        enabled: !!loggedInUserId,
        select: (data) => {
            return data?.data?.addresses
        },
        onError: (err) => {
            let msg = err?.response?.data?.msg || err?.message
            Swal.fire({
                title: "Error",
                text: msg,
                icon: "error",
            });
        }
    })




    useEffect(() => {
        if (!data) return
        StorageData.setData(data);

    }, [data])






    return (
        <>
            <div className='profile-info'>
                {isLoading ? <ButtonLoader /> : <div className='user-info'>
                    <div className='user-img'>
                        <img src={data?.profileImage || client} alt='' />
                    </div>
                    <h3>{`${data?.firstName || ""} ${data?.lastName || ""} `}</h3>
                </div>}
                <Button className='btn-edit' onClick={(e) => handleModalToggle(e, "profileimage")}><GrEdit /> EDIT</Button>
            </div>

            <div className='personal-info mt-4'>
                <div className='hdr-prt'>
                    <h3>Personal Information</h3>
                    <Button className='btn-edit' onClick={(e) => handleModalToggle(e, "credential")}><GrEdit /> EDIT</Button>
                </div>

                {isLoading ? <ButtonLoader /> : <div className='dtls-info'>
                    <h4><span>First Name</span> {data?.firstName || ""}</h4>
                    <h4><span>Last Name</span> {data?.lastName || ""}</h4>
                    <h4><span>Email address</span> {data?.email || ""}</h4>
                    <h4><span>Phone number</span> {data?.phoneNumber || ""}</h4>
                </div>}
            </div>

            <div className='personal-info mt-4'>
                <div className='hdr-prt'>
                    <h3>Address</h3>
                    <Button className='btn-edit' onClick={(e) => handleModalToggle(e, "address")}><BiPlus /> Add</Button>
                </div>

                {isLoadAddress ? <ButtonLoader /> : addressList?.map((each) => {

                    return <div className='dtls-info'>
                        <h4><span>Name</span> {each?.name}</h4>
                        <h4><span>Phone Number</span> {each?.phoneNumber}</h4>
                        <h4><span>Address</span> {each?.address}</h4>
                        <h4><span>Country</span> {each?.country}</h4>
                        <h4><span>State</span> {each?.state}</h4>
                        <h4><span>City</span> {each?.city}</h4>
                        <h4><span>Zip Code</span>{each?.zipCode}</h4>
                        {/* <h4><span>TAX ID</span> AS564178969</h4> */}

                    </div>

                })
                }
            </div>




            {isLoading ? <Loader /> : <ProfileUpdateFormModel isLoadAddress={isLoadAddress} addressList={addressList} userData={data} phase={phase} modal={modal} handleCloseModal={handleCloseModal} handleModalToggle={handleModalToggle} />
            }
        </>
    )
}

export default PersonalInfoForm