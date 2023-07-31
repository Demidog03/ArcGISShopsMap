import {FC, useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import Loading from "../UI/loading/Loading.tsx";
import {useActions} from "../../hooks/useActions.ts";
import {useNavigate} from "react-router-dom"
import cl from "./ShopsList.module.css"

const ShopsList: FC = () => {
    const navigate = useNavigate()
    const { loading, error} = useTypedSelector(state => state.shop)
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
        <button className={cl.checkAllShopsBtn} onClick={() => navigate("/shops")}>Check All Shops</button>
    );
};

export default ShopsList;
