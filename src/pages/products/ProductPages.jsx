import { useEffect, useState } from "react";
import { fetchDataCategory } from '../../helpers/fetchData';
import { Card } from "./components/Card";
import { useParams } from 'react-router-dom';


export const ProductPages = () => {


    const [products, setProducts] = useState([]);
    const { category } = useParams();
    const [last, setLast] = useState('');


    const getProducts = async () => {

        const data = await fetchDataCategory(category);

        setProducts(data);
        setLast(category);
    }


    useEffect(() => {

        if (last != category) getProducts();
    });


    return (
        <>
            <h2>{category}</h2>

            <section className="secProducts">

                {products.map(product =>
                    <Card key={product.id} {...product} />
                )}

            </section>

        </>
    )

}
