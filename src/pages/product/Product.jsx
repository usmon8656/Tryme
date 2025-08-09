import React, { useState } from 'react'
import './Product.css'
import { useParams } from 'react-router-dom'

function Product({ data }) {

  const { id } = useParams();
  const filterData = data.filter((item) => item.id == id);
  console.log(filterData);

  const [mainImg, setMainImg] = useState(filterData[0].img) 


  return (
    <>
      <div className="product">
        <div className="container">
          <div className="images">
            <div className="imgs">
              {
                filterData[0].imgs.map((item)=>{
                  return <img onClick={()=>{
                    setMainImg(item)
                  }} src={item} alt="" />
                })
              }
            </div>
            <div className="main_img">
              <img src={mainImg} alt="" />
            </div>
          </div>
          <div className="info">
            <h3>{filterData[0].name}</h3>
            <h4>${filterData[0].price}</h4>
            <p>{filterData[0].desc_2}</p>
            <div className="select">
              <p>Variant</p>
              <select name="Select" id="">
                <option value="1">Product 1</option>
                <option value="1">Product 1</option>
                <option value="1">Product 1</option>
              </select>
            </div>
            <div className='aa'>
              <p>Variant</p>
              <div className="options">
                <button>Option Two</button>
                <button>Option One</button>
              </div>
            </div>
            <div className="btns">
              <button className='add'>Add To Cart</button>
              <button className='buy'>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product