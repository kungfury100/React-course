import { useState } from "react"
import { Link } from "react-router-dom"
import pricesFromDb from "../../data/hinnad.json"

function Hinnad() {
    // const pricesFromDb = [312, 12, 515, 5, 1, 935, 595, 5357, 855];
    const [prices, setPrices] = useState(pricesFromDb.slice());

    const reset = () => {
      setPrices(pricesFromDb.slice());
    }

    const sortAsc = () => {
      prices.sort((a, b) => a.arv - b.arv);
      setPrices(prices.slice());
    }

    const sortDesc = () => {
      prices.sort((a, b) => b.arv - a.arv);
      setPrices(prices.slice());
    }

    const filterLargerThan100 = () => {
      const result = pricesFromDb.filter(price => price.arv > 100);
      setPrices(result);
    }

    const filteSmallerThan1000 = () => {
      const result = pricesFromDb.filter(price => price.arv < 1000);
      setPrices(result);
    }

    const arvutaKokku = () => {
      let summa = 0;
      prices.forEach(price => summa = summa + price.arv);
      return summa;
    }

    const otsi = (searchedValue) => {
      const result = pricesFromDb.filter(price => price.sonana.includes(searchedValue));
      setPrices(result);
    }

    return (
        <div>
          <br />
            <div>
              <Link to="/autod">
                  <button>Autod</button>
              </Link>
              <Link to="/esindused">
                  <button>Esindused</button>
              </Link>
              <Link to="/hinnad">
                  <button>Hinnad</button>
              </Link>
              <Link to="/kasutajad">
                  <button>Kasutajad</button>
              </Link>
              <Link to="/tootajad">
                  <button>Töötajad</button>
              </Link>
              <Link to="/tooted">
                  <button>Tooted</button>
              </Link>
            </div><br /><br /><br />
            <label htmlFor="">Otsi </label>
            <input onChange={(e) => otsi(e.target.value)} type="text" />
            <div>Hindu kokku: {prices.length} tk</div>
            <button onClick={reset}>Reset</button>
            <br />
            <button onClick={sortAsc}>Sorteeri kasvavalt</button>
            <button onClick={sortDesc}>Sorteeri kahanevalt</button>
            <br />
            <button onClick={filterLargerThan100}>Jäta alles suuremad kui 100</button>
            <button onClick={filteSmallerThan1000}>Jäta alles väiksemad kui 1000</button>
            {prices.map(price => <div key={price.arv}>{price.arv} - {price.sonana}</div>)}
            <div>Kõik hinnad kokku: {arvutaKokku()}</div>
        </div>
    )
}

export default Hinnad