import { useParams } from "react-router-dom"
import hinnadDb from "../../data/hinnad.json"

function YksHind() {
  const { hind_arv } = useParams()
  const hind = hinnadDb.find(hind => hind.arv === Number(hind_arv))

  if (hind === undefined) {
    return <div>Hinda ei leitud</div>
  }

  return (
    <div>
      <div>Hind: {hind.arv}</div>
      <div>Hind sõnana: {hind.sonana}</div>
    </div>
  )
}

export default YksHind