import {
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES
} from "../actions/favoriteActions";
import { favorites } from "../initialValues/favoriteItems";

const initialState = {
    favorites: favorites
};
export default function favoriteReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_FAVORITES:
            let book = state.favorites.find(f => f.id === payload.id)
            if (book) {
                book.quantity++;
                return {
                    ...state,
                }
            } else {
                return {
                    ...state,
                   favorites: [...state.favorites, { quantity: 1, book: payload }],
                }
            }
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
              favorites: state.favorites.filter((f) => f.book.id !== payload.id),
            };
        default:
            return { ...state };
    }
}