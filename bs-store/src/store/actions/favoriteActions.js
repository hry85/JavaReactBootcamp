export const ADD_TO_FAVORITES="ADD_TO_FAVORITES"
export const REMOVE_FROM_FAVORITES="REMOVE_FROM_FAVORITES"

export function addToFavorites(book){
      return { type: ADD_TO_FAVORITES, payload: book };
}

export function removeFromFavorites(book){
    return { type: REMOVE_FROM_FAVORITES, payload: book };
}
