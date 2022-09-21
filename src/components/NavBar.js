import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <>
<div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">NDImportaciones</a>
      </div>
   <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal p-0">
      <li><a>Nike</a></li>
      <li><a>Adidas</a></li>
      <li><a>Vans</a></li>
      <li><a>Puma</a></li>
    </ul>
  </div>
<CartWidget/> 
</div>
    </>
  )
}

export default NavBar