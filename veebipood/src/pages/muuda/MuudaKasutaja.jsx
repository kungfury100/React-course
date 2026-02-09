import { useState } from "react"
import { useParams } from "react-router-dom"
import usersDb from "../../data/kasutajad.json"

function MuudaKasutaja() {
  const { kasutaja_username } = useParams()
  const [kasutaja, setKasutaja] = useState(
    usersDb.find(kasutaja => kasutaja.Username === kasutaja_username)
  )

  const muuda = () => {
    const index = usersDb.findIndex(kasutaja => kasutaja.Username === kasutaja_username)
    usersDb[index] = kasutaja
  }

  if (kasutaja === undefined) {
    return <div>Kasutajat ei leitud</div>
  }

  return (
    <div>
      <div>Ajutine väljakuvamine: {JSON.stringify(kasutaja)}</div>
      <label>Kasutajanimi</label>
      <br />
      <input
        value={kasutaja.Username}
        onChange={(e) => setKasutaja({ ...kasutaja, Username: e.target.value })}
        type="text"
      />
      <br />
      <label>E-post</label>
      <br />
      <input
        value={kasutaja.Email}
        onChange={(e) => setKasutaja({ ...kasutaja, Email: e.target.value })}
        type="email"
      />
      <br />
      <label>Parool</label>
      <br />
      <input
        value={kasutaja.Password}
        onChange={(e) => setKasutaja({ ...kasutaja, Password: e.target.value })}
        type="text"
      />
      <br />
      <label>Vanus</label>
      <br />
      <input
        value={kasutaja.Age}
        onChange={(e) => setKasutaja({ ...kasutaja, Age: Number(e.target.value) })}
        type="number"
      />
      <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaKasutaja