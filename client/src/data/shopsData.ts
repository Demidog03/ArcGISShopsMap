import {IShop} from "../types/types.ts";

export const shopsData: IShop[] = [
    {
        id: "1",
        title: "Mechta",
        description: "Some description of the shop.",
        image: "https://bizmedia.kz/wp-content/uploads/2022/03/623674f92deda37a-1024x576.jpeg",
        address: {title: "Kazakhstan, 010000 Astana, улица Алматы, 3, SAURAN ТЦ", latitude: 51.11826881997242, longitude: 71.41594609174486},
        contacts: {id: "1", email: "test@gmail.com", phone: "87771112233", socialMedia: "instagram.com"},
        products: [
            {id: "1", title: "Laptop", price: 450},
            {id: "2", title: "Smartphone", price: 230},
            {id: "7", title: "Headphones", price: 90}
        ]
    },
    {
        id: "2",
        title: "Anvar",
        description: "Some description of the shop.",
        image: "https://www.anvar.kz/upload/iblock/6b3/gwe2xxwp1u2pvccj11cj03nvemizsacl/turan.jpg",
        address: {title: "Kazakhstan, Astana, 0Заречный, улица Алматы, 510000 Astana", latitude: 51.11787303245423, longitude: 71.41792550992854},
        contacts: {id: "2", email: "test@gmail.com", phone: "87771112233", socialMedia: "instagram.com"},
        products: [
            {id: "3", title: "Bread", price: 5},
            {id: "4", title: "Milk", price: 15},
            {id: "5", title: "Coffee", price: 12},
            {id: "6", title: "Eggs", price: 21},
        ]
    },
    {
        id: "3",
        title: "Yotto",
        description: "Some description of the shop.",
        image: "https://avatars.mds.yandex.net/get-altay/4449685/2a0000018206c91ac67ec21544252bc463fd/L_height",
        address: {title: "Kazakhstan, Astana, 010000 Astana, Kabanbay Batyr Avenue, 49А, Жилой комплекс \"Alau\"", latitude: 51.10081839640705, longitude: 71.40545408108117},
        contacts: {id: "3", email: "test@gmail.com", phone: "87771112233", socialMedia: "instagram.com"},
        products: [
            {id: "8", title: "Vitamins", price: 23},
            {id: "9", title: "Buds", price: 35},
        ]
    },
    {
        id: "4",
        title: "Small",
        description: "Some description of the shop.",
        image: "https://small.kz/images/rent/shops/shop2.png",
        address: {title: "Kazakhstan, Astana, 010000 Astana, Kabanbay Batyr Avenue, 6/2, ТЦ \"Каскад\"", latitude: 51.14600833549105, longitude: 71.42395242244368},
        contacts: {id: "4", email: "test@gmail.com", phone: "87771112233", socialMedia: "instagram.com"},
        products: [
            {id: "10", title: "Drinks", price: 23},
            {id: "11", title: "Candies", price: 35},
        ]
    },
    {
        id: "5",
        title: "Bao Bao",
        description: "Some description of the shop.",
        image: "https://redtable.kz/wp-content/uploads/2019/05/bao-bao-%D0%B0%D1%81%D1%82%D0%B0%D0%BD%D0%B0-5.jpg",
        address: {title: "Kazakhstan, Astana, 010000 Astana, Kabanbay Batyr Avenue, 5", latitude: 51.14496156854413, longitude: 71.41907470104573},
        contacts: {id: "4", email: "test@gmail.com", phone: "87771112233", socialMedia: "instagram.com"},
        products: [
            {id: "12", title: "Hot Meal", price: 12},
            {id: "13", title: "Water", price: 45},
        ]
    },
]
