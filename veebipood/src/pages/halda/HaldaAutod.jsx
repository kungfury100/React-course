import { useState } from "react"
import { Link } from "react-router-dom"
import carsFromDb from "../../data/autod.json"

function HaldaAutod() {

    // const carsFromDb = ["Mercedes", "Ferrari", "Audi", "Toyota", "Honda", "BMW", "Jaguar", "Hyundai"]
    const [cars, setCars] = useState(carsFromDb)

    const deleteCar = (index) => {
        carsFromDb.splice(index,1);
        setCars(carsFromDb.slice());
    }

    return (
        <div>
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
                        <th>Auto nimi</th>
                        <th>Kustuta</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car, index) =>
                        <tr key={car}>
                            <td>{index+1}</td>
                            <td>{index}</td>
                            <td>{car}</td>
                            <td><button onClick={() => deleteCar(index)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default HaldaAutod