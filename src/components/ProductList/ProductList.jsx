import './Productlist.css';
import products from "../../api/Products.json";
import { useSelector } from "react-redux";
import CartButtons from './CartButtons/index.jsx';
import { useState } from 'react';
import Header from '../Header/Header'; 

function ProductList() {
    const { cartList } = useSelector((state) => state.cart);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <div className='bg-black '>
            <div className='w-full bg-black flex justify-center h-screen'>
            <section className="container">
                {filteredProducts.map((product, key) => (
                    <div className="product-container shadow-sm shadow-white" key={key}>
                        <img src={product?.image} alt="" />
                        <h3>{product?.title}</h3>
                        <h3>{product?.Price}</h3>


                        <CartButtons product={product} />
                    </div>
                ))}
            </section>
                </div>
        </div>
    );
}

export default ProductList;