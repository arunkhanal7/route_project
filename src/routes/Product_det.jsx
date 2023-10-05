import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Product_det = () => {
  const [product, setProduct] = useState({});
  const { productID } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productID}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, [productID]);
  console.log(productID,"id is")

  return (
    <>
      <div>
        <>
          <h1 className='title'>{product.title} </h1>
          <img src={product.thumbnail} alt="" />
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating}</p>
        </>
      </div>
    </>
  );
}

export default Product_det;
