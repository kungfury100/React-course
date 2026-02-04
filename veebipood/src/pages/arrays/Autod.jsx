import { useState } from "react"
import { Link } from "react-router-dom"
import carsFromDb from "../../data/autod.json"

function Autod() {
    // const carsFromDb = ["Mercedes", "Ferrari", "Audi", "Toyota", "Honda", "BMW", "Jaguar", "Hyundai"]
    const [cars, setCars] = useState(carsFromDb.slice())
  
  const sortAZ = () => {
    cars.sort((a, b) => a.name.localeCompare(b.name));
    setCars(cars.slice());
  }

  const sortZA = () => {
    cars.sort((a, b) => b.name.localeCompare(a.name));
    setCars(cars.slice());
  }

  const sortLettersAsc = () => {
    cars.sort((a, b) => a.name.length - b.name.length);
    setCars(cars.slice());
  }

  const sortLettersDesc = () => {
    cars.sort((a, b) => b.name.length - a.name.length);
    setCars(cars.slice());
  }

  const sortLettersAZ = () => {
    cars.sort((a, b) => a.name[2].localeCompare(b.name[2]));
    // cars.sort((a, b) => a.at(2).localeCompare(b.at(2)));
    // cars.sort((a, b) => a.charAt(2).localeCompare(b.charAt(2)));
    setCars(cars.slice());
  }

  const sortPriceAsc = () => {
    cars.sort((a, b) => a.price - b.price);
    setCars(cars.slice());
  }

  const sortPriceDesc = () => {
    cars.sort((a, b) => b.price - a.price);
    setCars(cars.slice());
  }

  const filterByEndsLetterI = () => {
    const result = carsFromDb.filter(car => car.name.endsWith("i"));
    setCars(result);
  }

  const filterByLength7 = () => {
    const result = carsFromDb.filter(car => car.name.length === 7);
    setCars(result);
  }

  const filterByLengthMoreThan6 = () => {
    const result = carsFromDb.filter(car => car.name.length >= 6);
    setCars(result);
  }

  const filterByIncludesEr = () => {
    const result = carsFromDb.filter(car => car.name.includes("er"));
    setCars(result);
  }

  const filterBySecondLetterO = () => {                // 012
    const result = carsFromDb.filter(car => car.name[1] === "o"); // Volkswagen
    setCars(result);
  }

  const reset = () => {
    setCars(carsFromDb.slice());
  }

  const addToCart = (product) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    cartLS.push(product);
    localStorage.setItem("cart", JSON.stringify(cartLS));
  }

  const arvutaKokku = () => {
    let summa = 0;
    cars.forEach(car => summa = summa + car.price);
    return summa;
  }

  const otsi = (searchedValue) => {
    const result = carsFromDb.filter(car => car.name.toLowerCase().includes(searchedValue.toLowerCase()));
    setCars(result);
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
      <p className="title">Sorteeri</p>
      <button onClick={sortAZ}>Sorteeri A-Z</button>
      <button onClick={sortZA}>Sorteeri Z-A</button>
      <button onClick={sortLettersAsc}>Sorteeri tähemärgid kasvavalt</button>
      <button onClick={sortLettersDesc}>Sorteeri tähemärgid kahanevalt</button>
      <button onClick={sortLettersAZ}>Sorteeri kolmas täht A-Z</button>
      <button onClick={sortPriceAsc}>Sorteeri hind kasvavalt</button>
      <button onClick={sortPriceDesc}>Sorteeri hind kahanevalt</button>
      <br /><br />
      <p className="title">Filtreeri</p>
      <button onClick={filterByEndsLetterI}>Jäta alles i-ga lõppevad</button>
      <button onClick={filterByLength7}>Jäta alles 7-tähelised</button>
      <button onClick={filterByLengthMoreThan6}>Jäta alles vähemalt 6-tähelised</button>
      <button onClick={filterByIncludesEr}>Jäta alles er-sisaldavad</button>
      <button onClick={filterBySecondLetterO}>Jäta alles teine täht o</button>
      <br /><br />
      {cars.map(car => 
        <div key={car.id}>
          {car.name} - {car.price}
          <Link to={"/auto/" + car.id}>
            <button>Vt lähemalt</button>
          </Link>
          <button onClick={() => addToCart(car)}>Lisa ostukorvi</button>
        </div>)}
      <br /><br />
      {cars.length} tk
      <button onClick={reset}>Reset</button>
      <br /><br />
      <div>Kõikide autode hinnad kokku: {arvutaKokku()} €</div>
    </div>
  )
}

export default Autod