import { NavLink } from 'react-router-dom';


export const HomePage = () => {
  return (

    <section className="secPortada">

      <div>

        <img src='src/assets/SPA-small.png' alt="Imagen de Portada" />

        <div>
          <h1>
            <NavLink className="titulo" to='/login'>Práctica SPA</NavLink>
          </h1>
        </div>

      </div>

    </section>

  )
}
