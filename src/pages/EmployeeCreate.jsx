import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import { Col, Container, Row } from 'reactstrap'
import EmployeeCreateForm from '../components/profile/EmployeeCreateForm'
import EmployeeItems from '../components/profile/EmployeeItems'
import AuthServices from '../services/AuthServices'
import Swal from 'sweetalert2'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import UserServices from '../services/UserServices'
import config from '../../config'
import Loader from '../utils/Loader/Loader'
import NoDataFound from '../utils/NoDataFound'
import customContext from '../contexts/Context'
import ProfileMenuSidebar from '../layout/ProfileMenuSidebar'

const EmployeeCreate = () => {
    const { loggedInUserId } = customContext()

    // console.log(userData,"====")




    const { data: employeeList, isLoading: isEmployeeLoad } = useQuery(['employee-list'],
        () => {

            let queryParams = [];
            if (config.userType) queryParams.push(`userType=${config.userType}`);
            if (loggedInUserId) queryParams.push(`workingUnderOrg=${loggedInUserId}`);
            let finalParams = queryParams.length ? `?${queryParams.join("&")}` : "";
            return UserServices.employeedList(finalParams)
        }, {
        enabled: !!config.userType,
        select: (data) => {


            return data?.data?.data

        },
        onError: (err) => {
            console.log("Error response data:", err.response?.data);
            const msg =
                err.response?.data?.message ||
                "An unexpected error occurred. Please try again.";
            Swal.fire({
                title: "Error",
                text: msg,
                icon: "error",
            });
        },

    }
    )
    // console.log(employeeList?.data)


    return (
        <>
            <Header />
            <section className='main-wrap'>
                <Container>
                    <h2 className='page-title'>Employee Create</h2>
                    <Row className="mt-5">
                        <Col lg={2} md={3}>
                            <ProfileMenuSidebar />
                        </Col>
                        <Col lg={10} md={9}>
                            <div className='personal-info'>
                                <div className="hdr-prt">
                                    <h3>Personal Information</h3>
                                </div>
                                <EmployeeCreateForm loggedInUserId={loggedInUserId} />
                            </div>
                            {isEmployeeLoad ? <Loader /> : employeeList?.users?.length == 0 ? <NoDataFound msg="No Employee Found" /> : <EmployeeItems employeeList={employeeList} />}
                        </Col>
                    </Row>


                </Container>
            </section>
            <Footer />
        </>
    )
}

export default EmployeeCreate