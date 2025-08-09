import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (

        <nav>
            <div className="container">
                <div className="logo">
                    <img src="/img/logo.svg" alt="" />
                </div>
                <div className="ul">
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/product'}>Product</Link></li>
                        <li><Link to={'/product'}>Product</Link></li>
                        <li><Link to={'/product'}>Product</Link></li>
                    </ul>
                    <button>Cart <span>0</span></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar