import {combineReducers} from "redux";
import {shopReducer} from "./shopReducer.ts";
import {cartReducer} from "./cartReducer.ts";

export const rootReducer = combineReducers({
    shop:shopReducer,
    cart:cartReducer
})

export type RootState = ReturnType<typeof rootReducer>
