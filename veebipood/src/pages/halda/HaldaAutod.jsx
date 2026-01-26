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
                        <th>ID</th>
                        <th>Nimi</th>
                        <th>Hind</th>
                        <th>Pilt</th>
                        <th>Aktiivne</th>
                        <th>Kustuta</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car, index) =>
                        <tr key={car.id}>
                            <td>{index+1}</td>
                            <td>{car.id}</td>
                            <td>{car.name}</td>
                            <td>{car.price}</td>
                            <td>{car.image}</td>
                            <td>{car.active + 0}</td>
                            <td><button onClick={() => deleteCar(index)}>X</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default HaldaAutod