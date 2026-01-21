import { useState } from "react"
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