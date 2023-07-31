import {FC} from 'react';
import cl from './CartPage.module.css'
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import trashCanPng from "../../assets/trash-can.png"
import {useActions} from "../../hooks/useActions.ts";

const CartPage:FC = () => {
    const {products} = useTypedSelector(state => state.cart)
    const {removeProductFromCart} = useActions()

    if(products.length===0){
        return <h1 className={cl.emptyPlaceholder}>No products in cart</h1>
    }

    return (
        <div className={cl.cart}>
            <div className={cl.wrapper}>
                {products.map(product =>
                    <div className={cl.productItem}>
                        <h1 className={cl.id}>Id: {product.id}</h1>
                        <h1 className={cl.product_id}>Product_id: {product.product_id}</h1>
                        <h1 className={cl.title}>Title: {product.title}</h1>
                        <h1 className={cl.price}>Price: ${product.price}</h1>
                        <img onClick={() => removeProductFromCart(product.id)} src={trashCanPng} alt=""/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
