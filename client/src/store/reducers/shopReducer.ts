import {ShopAction, ShopActionTypes, ShopState} from "../../types/shop.ts";

const initialState: ShopState = {
    shops: [],
    loading:false,
    error: null
}

export function shopReducer(state = initialState, action: ShopAction): ShopState{
    switch (action.type){
        case ShopActionTypes.FETCH_SHOPS:
            return {...state, loading: true}
        case ShopActionTypes.FETCH_SHOPS_SUCCESS:
            return {...state, loading: false, shops: action.payload}
        case ShopActionTypes.FETCH_SHOPS_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}
