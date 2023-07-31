import {FC} from 'react';
import cl from './Header.module.css'
import {Link, useNavigate} from "react-router-dom";
import cartPng from "../../assets/grocery-store.png"
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
const Header: FC = () => {
    const navigate = useNavigate()
    const {products} = useTypedSelector(state => state.cart)

    return (
        <header className={cl.header}>
            <Link to="/"><h1 className={cl.title}>ArcGIS Shops Map</h1></Link>
            <nav>
                <Link to="/"><a href="">Map</a></Link>
                <Link to="/shops"><a href="">All Shops</a></Link>
            </nav>
            <div onClick={() => navigate("/cart")} className={cl.cartIcon}>
                <img src={cartPng} alt=""/>
                <p>{products.length}</p>
            </div>
        </header>
    );
};

export default Header;
