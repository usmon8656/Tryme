import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="logo">
                        <img src="../public/img/logo.svg" alt="" />
                    </div>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/product'}>Product</Link></li>
                        <li><Link to={''}>About</Link></li>
                        <li><Link to={''}>Contacts</Link></li>
                    </ul>
                    <hr />
                    <div className="foot_info">
                        <p>2022 Relume. All right reserved.</p>
                        <ul>
                            <li><Link to={''}>Privacy Policy</Link></li>
                            <li><Link to={''}>Terms of Service</Link></li>
                            <li><Link to={''}>Cookies Settings</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer