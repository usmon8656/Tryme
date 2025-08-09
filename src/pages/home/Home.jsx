import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';

function Home({ data }) {
    console.log(data);

    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="hero_info">
                        <h1>Medium length hero headline goes here</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                        <button>Start Looking</button>
                    </div>
                    <div className="hero_img">
                        <img src="../public/img/hero_img.jpg" alt="" />
                    </div>
                </div>
            </div>
            <main>
                <section className='sec_1'>
                    <div className="container">
                        <div className="view_all">
                            <div className="info">
                                <span>TRANDING</span>
                                <h2>Tranding Products</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                            <button>View all</button>
                        </div>
                        <div className="cards">
                            {
                                data.map((item) => {
                                    return <Link to={`/product/${item.id}`}>
                                        <div className="card">
                                            <div className="img">
                                                <img src={item.img} alt="" />
                                            </div>
                                            <span>{item.name}</span>
                                            <p>{item.desc}</p>
                                            <p className="price">${item.price}</p>
                                        </div>
                                    </Link>
                                })
                            }

                        </div>
                    </div>
                </section>
                <section className='sec_2'>
                    <div className="container">
                        <div className="img">
                            <img src="../public/img/sec_2.jpg" alt="" />
                        </div>
                        <div className="info">
                            <h3>Long heading is what you see here in this feature section</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                            <span>
                                <i class="fa-solid fa-cube"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </span>
                            <span>
                                <i class="fa-solid fa-cube"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </span>
                            <span>
                                <i class="fa-solid fa-cube"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </span>
                        </div>
                    </div>
                </section>
                <section className='sec_3'>
                    <div className="container">
                        <h2>Medium length heading goes here</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                        <div className="input">
                            <input type="email" placeholder='Enter your email' />
                            <button>Sign Up</button>
                        </div>
                        <span>By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</span>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home