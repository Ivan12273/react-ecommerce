import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { listProducts } from "../../../redux/actions/productActions";
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

const ProductDetail = () => {
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  const { id } = useParams()

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch])

  return loading ?
    <div>Loading...</div> :
    error ? <div>{error}</div> :
    <>
      {products.map((product) => {
        if (product.item_id === parseInt(id)) {
          return (
            <>
              <ProductDetailWrapper>
                <ProductDetailImageWrapper>
                  <ProductDetailImage src={product.imageUrl} alt={product.name} />
                </ProductDetailImageWrapper>
                <ProductDetailInfo>
                  <ProductDetailInfoTextWrapper>
                    <ProductDetailInfoTextH4>{product.title}</ProductDetailInfoTextH4>
                    <ProductDetailInfoTextH1>{product.name}</ProductDetailInfoTextH1>
                    <ProductDetailInfoTextH3>${product.price}</ProductDetailInfoTextH3>
                  </ProductDetailInfoTextWrapper>
                  <Button>
                    Add To Bag
                  </Button>
                </ProductDetailInfo>
              </ProductDetailWrapper>
            </>
          )
        }
        return ""
      })}
    </>
};

export default ProductDetail;
