import { useEffect, useState } from "react";
import { fetchCategories } from '../helpers/fetchData'
import { useNavigate } from 'react-router-dom';

export const Categories = () => {

    const [categories, setCategories] = useState([])
    const navigate = useNavigate();


    const getCategories = async () => {

        const data = await fetchCategories();
        setCategories(data);
    }


    const handlerChange = ({ target }) => {
        navigate(`products/${target.value}`);
    }


    useEffect(() => {
        getCategories();
    }, []);

    return (
        <select name="categories" id="categories" onChange={handlerChange}>
            
            {
                (categories.length > 0) ?
                    categories.map(cat =>
                        <option key={cat} value={cat}>{cat}</option>
                    )
                    :
                    <option value="">No hay categorías</option>
            }

        </select>
    )
}
