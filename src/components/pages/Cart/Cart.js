import './CartStyles.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import { addToCart, removeFromCart } from '../../../redux/actions/cartActions';

function Cart (props) {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const { id } = useParams();
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    useEffect(() => {
        if(id) {
            dispatch(addToCart(parseInt(id), qty));
        }
    }, []);

    const checkoutHandler = () => {
        props.history.push("/")
    }

    return <div className="cart">
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h3>
                        Shopping Cart
                    </h3>
                    <div>
                        Price
                    </div>
                </li>
                {
                    cartItems.length === 0 ?
                    <div>
                        Cart is empty
                    </div>
                    :
                    cartItems.map( item => 
                        <li>
                            <div className="cart-image">
                                <img src={item.imageUrl} alt="product" />
                            </div>
                            <div className="cart-name">
                                <div>
                                    <Link to={"/product/" + item.item_id }>
                                        {item.name}
                                    </Link>
                                </div>
                                <div>
                                    Qty: 
                                    <select value={item.qty} onChange={(e) => dispatch(addToCart(item.item_id, parseInt(e.target.value)))}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <button type="button" className="button" onClick={() => removeFromCartHandler(item.item_id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                            <div className="cart-price">
                                ${item.price}
                            </div>
                        </li>    
                    )
                }
            </ul>
        </div>
        <div className="cart-action">
            <h3>
                Subtotal ( { cartItems.reduce((a, c) => a + c.qty, 0) } items )
                :
                $ { cartItems.reduce((a, c) => a + c.price * c.qty, 0) }
            </h3>
            <button onClick={checkoutHandler} className="button primary" disabled={cartItems.length === 0}>
                Proceed to Checkout
            </button>
        </div>
    </div>
}

export default Cart;
