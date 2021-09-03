import './CartSubtotalStyles.css';
import React from 'react'
import { Link } from 'react-router-dom';

function CartAction ({cartItems}) {
  return (
    <div className="cart-action">
      <h3>
        Subtotal ( { cartItems.reduce((a, c) => a + c.qty, 0) } items )
        :
        $ { cartItems.reduce((a, c) => a + c.price * c.qty, 0) }
      </h3>
      { cartItems.length <= 0 ?
        "" :
        <Link to="/checkout"  className="button-primary" 
            disabled={cartItems.length === 0}
        >
            Proceed to Checkout
        </Link>
      }
    </div>
  )
}

export default CartAction
