// import { useState } from "react";
import { useSelector } from "react-redux";
import { BagLink, CartPreviewH2, CartPreviewWrapper } from "./CartPreviewStyles";
import CartPreviewItem from "../CartPreviewItem/CartPreviewItem";

const CartPreview = ({ hide }) => {
  const cartItems = useSelector((state) => state.cart.cartItems)
  return (
    <CartPreviewWrapper className={hide ? "hide" : ""}>
      {
        cartItems.length <= 0 ?
        <CartPreviewH2>Your cart is empty</CartPreviewH2>
        : ""
      }
      {cartItems.map((item) => (
        <CartPreviewItem item={item} />
      ))}
    <BagLink to="/bag" className="link-to-bag">
        Go To Bag!
    </BagLink>
    </CartPreviewWrapper>
  );
};

export default CartPreview;
