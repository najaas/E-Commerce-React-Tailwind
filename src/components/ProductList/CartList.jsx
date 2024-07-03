import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const CartList = () => {
    //   const cartItems = [
        //     {
            //       id: 1,
            //       name: 'Product 1',
            //       price: 29.99,
            //       quantity: 2,
  //       image: 'https://images.muslimnames.com/shahaba_muslim_girls_names_meaning_islamic_girls_names.png'
  //     },
  //     {
  //       id: 2,
  //       name: 'Product 2',
  //       price: 49.99,
  //       quantity: 1,
  //       image: 'https://via.placeholder.com/150'
  //     },
  //   ];

  
  const { cartList } = useSelector((state) => state.cart);

  console.log(cartList);


  const calculateTotal = () => {
    return cartList
      .reduce((total, item) => total + item.Price * item.count, 0)
      .toFixed(2);
  };

  return (
    <div className="container mx-auto p-4 h-screen">
      <h1 className="text-2xl font-bold mb-4 text-white">Shopping Cart</h1>
      <div className="bg-black shadow-md rounded-lg p-6">
        {cartList.length === 0 ? (
          <p className="text-center text-white">Your cart is empty</p>
        ) : (
          <div>
            {cartList.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-300 py-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-white">
                    {item.title}
                  </h2>
                  <p className="text-white">${item.Price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-2 py-1 bg-cyan-500 text-white rounded">
                    -
                  </button>
                  <span className="text-white">{item.count}</span>
                  <button className="px-2 py-1 bg-cyan-500 text-white rounded">
                    +
                  </button>
                </div>
                <p className="text-white">
                  ${(item.Price * item.count)}
                </p>
                <button className="ml-4 px-2 py-1 bg-cyan-500 text-white rounded">
                  Remove
                </button>
              </div>
            ))}
            <div className="flex justify-end mt-4">
              <h3 className="text-xl font-bold text-white">
                Total: ${calculateTotal()}
              </h3>
            </div>
            <div className="flex justify-end mt-4">
              <button className="px-4 py-2 bg-cyan-500 text-white rounded">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartList;
