import { useState } from "react"
import { Link } from "react-router-dom"
import employeesFromDb from "../../data/tootajad.json"
import { convertHtmlVariable } from "../../util/convertings"

function HaldaTootajad() {
  const [employees, setEmployees] = useState(employeesFromDb)

  const deleteEmployee = (index) => {
    employeesFromDb.splice(index, 1);
    setEmployees(employeesFromDb.slice());
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
            <th>Amet</th>
            <th>Telefon</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) =>
            <tr key={employee.Name}>
              <td>{index + 1}</td>
              <td>{index}</td>
              <td>{employee.Name}</td>
              <td>{employee.Occupation}</td>
              <td>{employee.Telephone}</td>
              <td><button onClick={() => deleteEmployee(index)}>Delete</button></td>
              <td>
                <Link to={"/muuda-tootaja/" + convertHtmlVariable(employee.Name)}>
                  <button>Muuda töötajat</button>
                </Link>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaTootajad