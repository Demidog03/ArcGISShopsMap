import * as ShopActionCreators from "./shop"
import * as CartActionCreators from "./cart"
//P.S. For future action creators
//Combining several actions into one
export default {
    ...ShopActionCreators,
    ...CartActionCreators
}
