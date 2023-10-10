import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { AddtoCart } from "./cartSlice";
import { useSelector } from "react-redux";

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const carts = useSelector((state)=> state.cart.carts);
  const onClickAdd = (add)=>{
    dispatch(AddtoCart(add))
  };
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      });
  }, []);

  return (
    <>
    <Container className="container" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"5rem"}}>
            {products.map((item) => {
              return (
                <>
                
                  <Link to={`/products/${item.id}`}>
                    <Card className="card"  variant="outlined" >
                      <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={item.thumbnail}
                        />
                        <CardContent>
                          <Typography>{item.title}</Typography>
                          <Typography>Price:{item.price}</Typography>

                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Link>
                  <button onClick={()=>{
                    onClickAdd(item);
                  }}>Add to Cart</button>
                </>
              );
            })}
            </Container>
    </>
  );
};

export default Products;
