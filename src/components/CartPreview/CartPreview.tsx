// import { useState } from "react";
import { useSelector } from "react-redux";
import { BagLink, CartPreviewH2, CartPreviewWrapper } from "./CartPreviewStyles";
import CartPreviewItem from "../CartPreviewItem/CartPreviewItem";
import { RootState } from "../../redux/rootReducer";

interface Props {
  hide: boolean;
}

const CartPreview = ({ hide }: Props) => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems)
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
