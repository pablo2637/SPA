
export const BigCard = ({ description, rating, title, src, price, alt, discount }) => {

    return (
        <article>

            <div>
                {src.map((imgSrc, ind) =>
                    <img className={(ind == 0) ? '' : 'ocultar'} key={imgSrc} src={imgSrc} alt={alt} />
                )}
            </div>

            <div>

                <h3>{title}</h3>

                <p>{description}</p>
                <p>Precio: <span>{price}€</span></p>
                <p>Descuento: <span>{discount}%</span></p>
                <p>Precio con Descuento: <span>{(price - ((discount * price) / 100)).toFixed(2)}€</span></p>
                <p>Valoración: <span>{rating}</span></p>
            </div>

        </article>
    )
}
