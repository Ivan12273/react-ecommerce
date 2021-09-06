import './CategoryStyles.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../../redux/product/reducer';

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
            <li key={product.item_id}>
              <div className="product">
                <Link to={'/product/' + product.item_id}>
                    <img className="product-image" src={product.imageUrl} alt="product" />
                </Link>
                <div className="product-name">
                  <Link to={'/product/' + product.item_id}>{product.name}</Link>
                </div>
                <div className="product-brand">{product.title}</div>
                <div className="product-price">${product.price}</div>
              </div>
            </li>
            )
          }
          return null;
      })
    }
  </ul>
}

export default Category;
