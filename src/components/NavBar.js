import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <>
<div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link to={'/'} className="btn btn-ghost normal-case text-xl">NDImportaciones</Link>
      </div>
   <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal p-0">
      <li><Link to= '/Nike'>Nike</Link></li>
      <li><Link to= '/Adidas'>Adidas</Link></li>
      <li><Link to= '/Vans'>Vans</Link></li>
    </ul>
  </div>
<CartWidget/> 
</div>
    </>
  )
}

export default NavBar