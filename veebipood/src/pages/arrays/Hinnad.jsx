import { useState } from "react"
import pricesFromDb from "../../data/hinnad.json"

function Hinnad() {
    // const pricesFromDb = [312, 12, 515, 5, 1, 935, 595, 5357, 855];
    const [prices, setPrices] = useState(pricesFromDb.slice());

    const reset = () => {
      setPrices(pricesFromDb.slice());
    }

    const sortAsc = () => {
      prices.sort((a, b) => a - b);
      setPrices(prices.slice());
    }

    const sortDesc = () => {
      prices.sort((a, b) => b - a);
      setPrices(prices.slice());
    }

    const filterLargerThan100 = () => {
      const result = prices.filter(price => price > 100);
      setPrices(result);
    }

    const filteSmallerThan1000 = () => {
      const result = prices.filter(price => price < 1000);
      setPrices(result);
    }

    return (
        <div>
            <div>Hindu kokku: {prices.length} tk</div>
            <button onClick={reset}>Reset</button>
            <br />
            <button onClick={sortAsc}>Sorteeri kasvavalt</button>
            <button onClick={sortDesc}>Sorteeri kahanevalt</button>
            <br />
            <button onClick={filterLargerThan100}>Jäta alles suuremad kui 100</button>
            <button onClick={filteSmallerThan1000}>Jäta alles väiksemad kui 1000</button>
            {prices.map(price => <div key={price}>{price}</div>)}
        </div>
    )
}

export default Hinnad