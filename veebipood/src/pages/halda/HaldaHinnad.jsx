import { useState } from "react"
import pricesFromDb from "../../data/hinnad.json"

function HaldaHinnad() {

    const [prices, setPrices] = useState(pricesFromDb)

    const deletePrice = (index) => {
        pricesFromDb.splice(index,1);
        setPrices(pricesFromDb.slice());
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Jrk nr</th>
                        <th>Index</th>
                        <th>Hind</th>
                        <th>Kustuta</th>
                    </tr>
                </thead>
                <tbody>
                    {prices.map((price, index) =>
                        <tr key={price}>
                            <td>{index+1}</td>
                            <td>{index}</td>
                            <td>{price}</td>
                            <td><button onClick={() => deletePrice(index)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default HaldaHinnad