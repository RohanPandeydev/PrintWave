import React from 'react'
import {  NavLink } from 'react-router-dom'

const Profilemenu = () => {
  return (
    <>
      <div className='lft-panel'>
        <ul>
          <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/mywallet">My Wallet</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/order">My Orders</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/personalinfo">Personal Information</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/employee/create">Employee Create</NavLink></li>
          {/* <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="">Support</NavLink></li> */}
          {/* <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/Trackorder">Track Order</NavLink></li> */}

        </ul>
      </div>
    </>
  )
}

export default Profilemenu