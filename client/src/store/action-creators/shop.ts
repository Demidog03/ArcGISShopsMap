import {Dispatch} from "redux";
import {ShopAction, ShopActionTypes} from "../../types/shop.ts";
import {shopsData} from "../../data/shopsData.ts";

export function fetchShops(){
    return async function(dispatch: Dispatch<ShopAction>){
        try{
            dispatch({type: ShopActionTypes.FETCH_SHOPS})
            const response = new Promise<string>(res =>
                setTimeout(() => res(JSON.stringify(shopsData)), 1500));
            const data = await response;
            dispatch({type: ShopActionTypes.FETCH_SHOPS_SUCCESS, payload: JSON.parse(data)})
        }
        catch (err){
            dispatch({type: ShopActionTypes.FETCH_SHOPS_ERROR, payload: "Shops data fetching error"})
        }
    }
}
