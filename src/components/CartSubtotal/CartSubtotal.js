import './CartSubtotalStyles.css';
import React from 'react'

function CartAction ({cartItems}) {

    const checkoutHandler = () => {
        // this.props.history.push("/")
    }

    return (
        <div className="cart-action">
            <h3>
                Subtotal ( { cartItems.reduce((a, c) => a + c.qty, 0) } items )
                :
                $ { cartItems.reduce((a, c) => a + c.price * c.qty, 0) }
            </h3>
            <button onClick={checkoutHandler} className="button primary" 
                disabled={cartItems.length === 0}
            >
                Proceed to Checkout
            </button>
        </div>
    )
}

export default CartAction
