import {FC, useEffect, useRef, useState} from 'react';
import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import shopsItemPoints from "../../components/shopsItem/shopsItemPoints.ts";

const ArcMapView: FC = () => {
    const {shops} = useTypedSelector(state => state.shop)
    const mapRef = useRef<HTMLDivElement>(null);
    const [location, setLocation] = useState<ILocation>({longitude: 0, latitude: 0})

    useEffect(() => {
        currentlocation()
    }, []);

    async function currentlocation() {
        navigator.geolocation.getCurrentPosition(
            position => setLocation({
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
            }),
            err => console.log(err)
        );
    }

    useEffect(() => {
        if(!mapRef?.current) return;
        if(shops.length===0) return;

        esriConfig.apiKey = "AAPK0f522d5847994aa49e35e0af6fb17514tqVefnadSGK707VEuudvipSZcs6CniVUSDPlalRYIQFRNj6QINiNwso8AEzcAzLi";

        const map = new Map({
            basemap: "arcgis-topographic" // Basemap layer service
        });
        const view = new MapView({
            map: map,
            center: [location?.longitude, location?.latitude], // Longitude, latitude
            zoom: 13, // Zoom level
            container: mapRef.current // Div element
        });

        const graphicsLayer = new GraphicsLayer()
        view.map.add(graphicsLayer)

        //Creating markers based on shops data
        const points = shops.map(shop => shopsItemPoints(shop))
        console.log(points)

        console.log(points)

        graphicsLayer.addMany(points)

        return () => view && view.destroy()
    }, [mapRef, location, shops]);

    return <div className="map-view" ref={mapRef}>

    </div>
};

export default ArcMapView;
