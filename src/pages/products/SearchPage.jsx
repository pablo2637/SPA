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
    <div>

      <Find getText={getText} />

      <section>
        {(products.length > 0) ?

          <>
            {(products.length == 1) ?
              <h3>Se ha encontrado 1 artículo...</h3>
              :
              <h3>Se han encontrado {products.length} artículos...</h3>
            }

            {products.map(product =>
              <Card key={product.id} {...product} />
            )}
          </>

          :
          
          <>
            {
              (searchText != '') ?
                <h3>No hay resultados para tu búsqueda...</h3>
                :
                <h3>Aún no has buscado nada...</h3>
            }
          </>

        }
      </section>

    </div>
  )

};
