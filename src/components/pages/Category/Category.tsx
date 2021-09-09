import './CategoryStyles.css';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../../redux/product/reducer';
import ItemCard from '../../ItemCard/ItemCard';
import { CategoryItem } from '../../../types/CategoryItem';

function Category () {

  const productList = useSelector((state: RootStateOrAny) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  const { category } = useParams<CategoryItem>();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return loading ? <div>Loading... </div> :
  error ? <div>{error}</div> :
  <ul className="products">
    {
      products.map((product: { title: string; }) => {
        if (product.title === category) {
          return (
              <ItemCard item={product} />
            )
          }
          return null;
      })
    }
  </ul>
}

export default Category;
