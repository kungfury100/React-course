import { useState } from "react"
import { Link } from "react-router-dom"
import usersFromDb from "../../data/kasutajad.json"

function HaldaKasutajad() {
    const [users, setUsers] = useState(usersFromDb)

    const deleteUser = (index) => {
        usersFromDb.splice(index, 1);
        setUsers(usersFromDb.slice());
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
                        <th>Kasutajanimi</th>
                        <th>E-post</th>
                        <th>Parool</th>
                        <th>Vanus</th>
                        <th>Kustuta</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) =>
                        <tr key={user.Username}>
                            <td>{index + 1}</td>
                            <td>{index}</td>
                            <td>{user.Username}</td>
                            <td>{user.Email}</td>
                            <td>{user.Password}</td>
                            <td>{user.Age}</td>
                            <td><button onClick={() => deleteUser(index)}>X</button></td>
                            <td>
                                <Link to={"/muuda-kasutaja/" + user.Username}>
                                    <button>Muuda kasutajat</button>
                                </Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default HaldaKasutajad