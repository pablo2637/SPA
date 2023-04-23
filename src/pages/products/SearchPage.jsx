import { Find } from "./components/Find"
import { useState } from "react";
import { fetchDataSearch } from '../../helpers/fetchData'
import { Card } from "./components/Card";

export const SearchPage = () => {

  const [products, setProducts] = useState([]);

  const [searchText, setSearchText] = useState('')

  const getText = async (findText) => {

    setSearchText(findText);
    const data = await fetchDataSearch(findText);

    setProducts(data);
  };


  return (

    <>

      <h2>Buscador</h2>

      <section className="secSearch">

        <Find getText={getText} />

        <section>

          <h3>Resultados:</h3>
          {(products.length > 0) ?

            <div>
              <div>
                {(products.length == 1) ?
                  <p>Se ha encontrado 1 artículo...</p>
                  :
                  <p>Se han encontrado {products.length} artículos...</p>
                }
              </div>

              {products.map(product =>
                <Card key={product.id} {...product} />
              )}
            </div>

            :

            <div>
              <div>
                {
                  (searchText != '') ?
                    <p>No hay resultados para tu búsqueda...</p>
                    :
                    <p>Aún no has buscado nada...</p>
                }
              </div>
            </div>

          }

        </section>

      </section>

    </>
  )

};
