import { Link, useNavigate } from 'react-router-dom'


export const Card = ({ id, title, src, price, alt, discount }) => {

    const navigate = useNavigate();

    return (
        <article>
            <h3>{title}</h3>

            <div>
                {src.map(imgSrc =>
                    <img key={imgSrc} src={imgSrc} alt={alt} />
                )}
            </div>
            <p>Precio: {price}€</p>
            <p>Descuento: {discount}%</p>
            <p>Precio con descuento: {(price - ((discount * price) / 100)).toFixed(2)}€</p>

            <button onClick={() => navigate(`/detail/${id}`)}>Más Info</button>

        </article >
    )
}
