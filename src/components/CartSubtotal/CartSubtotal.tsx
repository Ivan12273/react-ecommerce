import './CartSubtotalStyles.css';
import { Link } from 'react-router-dom';
import { Product } from '../../types/Product';

type Props = {
  cartItems: Product[]
}

function CartAction ( { cartItems }: Props) {
  return (
    <div className="cart-action">
      <h3>
        Subtotal ({ cartItems.reduce((a, c) => a + c!.qty, 0) } items):
        ${ cartItems.reduce((a, c) => a + c!.price * c!.qty, 0) }
      </h3>
      { cartItems.length <= 0 ?
        "" :
        <Link to="/checkout"  className="button-primary">
          Proceed to Checkout
        </Link>
      }
    </div>
  )
}

export default CartAction
