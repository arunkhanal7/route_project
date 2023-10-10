import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from "../components/Header"

const root = () => {
  return (
    <>
    
    <Header/>
    <div style={{display:"flex"}}>
    <nav>
          <ul>
            <li>
              
              <Link to={`products`}>Product</Link>
            </li>
            <li>
              <Link to={`carts`} >Carts</Link>
            </li>
          </ul>
        </nav>

    
    <div className='sidebar'>
        <Outlet />
    </div>
    </div>
    </>
  )
}

export default root