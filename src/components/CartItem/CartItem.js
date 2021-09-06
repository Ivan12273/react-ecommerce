import './CartItemStyles.css';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart } from '../../redux/cart/reducer';

function CartItem(item) {

    const dispatch = useDispatch();
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const addMoreItemsToCart = (id, qty) => {
        dispatch(addToCart({ id, qty }))
    }
    
    return (
        <li>
            <div className="cart-image">
                <img src={item.imageUrl} alt="product" />
            </div>
            <div className="cart-name">
                <div>
                    <Link to={"/product/" + item.item_id}>
                        {item.name}
                    </Link>
                </div>
                <div>
                    Qty:
                    <select value={item.qty}
                        onChange={(e) => 
                            addMoreItemsToCart(item.item_id, parseInt(e.target.value) - item.qty)
                        }
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </select>
                    <button type="button" className="button" 
                        onClick={() => 
                            removeFromCartHandler(item.item_id)
                        }
                    >
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

export default CartItem;
