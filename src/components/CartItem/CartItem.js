import './CartItemStyles.css';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';

function CartItem(item) {

    const dispatch = useDispatch();
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
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
                            dispatch(addToCart(item.item_id, parseInt(e.target.value)))
                        }
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
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