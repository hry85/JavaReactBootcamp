import{
    ADD_TO_CART,
    REMOVE_FROM_CART
} from"../actions/cartActions";
import{carts} from "../initialValues/cartItems";

const initialState={
    carts,
};
export default function cartReducer(state = initialState,{type,payload}){
    switch(type){
        case ADD_TO_CART:
            return {
                ...state,
                cart:state.carts.filter((book)=>{
                    return book.id === payload;
                }),
            };
        case REMOVE_FROM_CART:
            return{
                ...state,
        books: state.books.filter((book) => book.id !== payload),
      };
            }
   }
