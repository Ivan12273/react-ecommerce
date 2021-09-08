import './CategoryStyles.css';
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../../redux/product/reducer';
import ItemCard from '../../ItemCard/ItemCard';

function Category () {

  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  const { category } = useParams()

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return loading ? <div>Loading... </div> :
  error ? <div>{error}</div> :
  <ul className="products">
    {
      products.map((product) => {
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
