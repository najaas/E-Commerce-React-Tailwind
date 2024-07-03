import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart.jsx";

const Store = configureStore({
    reducer:{
        cart:cartReducer,
    }

})


export default Store