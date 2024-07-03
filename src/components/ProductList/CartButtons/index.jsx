import { React, useMemo } from "react";
import AfterCart from "../CartButtons/AfterCart";
import BeforeCart from "../CartButtons/BeforeCart";
import { useSelector } from "react-redux";

function cartButtons({ product }) {
  const { cartList } = useSelector((state) => state.cart);
  const cartCount = useMemo(() => {
    return cartList?.find((item) => item?.id == product?.id)?.count;
  }, [cartList]);
  return (

    
    <>
      {cartCount > 0 ? (
        <AfterCart productID={product?.id} cartCount={cartCount} />
      ) : (
        <BeforeCart product={product} />
      )}
    </>
  );
}

export default cartButtons;
