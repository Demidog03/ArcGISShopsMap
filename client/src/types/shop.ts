import {IShop} from "./types.ts";

export interface ShopState{
    shops: IShop[];
    loading: boolean;
    error: null | string;
}

export enum ShopActionTypes {
    FETCH_SHOPS = "FETCH_SHOPS",
    FETCH_SHOPS_SUCCESS = "FETCH_SHOPS_SUCCESS",
    FETCH_SHOPS_ERROR = "FETCH_SHOPS_ERROR",
}

interface FetchShopsAction{
    type: ShopActionTypes.FETCH_SHOPS;
}
interface FetchShopsSuccessAction{
    type: ShopActionTypes.FETCH_SHOPS_SUCCESS;
    payload: any[]
}
interface FetchShopsErrorAction{
    type: ShopActionTypes.FETCH_SHOPS_ERROR;
    payload: string;
}

export type ShopAction = FetchShopsAction | FetchShopsSuccessAction | FetchShopsErrorAction

