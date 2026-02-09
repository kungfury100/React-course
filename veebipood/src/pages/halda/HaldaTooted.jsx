import { useState } from "react"
import { Link } from "react-router-dom"
import productsFromDb from "../../data/tooted.json"

function HaldaTooted() {
  const [products, setProducts] = useState(productsFromDb)

  const deleteProduct = (index) => {
    productsFromDb.splice(index, 1);
    setProducts(productsFromDb.slice());
  }
    return (
        <div>
          <br />
            <div>
                <Link to="/halda-autod">
                    <button>Halda autosid</button>
                </Link>
                <Link to="/halda-esindused">
                    <button>Halda esindusi</button>
                </Link>
                <Link to="/halda-hinnad">
                    <button>Halda hindu</button>
                </Link>
                <Link to="/halda-kasutajad">
                    <button>Halda kasutajaid</button>
                </Link>
                <Link to="/halda-tootajad">
                    <button>Halda töötajaid</button>
                </Link>
                <Link to="/halda-tooted">
                    <button>Halda tooteid</button>
                </Link>
            </div><br /><br /><br /><br />
            <table>
            <thead>
              <tr>
                <th>Jrk nr</th>
                <th>Index</th>
                <th>ID</th>
                <th>Toote nimi</th>
                <th>Hind</th>
                <th>Pilt</th>
                <th>Aktiivne</th>
                <th>Kustuta</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) =>
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{index}</td>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.image}</td>
                  <td>{product.active + 0}</td>
                  <td><button onClick={() => deleteProduct(index)}>Delete</button></td>
                  <td>
                    <Link to={"/muuda-toode/" + product.id}>
                      <button>Muuda toodet</button>
                    </Link>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
    )
}

export default HaldaTooted