import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { listProducts } from "../../../redux/product/reducer";
import Button from "../../Button/Button"
import {
  ProductDetailWrapper,
  ProductDetailImageWrapper,
  ProductDetailImage,
  ProductDetailInfo,
  ProductDetailInfoTextWrapper,
  ProductDetailInfoTextH1,
  ProductDetailInfoTextH3,
  ProductDetailInfoTextH4,
} from './ProductDetailStyles';
import { RootState } from "../../../redux/rootReducer";

const ProductDetail = () => {
  const productList = useSelector((state: RootState) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  const { id }: { id: string } = useParams();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const handleAddToCart = () => {
    window.location.assign('/bag/' + id + '?qty=' + 1)
  }

  return loading ?
    <div>Loading...</div> :
    error ? <div>{error}</div> :
    <>
      {products.map((product: {
        col_id: number;
        title: string;
        item_id: number;
        name: string;
        price: number;
        imageUrl: string;
      }) => {
        if (product.item_id === parseInt(id)) {
          return (
            <ProductDetailWrapper key={product.item_id}>
              <ProductDetailImageWrapper>
                <ProductDetailImage src={product.imageUrl} alt={product.name} />
              </ProductDetailImageWrapper>
              <ProductDetailInfo>
                <ProductDetailInfoTextWrapper>
                  <ProductDetailInfoTextH4>{product.title}</ProductDetailInfoTextH4>
                  <ProductDetailInfoTextH1>{product.name}</ProductDetailInfoTextH1>
                  <ProductDetailInfoTextH3>${product.price}</ProductDetailInfoTextH3>
                </ProductDetailInfoTextWrapper>
                <Button onClick={handleAddToCart}>
                  Add To Bag
                </Button>
              </ProductDetailInfo>
            </ProductDetailWrapper>
          )
        }
        return ""
      })}
    </>
};

export default ProductDetail;
