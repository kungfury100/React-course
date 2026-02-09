import { Link } from "react-router-dom"
import usersFromDb from "../../data/kasutajad.json"
import { useState } from "react"

function Kasutajad() {
    const [users, setUsers] = useState(usersFromDb.slice())

    const reset = () => {
        setUsers(usersFromDb.slice())
    }

    const sortAZ = () => {
        users.sort((a, b) => a.Username.localeCompare(b.Username))
        setUsers(users.slice())
    }

    const sortZA = () => {
        users.sort((a, b) => b.Username.localeCompare(a.Username))
        setUsers(users.slice())
    }

    const sortAgeAsc = () => {
        users.sort((a, b) => a.Age - b.Age)
        setUsers(users.slice())
    }

    const sortAgeDesc = () => {
        users.sort((a, b) => b.Age - a.Age)
        setUsers(users.slice())
    }

    const filterAgeUnder30 = () => {
        const result = usersFromDb.filter(user => user.Age < 30)
        setUsers(result)
    }

    const filterAge30Plus = () => {
        const result = usersFromDb.filter(user => user.Age >= 30)
        setUsers(result)
    }

    const filterUsernameContainsDot = () => {
        const result = usersFromDb.filter(user => user.Username.includes("."))
        setUsers(result)
    }

    const search = (value) => {
        const searchedValue = value.toLowerCase()
        const result = usersFromDb.filter(user =>
            user.Username.toLowerCase().includes(searchedValue) ||
            user.Email.toLowerCase().includes(searchedValue)
        )
        setUsers(result)
    }

    const averageAge = () => {
        if (users.length === 0) {
            return 0
        }
        let sum = 0
        users.forEach(user => sum = sum + user.Age)
        return (sum / users.length).toFixed(1)
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
            <label>Otsi </label>
            <input onChange={(e) => search(e.target.value)} type="text" />
            <div>Kasutajaid kokku: {users.length} tk</div>
            <div>Keskmine vanus: {averageAge()}</div>
            <button onClick={reset}>Reset</button>
            <br />
            <p className="title">Sorteeri</p>
            <button onClick={sortAZ}>A-Z</button>
            <button onClick={sortZA}>Z-A</button>
            <button onClick={sortAgeAsc}>Vanus kasvavalt</button>
            <button onClick={sortAgeDesc}>Vanus kahanevalt</button>
            <br /><br />
            <p className="title">Filtreeri</p>
            <button onClick={filterAgeUnder30}>Vanus alla 30</button>
            <button onClick={filterAge30Plus}>Vanus 30+</button>
            <button onClick={filterUsernameContainsDot}>Kasutajanimes punkt</button>
            <br /><br />
      {users.map((user, index) => 
        <div key={index}>
            {user.Username} <br /> {user.Email} <br /> {user.Password} <br /> {user.Age} <br />
            <Link to={"/kasutaja/" + user.Username}>
                <button>Vt lähemalt</button>
            </Link>
            
            <br /><br />
        </div>
        )} 
        
                <br />
    </div>
  )
}

export default Kasutajad