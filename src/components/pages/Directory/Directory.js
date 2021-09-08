import './DirectoryStyles.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../../redux/product/reducer';

function Directory() {

    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    let currentCol = 0;
    let counter = 0;

    return loading ? <div>Loading... </div> :
    error ? <div>{error}</div> :
    <ul className="directory-products">
        {
        products.map((product) => {
            if (counter < 5) {
            currentCol = product.col_id 
            counter = counter + 1
            return (
                <li key={product.item_id}>
                <div className="directory-product">
                    <Link to={'/product/' + product.item_id}>
                        <img className="directory-product-image" src={product.imageUrl} alt="product" />
                    </Link>
                    <div className="directory-product-name">
                    <Link to={'/product/' + product.item_id}>{product.name}</Link>
                    </div>
                    <div className="directory-product-brand">{product.title}</div>
                    <div className="directory-product-price">${product.price}</div>
                </div>
                </li>
                )
            } else {
                if(currentCol !== product.col_id) {
                    counter = 1
                    return (
                        <li key={product.item_id}>
                        <div className="directory-product">
                            <Link to={'/product/' + product.item_id}>
                                <img className="directory-product-image" src={product.imageUrl} alt="product" />
                            </Link>
                            <div className="directory-product-name">
                            <Link to={'/product/' + product.item_id}>{product.name}</Link>
                            </div>
                            <div className="directory-product-brand">{product.title}</div>
                            <div className="directory-product-price">${product.price}</div>
                        </div>
                        </li>
                    )
                } 
            }
            return null;
        })
        }
    </ul>
}

export default Directory;

