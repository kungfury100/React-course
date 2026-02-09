import { useState } from "react"
import { useParams } from "react-router-dom"
import employeesFromDb from "../../data/tootajad.json"
import { convertHtmlVariable } from "../../util/convertings"

function MuudaTootaja() {
  const { tootaja_nimi } = useParams()
  const [tootaja, setTootaja] = useState(
    employeesFromDb.find(employee => convertHtmlVariable(employee.Name) === tootaja_nimi)
  )

  const muuda = () => {
    const index = employeesFromDb.findIndex(employee => convertHtmlVariable(employee.Name) === tootaja_nimi)
    employeesFromDb[index] = tootaja
  }

  if (tootaja === undefined) {
    return <div>Töötajat ei leitud</div>
  }

  return (
    <div>
      <div>Ajutine väljakuvamine: {JSON.stringify(tootaja)}</div>
      <label>Töötaja nimi</label>
      <br />
      <input
        value={tootaja.Name}
        onChange={(e) => setTootaja({ ...tootaja, Name: e.target.value })}
        type="text"
      />
      <br />
      <label>Töötaja amet</label>
      <br />
      <input
        value={tootaja.Occupation}
        onChange={(e) => setTootaja({ ...tootaja, Occupation: e.target.value })}
        type="text"
      />
      <br />
      <label>Töötaja telefon</label>
      <br />
      <input
        value={tootaja.Telephone}
        onChange={(e) => setTootaja({ ...tootaja, Telephone: e.target.value })}
        type="text"
      />
      <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaTootaja