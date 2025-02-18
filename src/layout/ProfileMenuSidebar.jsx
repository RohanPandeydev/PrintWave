import React from 'react'
import { NavLink } from 'react-router-dom'
import customContext from '../contexts/Context'
import config from '../../config'

const ProfileMenuSidebar = () => {
  const { userType } = customContext()
  return (
    <>

      <div className='lft-panel'>
        <ul>
          <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/mywallet">My Wallet</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/order">My Orders</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/personalinfo">Personal Information</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/employee/create">My Employee </NavLink></li>
          {<li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/orderlog">{userType == config.userType ? "My Order Requests" : "Orders Pending  For Approval/Payment"}</NavLink></li>}
          <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/Trackorder">Track Order</NavLink></li>

        </ul>
      </div>
    </>
  )
}

export default ProfileMenuSidebar