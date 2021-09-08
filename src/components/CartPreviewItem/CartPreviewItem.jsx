import { CartPreviewItemH1, CartPreviewItemImage, CartPreviewItemInfoWrapper, CartPreviewItemP, CartPreviewItemSpan, CartPreviewItemWrapper } from "./CartPreviewItemStyles";

const CartPreviewItem = ({ item }) => {
  return (
    <CartPreviewItemWrapper>
      <CartPreviewItemImage src={item.imageUrl} alt={item.name} />
      <CartPreviewItemInfoWrapper>
        <CartPreviewItemH1>{item.name}</CartPreviewItemH1>
        <CartPreviewItemSpan>Quantity: {item.qty}</CartPreviewItemSpan>
        <CartPreviewItemP>${item.price}</CartPreviewItemP>
      </CartPreviewItemInfoWrapper>
    </CartPreviewItemWrapper>
  );
};

export default CartPreviewItem;
