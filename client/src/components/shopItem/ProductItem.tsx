import {FC, useEffect, useState} from 'react';
import {IProduct} from "../../types/types.ts";
import addToCardPng from '../../assets/add-to-cart.png'
import cl from "./ProductItem.module.css"
import {useActions} from "../../hooks/useActions.ts";
interface ProductItemProps {
    product: IProduct;
    index: number
}

const ProductItem: FC<ProductItemProps> = ({product, index}) => {
    const [active, setActive] = useState<boolean>(false)
    const {addProductToCart} = useActions()

    const activeStyles = {
        zIndex: "inherit",
        opacity: 1
    }

    useEffect(() => {
        if(active===true){
            setTimeout(() => {
                setActive(false)
            }, 1000)
        }
    }, [active]);

    return (
        <div className={cl.productWrapper}>
            <div onClick={() => {addProductToCart({...product, product_id: product.id, id: String(Date.now())}); setActive(true)}} className={cl.product}>{index+1}. {product.title} - ${product.price} <img src={addToCardPng} alt=""/></div>
            <div style={active ? activeStyles : {}} className={cl.alert}>Product added!</div>
        </div>
    );
};

export default ProductItem;
