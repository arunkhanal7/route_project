import { createSlice } from "@reduxjs/toolkit";

export const cartSlice= createSlice({
    name:"cart",
    initialState:{
        carts:[]
    },
    reducers:{
        AddtoCart: (state,action)=>{
            console.log("add to cart called" ,action.type)
            state.carts = [...state.carts,action.payload]

        },
        removeFromCart: (state,action)=>{
            console.log('remove called',action.type)
            state.carts= state.carts.filter((c)=> c.id !== action.payload.id )
        }
    },
})

//action creators are generated for each case reducer function
export const {AddtoCart,removeFromCart}=cartSlice.actions

export default cartSlice.reducer