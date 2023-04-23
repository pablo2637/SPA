import { dummyJson } from "../apis/dummyJson";


export const fetchDataCategory = async (category) => {

    const data = {
        type: 'category',
        category
    };

    const { products } = await dummyJson(data);

    const productsCat = products.map(prod => ({
        id: prod.id,
        title: prod.title,
        description: prod.description,
        price: prod.price,
        discount: prod.discountPercentage,
        src: prod.images,
        alt: `Imagen de ${prod.title}`
    }));

    return productsCat;

};


export const fetchCategories = async () => {    

    const data = {
        type: 'categories'
    };

    const categories = await dummyJson(data);

    return categories;
};


export const fetchDataSearch = async (search) => {

    const data = {
        type: 'search',
        search
    }

    const { products } = await dummyJson(data);

    const productsCat = products.map(prod => ({
        id: prod.id,
        title: prod.title,
        category: prod.category,
        description: prod.description,
        price: prod.price,
        discount: prod.discountPercentage,
        src: prod.images,
        alt: `Imagen de ${prod.title}`
    }));

    return productsCat;
};


export const fetchDataByID = async (id) => {

    const data = {
        type: 'id',
        id
    }

    const prod = await dummyJson(data);

    const product = {
        id: prod.id,
        title: prod.title,
        description: prod.description,
        rating: prod.rating,
        price: prod.price,
        discount: prod.discountPercentage,
        src: prod.images,
        alt: `Imagen de ${prod.title}`
    };

    return product;
};