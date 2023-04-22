
export const BigCard = ({ id, description, rating, title, src, price, alt, discount }) => {

    return (
        <article>

            <div>
                {src.map(imgSrc =>
                    <img key={imgSrc} src={imgSrc} alt={alt} />
                )}
            </div>

            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>Precio: {price}€</p>
                <p>Descuento: {discount}%</p>
                <p>Precio con Descuento: {(price - ((discount * price) / 100)).toFixed(2)}€</p>
                <p>Valoración: {rating}</p>

            </div>

        </article>
    )
}
