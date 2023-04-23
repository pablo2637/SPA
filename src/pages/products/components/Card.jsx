import { useNavigate } from 'react-router-dom';


export const Card = ({ id, title, src, price, alt, discount }) => {

    const navigate = useNavigate();

    return (
        <article>
            <h3>{title}</h3>

            <div>                
                {src.map((imgSrc, ind) =>
                    <img className={(ind == 0) ? '' : 'ocultar'} key={imgSrc} src={imgSrc} alt={alt} />
                )}
                
            </div>

            <p>Precio: <span>{price}€</span></p>
            <p>Descuento: <span>{discount}%</span></p>
            <p>Precio con descuento:<span> {(price - ((discount * price) / 100)).toFixed(2)}€</span></p>

            <div>
                <button onClick={() => navigate(`/detail/${id}`)}>Más Info</button>
            </div>

        </article >
    );
};
