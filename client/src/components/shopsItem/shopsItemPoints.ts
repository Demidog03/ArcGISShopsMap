import {IShop} from "../../types/types.ts";
import Point from "@arcgis/core/geometry/Point";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import Graphic from "@arcgis/core/Graphic";
const shopItemPoints = (shop: IShop) => {
    const point = new Point({
        longitude: shop.address.longitude,
        latitude: shop.address.latitude
    })


    const simpleMarkerSymbol = new SimpleMarkerSymbol({
        color: "blue"
    })
    const popupTemplate = {
        title: "{Name}",
        content: "{Description}",
    }
    const attributes = {
        Description: `<div class="shopPopupInfo">
            <img src="${shop.image}" alt="">
            <h2>${shop.address.title}</h2>
            <p class="description">${shop.description}</p>
            <p>Email: <a href="mailto: ${shop.contacts.email}">${shop.contacts.email}</a></p>
            <p>Phone: <a href="tel:${shop.contacts.phone}">${shop.contacts.phone}</a></p>
            <p>Socials: <a href="${shop.contacts.socialMedia}">${shop.contacts.socialMedia}</a></p>
        </div>`,
        Name: shop.title,
    }

    const urlParams = new URLSearchParams(location.search);
    const route = urlParams.get('');
    console.log(route);

    const graphicPoint = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol,
        attributes: attributes,
        popupTemplate: popupTemplate
    })

    return graphicPoint
};



export default shopItemPoints;
