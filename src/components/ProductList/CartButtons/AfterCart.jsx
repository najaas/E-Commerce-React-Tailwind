import { useDispatch, useSelector } from 'react-redux'
import './CartButton.css'
import {  decrement, increment } from "../../../redux/Cart";


function AfterCart({cartCount, productID,product}) {
  const dispatch=useDispatch()
  
  return (
    <div className='after-cart'>
        <button className='cart-counter-button' onClick={()=> dispatch(decrement(product))}>-</button>
      <div className='cart-count'>{cartCount}</div>
      <button className='cart-counter-button' onClick={()=>dispatch(increment(product))}>+</button>
    </div>
  )
}

export default AfterCart