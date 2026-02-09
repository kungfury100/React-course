import { useState } from "react"
import { Link } from "react-router-dom"
import employeesFromDb from "../../data/tootajad.json"
import { convertHtmlVariable } from "../../util/convertings"


function Tootajad() {
  const [employees, setEmployees] = useState(employeesFromDb.slice())

  const sortAZ = () => {
    employees.sort((a, b) => a.Name.localeCompare(b.Name));
    setEmployees(employees.slice());
  }

  const sortZA = () => {
    employees.sort((a, b) => b.Name.localeCompare(a.Name));
    setEmployees(employees.slice());
  }

  const sortLettersAsc = () => {
    employees.sort((a, b) => a.Name.length - b.Name.length);
    setEmployees(employees.slice());
  }

  const sortLettersDesc = () => {
    employees.sort((a, b) => b.Name.length - a.Name.length);
    setEmployees(employees.slice());
  }

  const sortLettersAZ = () => {
    employees.sort((a, b) => a.Name[1].localeCompare(b.Name[1]));
    setEmployees(employees.slice());
  }

  const sortLettersLength = () => {
    employees.sort((a, b) => a.Name.split(" ").length - b.Name.split(" ").length);
    setEmployees(employees.slice());
  }

  const reset = () => {
    setEmployees(employeesFromDb.slice());
  }

  const filterByLength3 = () => {
    const result = employees.filter(employee => employee.Name.length === 3);
    setEmployees(result);
  }
  
  const filterByLengthMoreThan5 = () => {
    const result = employees.filter(employee => employee.Name.length >= 6);
    setEmployees(result);
  }

  const filterByNameContainsAi = () => {
    const result = employees.filter(employee => employee.Name.includes("ai"));
    setEmployees(result);
  }

  const filterBySecondLetterI = () => {
    const result = employees.filter(employee => employee.Name[1] === "i");
    setEmployees(result);
  }

  const filterByStartsWithM = () => {
    const result = employees.filter(employee => employee.Name[0] === "M");
    setEmployees(result);
  }

  const filterByEqualCharacters = () => {
    const result = employees.filter(employee => employee.Name.length % 2 === 0);
    setEmployees(result);
  }

  const filterByOddCharacters = () => {
    const result = employees.filter(employee => employee.Name.length % 2 !== 0);
    setEmployees(result);
  }

  const filterByEndsWithA = () => {
    const result = employees.filter(employee => employee.Name[employee.Name.length - 1] === "a");
    setEmployees(result);
  }

  const filterByAtLeast10Characters = () => {
    const result = employees.filter(employee => employee.Name.length >= 10);
    setEmployees(result);
  }

  const filterByExactly15Characters = () => {
    const result = employees.filter(employee => employee.Name.length === 15);
    setEmployees(result);
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
      <p className="title">Sorteeri</p>
      <button onClick={sortAZ}>A-Z</button>
      <button onClick={sortZA}>Z-A</button>
      <button onClick={sortLettersAsc}>Tähed kasvavalt</button>
      <button onClick={sortLettersDesc}>Tähed kahanevalt</button>
      <button onClick={sortLettersAZ}>Teine täht A-Z</button>
      <button onClick={sortLettersLength}>Nime pikkus</button><br /><br />
      <p className="title">Filtreeri</p>
      <button onClick={filterByLength3}>3-tähelised</button>
      <button onClick={filterByLengthMoreThan5}>Rohkem kui 5-tähelised</button>
      <button onClick={filterByNameContainsAi}>Nimes on "ai"</button>
      <button onClick={filterBySecondLetterI}>Teine täht on "i"</button>
      <button onClick={filterByStartsWithM}>Algab "m" tähega</button>
      <button onClick={filterByEqualCharacters}>Paaris arv tähti</button>
      <button onClick={filterByOddCharacters}>Paaritu arv tähti</button>
      <button onClick={filterByEndsWithA}>Lõppeb "a" tähega</button>
      <button onClick={filterByAtLeast10Characters}>Vähemalt 10 tähte</button>
      <button onClick={filterByExactly15Characters}>Täpselt 15 tähte</button>
      <br /><br />

      {employees.map((employee, index) => 
        <div key={index}>
          {employee.Name} <br />{employee.Occupation} <br /> {employee.Telephone} <br />
          <Link to={"/tootaja/" + convertHtmlVariable(employee.Name)}>
            <button>Vt lähemalt</button>
          </Link>
          <br /><br />
        </div>
      )} 
      
      <br />

      {employees.length} tk
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Tootajad