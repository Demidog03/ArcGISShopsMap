import {FC, useState} from 'react';
import {IShop} from "../../types/types.ts";
import cl from "./ShopsCard.module.css"
import Modal from "../UI/modal/Modal.tsx";
import ProductItem from "../shopItem/ProductItem.tsx";

interface ShopsCardProps {
    shop: IShop;
}
const ShopsCard: FC<ShopsCardProps> = ({shop}) => {
    const [cardClicked, setCardClicked] = useState<boolean>(false)

    return (
        <div className={cl.card}>
            <img className={cl.baseImage} src={shop.image} alt=""/>
            <div className={cl.wrapper}>
                <h2>{shop.title}</h2>
                <p><b>Address:</b> {shop.address.title}</p>
                <p className={cl.description}>{shop.description}</p>
                <p><b>Email:</b> <a href={"mailto: " + shop.contacts.email}>{shop.contacts.email}</a></p>
                <p><b>Phone:</b> <a href={"tel:" + shop.contacts.phone}>{shop.contacts.phone}</a></p>
                <p><b>Socials:</b> <a href={shop.contacts.socialMedia}>{shop.contacts.socialMedia}</a></p>
                <button className={cl.productsBtn} onClick={() => setCardClicked(true)}>Products</button>
            </div>
            <Modal visible={cardClicked} setVisible={setCardClicked}>
                {shop.products.map((product, index) => <ProductItem key={product.id} index={index} product={product}/>)}
            </Modal>
        </div>
    );
};

export default ShopsCard;
