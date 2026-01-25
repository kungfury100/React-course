import { useState } from "react"
import { Link } from "react-router-dom"
import carsFromDb from "../../data/autod.json"

function Autod() {
    // const carsFromDb = ["Mercedes", "Ferrari", "Audi", "Toyota", "Honda", "BMW", "Jaguar", "Hyundai"]
    const [cars, setCars] = useState(carsFromDb.slice())
  
  const sortAZ = () => {
    cars.sort((a, b) => a.localeCompare(b));
    setCars(cars.slice());
  }

  const sortZA = () => {
    cars.sort((a, b) => b.localeCompare(a));
    setCars(cars.slice());
  }

  const sortLettersAsc = () => {
    cars.sort((a, b) => a.length - b.length);
    setCars(cars.slice());
  }

  const sortLettersDesc = () => {
    cars.sort((a, b) => b.length - a.length);
    setCars(cars.slice());
  }

  const sortLettersAZ = () => {
    cars.sort((a, b) => a[2].localeCompare(b[2]));
    // cars.sort((a, b) => a.at(2).localeCompare(b.at(2)));
    // cars.sort((a, b) => a.charAt(2).localeCompare(b.charAt(2)));
    setCars(cars.slice());
  }

  const filterByEndsLetterI = () => {
    const result = cars.filter(car => car.endsWith("i"));
    setCars(result);
  }

  const filterByLength7 = () => {
    const result = cars.filter(car => car.length === 7);
    setCars(result);
  }

  const filterByLengthMoreThan6 = () => {
    const result = cars.filter(car => car.length >= 6);
    setCars(result);
  }

  const filterByIncludesEr = () => {
    const result = cars.filter(car => car.includes("er"));
    setCars(result);
  }

  const filterBySecondLetterO = () => {                // 012
    const result = cars.filter(car => car[1] === "o"); // Volkswagen
    setCars(result);
  }

  const reset = () => {
    setCars(carsFromDb.slice());
  }


  return (
    <div>
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
      <button onClick={sortAZ}>Sorteeri A-Z</button>
      <button onClick={sortZA}>Sorteeri Z-A</button>
      <button onClick={sortLettersAsc}>Sorteeri tähemärgid kasvavalt</button>
      <button onClick={sortLettersDesc}>Sorteeri tähemärgid kahanevalt</button>
      <button onClick={sortLettersAZ}>Sorteeri kolmas täht A-Z</button>
      <br /><br />
      <button onClick={filterByEndsLetterI}>Jäta alles i-ga lõppevad</button>
      <button onClick={filterByLength7}>Jäta alles 7-tähelised</button>
      <button onClick={filterByLengthMoreThan6}>Jäta alles vähemalt 6-tähelised</button>
      <button onClick={filterByIncludesEr}>Jäta alles er-sisaldavad</button>
      <button onClick={filterBySecondLetterO}>Jäta alles teine täht o</button>
      <br /><br />
      {cars.map(car => <div key={car}>{car}</div>)}
      <br /><br />
      {cars.length} tk
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Autod