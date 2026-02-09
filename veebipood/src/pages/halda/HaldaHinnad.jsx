import { useState } from "react"
import { Link } from "react-router-dom"
import pricesFromDb from "../../data/hinnad.json"

function HaldaHinnad() {
  const [prices, setPrices] = useState(pricesFromDb)

  const deletePrice = (index) => {
    pricesFromDb.splice(index, 1);
    setPrices(pricesFromDb.slice());
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
            <th>Hind</th>
            <th>Hind sõnana</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((price, index) =>
            <tr key={price.arv}>
              <td>{index + 1}</td>
              <td>{index}</td>
              <td>{price.arv}</td>
              <td>{price.sonana}</td>
              <td><button onClick={() => deletePrice(index)}>Delete</button></td>
              <td>
                <Link to={"/muuda-hind/" + price.arv}>
                  <button>Muuda hind</button>
                </Link>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaHinnad