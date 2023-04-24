import { useEffect, useState } from "react";
import { fetchDataCategory } from '../../helpers/fetchData';
import { Card } from "./components/Card";
import { useParams } from 'react-router-dom';

export const ProductPages = () => {

    const { category } = useParams();
    const [products, setProducts] = useState([]);


    const getProducts = async () => {

        let data = await fetchDataCategory(category);

        setProducts(data);
    };


    useEffect(() => {

        getProducts();

    }, [category]);


    return (
        <>
            <h2>{category}</h2>

            <section className="secProducts">

                {products.map(product =>
                    <Card key={product.id} {...product} />
                )}

            </section>

        </>
    );

};
