import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Navbar from './components/nav/Navbar'
import Footer from './components/footer/Footer'

function App() {

  const [data, setData] = useState([
    {
      id:0,
      name:'Pone',
      price:55.01,
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img:'https://images.uzum.uz/ct7koiniub3d1eok7m20/original.jpg',
      desc_2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
      imgs:[
        'https://images.uzum.uz/ct7koiniub3d1eok7m1g/original.jpg',
        'https://images.uzum.uz/crqghu4hug2lhicohmqg/original.jpg',
        'https://images.uzum.uz/ct7koiei4n3ehka23e6g/original.jpg',
      ]
    },
    {
      id:1,
      name:'Iphone 16 pro max',
      price:900,
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img:'https://images.uzum.uz/csd84fb4nkdhfdv6fr6g/original.jpg',
      desc_2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
      imgs:[
        'https://images.uzum.uz/csd84fb4nkdhfdv6fr6g/original.jpg',
        'https://images.uzum.uz/csd84fdpq3ghb2qkr5kg/original.jpg',
        'https://images.uzum.uz/csd84fbvgbkl7noljt0g/original.jpg',
      ]
    },
    {
      id:2,
      name:'Chehol',
      price:2.03,
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img:'https://images.uzum.uz/ctf0hos5j42dmkoitmt0/original.jpg',
      desc_2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
      imgs:[
        'https://images.uzum.uz/ctf0hos5j42dmkoitmtg/original.jpg',
        'https://images.uzum.uz/ctf0hos5j42dmkoitmu0/original.jpg',
        'https://images.uzum.uz/ctf0hp34nkds9ma0ogig/original.jpg',
        'https://images.uzum.uz/ctf0hp34nkds9ma0ogj0/original.jpg',
        'https://images.uzum.uz/ctf0hp5pb7faledbes80/original.jpg',
      ]
    },
    {
      id:3,
      name:'Pone',
      price:55.00,
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img:'https://images.uzum.uz/ctvsln45j42bjc47ckgg/original.jpg',
      desc_2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
      imgs:[
        'https://images.uzum.uz/ctvslndht56ksubch7pg/original.jpg',
        'https://images.uzum.uz/ctq82oui4n324lr1to60/original.jpg',
        'https://images.uzum.uz/ctq82oui4n324lr1to5g/original.jpg',
      ]
    }
  ])

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home data={data}/>}/>
        <Route path='/product/:id' element={<Product data={data}/>}/>
      </Routes>
      <Footer/>
      
      </BrowserRouter>
    </>
  )
}

export default App