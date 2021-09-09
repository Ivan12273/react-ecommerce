import {
  CartPreviewItemH1,
  CartPreviewItemImage,
  CartPreviewItemInfoWrapper,
  CartPreviewItemP,
  CartPreviewItemSpan,
  CartPreviewItemWrapper
} from "./CartPreviewItemStyles";
import { ProductType } from "../../TypeScript/products/types";

interface Props {
  item: ProductType
}

const CartPreviewItem = ({ item }: Props) => {
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
