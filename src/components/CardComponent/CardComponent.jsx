import React from 'react'
import "./CardComponent.css"
import { FaStar } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function CardComponent({ x, img, title, star, desc, btn }) {
  return (
    <>
      <div className='cardComponent border box-shadow'>
        {x == true &&
          <img src={img}
            className='border'
            alt="icon" />}
        <h3> {title} </h3>
        {star == true &&
          <div className='stars'>
            {[...Array(5)].map((index) =>
              (<FaStar key={index} />))
            }
          </div>}
        <p className='fs-20'> {desc} </p>
        {btn == true &&
          <button className='border fs-20'>
            <Link to="/">
              Learn More <FaArrowRightLong />
            </Link>
          </button>
        }
      </div>
    </>
  )
}

export default CardComponent