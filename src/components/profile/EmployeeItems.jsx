import React from 'react'
import { BiSolidEdit } from 'react-icons/bi'
import { RiDeleteBin3Line } from 'react-icons/ri'
import { Table } from 'reactstrap'

const EmployeeItems = ({ employeeList }) => {
    return (
        <>
            <Table bordered responsive className='customer-lst-table mt-4'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Phone No.</th>
                        <th className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employeeList?.users?.map((each) => {
                            return <tr>
                                <td>{each?.firstName || ""} {each?.lastName || ""}</td>
                                <td>{each?.email || ""}</td>
                                <td>{each?.phoneNumber || ""}</td>
                                <td className='d-flex align-items-center justify-content-center'>
                                    <BiSolidEdit className='edit' />
                                    <RiDeleteBin3Line className='delete' />
                                </td>
                            </tr>

                        })
                    }


                </tbody>
            </Table>
        </>
    )
}

export default EmployeeItems