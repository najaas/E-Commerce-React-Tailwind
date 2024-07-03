import './Productlist.css'
import products from "../../api/Products.json";
import { useSelector } from "react-redux";
import CartButtons from './CartButtons/index.jsx'

function ProductList() {
   const {cartList}=useSelector((state)=>state.cart)

  return (
    <section className="container">
    {products?.map((product, key) => (
       <div className="product-container" key={key}>
          <img src={product?.image} alt="" />
          <h3>{product?.title}</h3>
          <p>{product?.Price}</p>
          <CartButtons product={product}/>
       </div>
    ))}
 </section>
  )
}

export default ProductList
