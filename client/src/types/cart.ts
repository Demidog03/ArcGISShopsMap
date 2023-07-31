import {ICart} from "./types.ts";

export interface CartState{
    products: ICart[];
}

export enum CartActionTypes {
    ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
    REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART"
}

interface AddProductToCardAction{
    type: CartActionTypes.ADD_PRODUCT_TO_CART;
    payload: ICart
}
interface RemoveProductFromCardAction{
    type: CartActionTypes.REMOVE_PRODUCT_FROM_CART;
    payload: string
}

export type CartAction = AddProductToCardAction | RemoveProductFromCardAction

