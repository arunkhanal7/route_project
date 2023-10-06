import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';



export const Carts = () => {

  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCarts(data.carts);
      });
  }, []);
  return (
    <>
      <div className='container'>
    <div className='product_div'>
      <div className="app">
      {carts.map((item) => {
        return (
          <>
          <Link to={`/carts/${item.id}`}>
            {
              item.products.map((items)=>{
                return (
                  <h1 className='title'>{items.title} </h1>

                )
              })
            }
            
            </Link>
        </>
        )
      })}
    </div>
        
    </div>
    </div>
      
    </>
  )
}
