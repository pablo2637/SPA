import { useContext, useEffect } from "react";
import { fetchCategories } from '../helpers/fetchData'
import { useNavigate } from 'react-router-dom';
import { UseContextCats } from '../contexts/UseContextCats';
import { UserContext } from "../contexts/UseContext";


export const Categories = () => {

    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const { cats, setCats } = useContext(UseContextCats);

    const getCategories = async () => {

        const data = await fetchCategories();

        setCats(data);
    }


    const handlerChange = ({ target }) => {
        navigate(`products/${target.value}`);
    }


    useEffect(() => {
        if (cats.length == 0) getCategories();
    }, []);

    return (
        <>
            {(user.id) &&

                < select name="categories" id="categories" onChange={handlerChange} >

                    {
                        (cats.length > 0) ?
                            cats.map(cat =>
                                <option key={cat} value={cat}>{cat}</option>
                            )
                            :
                            <option value="">No hay categorías</option>

                    }

                </select >


            }
        </>
    )

}
