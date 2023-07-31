import {FC} from 'react';
import ArcMapView from "../ArcGIS-components/ArcMapView/ArcMapView.tsx";
import ShopsList from "../components/shopsList/ShopsList.tsx";
const MapPage: FC = () => {


    return (
       <>
           <div>
               <ShopsList/>
           </div>
           <ArcMapView/>
       </>
    );
};

export default MapPage;
