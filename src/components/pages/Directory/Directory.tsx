import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../../redux/product/reducer';
import { ProductType } from '../../../TypeScript/products/types';
import ItemCard from '../../ItemCard/ItemCard';

function Directory() {

    const productList = useSelector((state: RootStateOrAny) => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    let currentCol = 0;
    let counter = 0;

    return loading ? <div>Loading... </div> :
    error ? <div>{error}</div> :
    <ul className="products">
        {
        products.map((product: ProductType) => {
            if (counter < 5) {
            currentCol = product.col_id 
            counter = counter + 1
            return (
                <ItemCard item={product} />
                )
            } else {
                if(currentCol !== product.col_id) {
                    counter = 1
                    return (
                        <ItemCard item={product} />
                    )
                } 
            }
            return null;
        })
        }
    </ul>
}

export default Directory;

