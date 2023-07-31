import {FC, useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import {useActions} from "../../hooks/useActions.ts";
import Loading from "../../components/UI/loading/Loading.tsx";
import ShopsCard from "../../components/shopsCard/ShopsCard.tsx";
import cl from "./ShopsPage.module.css"

const ShopsPage: FC = () => {
    const {shops, loading, error} = useTypedSelector(state => state.shop)
    const {fetchShops} = useActions()

    useEffect(() => {
        fetchShops()
    }, []);

    if(loading){
        return <Loading loading={loading} size={20} color="#F4EEE0"/>
    }
    if(error){
        return <h1>{error}</h1>
    }

    return (
        <div className={cl.cards}>
            <h1>All Shops</h1>
            <div className={cl.cardsWrapper}>
                {shops.map(shop => <ShopsCard shop={shop}/>)}
            </div>
        </div>
    );
};

export default ShopsPage;
