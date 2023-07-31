import {CartAction, CartActionTypes} from "../../types/cart.ts";
import {ICart} from "../../types/types.ts";
import {Dispatch} from "redux";

export function addProductToCart(data: ICart){
    return async function(dispatch: Dispatch<CartAction>){
        dispatch({type: CartActionTypes.ADD_PRODUCT_TO_CART, payload: data})
    }
}
export function removeProductFromCart(id: string){
    return async function(dispatch: Dispatch<CartAction>){
        dispatch({type: CartActionTypes.REMOVE_PRODUCT_FROM_CART, payload: id})
    }
}
