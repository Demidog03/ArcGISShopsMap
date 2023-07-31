import {CartAction, CartActionTypes, CartState} from "../../types/cart.ts";

const initialState: CartState = {
    products: [],
}

export function cartReducer(state = initialState, action: CartAction): CartState{
    switch (action.type){
        case CartActionTypes.ADD_PRODUCT_TO_CART:
            return {...state, products: [...state.products, action.payload]}
        case CartActionTypes.REMOVE_PRODUCT_FROM_CART:
            return {...state, products: state.products.filter(p => p.id !== action.payload)}
        default:
            return state
    }
}

