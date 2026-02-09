import { useState } from "react"
import { useParams } from "react-router-dom"
import hinnadDb from "../../data/hinnad.json"

function MuudaHind() {
  const { hind_arv } = useParams()
  const [hind, setHind] = useState(
    hinnadDb.find(hind => hind.arv === Number(hind_arv))
  )

  const muuda = () => {
    const index = hinnadDb.findIndex(hind => hind.arv === Number(hind_arv))
    hinnadDb[index] = hind
  }

  if (hind === undefined) {
    return <div>Hinda ei leitud</div>
  }

  return (
    <div>
      <div>Ajutine väljakuvamine: {JSON.stringify(hind)}</div>
      <label>Hind</label>
      <br />
      <input
        value={hind.arv}
        onChange={(e) => setHind({ ...hind, arv: Number(e.target.value) })}
        type="number"
      />
      <br />
      <label>Hind sõnana</label>
      <br />
      <input
        value={hind.sonana}
        onChange={(e) => setHind({ ...hind, sonana: e.target.value })}
        type="text"
      />
      <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaHind