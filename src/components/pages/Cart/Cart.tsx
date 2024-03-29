import './CartStyles.css';
import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { addToCart } from '../../../redux/cart/reducer';
import CartItem from '../../CartItem/CartItem';
import CartSubtotal from '../../CartSubtotal/CartSubtotal';
import { LocationProps } from '../../../types/LocationProps';
import { ItemParam } from '../../../types/ItemParam';
import { Product } from '../../../types/Product';

function Cart (props: LocationProps) {

    const cart = useSelector((state: RootStateOrAny) => state.cart);
    const { cartItems } = cart;

    const { id } = useParams<ItemParam>();
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();

    useEffect(() => {
        if(id) {
            dispatch(addToCart({ id, qty }));
        }
    }, [dispatch, id, qty]);

    return <div className="cart">
        <div className="cart-list">
            <ul className="cart-list-container">
                <h1 className="cart-title">Shopping Cart</h1>
                {cartItems.length === 0 ? 
                    <div>Cart is empty</div>
                    :
                    cartItems.map( (item: Product) => {
                        return <CartItem key={item?.item_id} item={item} />;
                    })
                }
            </ul>
        </div>
        <CartSubtotal cartItems={cartItems} />
    </div>
}

export default Cart;
