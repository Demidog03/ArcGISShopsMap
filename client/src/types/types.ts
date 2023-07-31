export interface IProduct{
    id: string;
    title: string;
    price: number;
}

export interface ICart{
    id: string;
    product_id: string;
    title: string;
    price: number;
}

export interface IShop{
    id: string;
    title: string;
    address: IAddress;
    contacts: IContacts;
    image: string;
    description: string;
    products: IProduct[];
}

interface IContacts {
    id: string;
    email?: string;
    phone?: string;
    socialMedia?: string;
}

interface IAddress{
    title: string;
    latitude: number;
    longitude: number;
}
