import { useState } from "react"
import { Link } from "react-router-dom"
import esindusedFromDb from "../../data/esindused.json"


function HaldaEsindused() {

    const [esindused, setEsindused] = useState(esindusedFromDb)

    const deleteEsindus = (index) => {
        esindusedFromDb.splice(index,1);
        setEsindused(esindusedFromDb.slice());
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
                        <th>Nimi</th>
                        <th>Aadress</th>
                        <th>Telefon</th>
                        <th>Kustuta</th>
                    </tr>
                </thead>
                <tbody>
                    {esindused.map((esindus, index) =>
                        <tr key={esindus}>
                            <td>{index+1}</td>
                            <td>{index}</td>
                            <td>{esindus.nimi}</td>
                            <td>{esindus.aadress}</td>
                            <td>{esindus.telefon}</td>
                            <td><button onClick={() => deleteEsindus(index)}>X</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default HaldaEsindused