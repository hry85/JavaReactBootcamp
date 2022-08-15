import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems: cartItems
};
export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            let book = state.cartItems.find(c => c.id === payload.id)
            if (book) {
                book.quantity++;
                return {
                    ...state,
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { quantity: 1, book: payload }],
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((c) => c.book.id !== payload.id),
            };
        default:
            return { ...state };
    }
}
