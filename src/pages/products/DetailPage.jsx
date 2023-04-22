import { fetchDataByID } from '../../helpers/fetchData'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { BigCard } from './components/BigCard';

export const DetailPage = () => {


    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    const id = useParams();


    const getProduct = async () => {

        const data = await fetchDataByID(id.id);
        setProduct(data);
    }


    useEffect(() => {
        getProduct();
    }, []);


    return (
        <article>
            <button onClick={() => navigate(-1)} >Atrás</button>
            {(product.id) ?
                <BigCard {...product} />
                :
                <h3>
                    Cargando...
                </h3>

            }

        </article>
    )
}
