import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../../constants/cartConstants";

const addToCart = (productId, qty) => async (dispatch) => {
    try {
        const { data } = await axios.get('/api/store/collections');
        const product = data.data.find(x => x.item_id === productId);

        dispatch({
            type: CART_ADD_ITEM, 
            payload: {
                col_id: product.col_id,
                title: product.title,
                item_id: product.item_id,
                name: product.name,
                price: product.price,
                imageUrl: product.imageUrl,
                qty,
            }
        });
    } catch (error) {

    }
}

const removeFromCart = (id) => (dispatch) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: id });
}

export { addToCart, removeFromCart };
