
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cart_det = () => {
    const [carts, setCarts] = useState({});
  const { cartID } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/carts/${cartID}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCarts(data);
      });
  }, [cartID]);
  console.log(cartID,"id is")
  return (
    <>
        <div className='cart_details'>
            <h1>Your Products</h1>
            <div className='cart_products'>
            {
            carts.products &&
             carts.products.map((item)=>{
                return (
                    <p>{item.title}</p>
                )
            })
        }

            </div>
            <p>Total:{carts.total}</p>
            <p>Discounted Total: {carts.discountedTotal}</p>
            <p></p>
        </div>
        


    </>
  )
}

export default Cart_det