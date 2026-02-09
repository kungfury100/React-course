import { useParams } from "react-router-dom"
import usersDb from "../../data/kasutajad.json"

function YksKasutaja() {
  const { kasutaja_username } = useParams()
  const kasutaja = usersDb.find(user => user.Username === kasutaja_username)

  if (kasutaja === undefined) {
    return <div>Kasutajat ei leitud</div>
  }

  return (
    <div>
      <div>Kasutajanimi: {kasutaja.Username}</div>
      <div>E-post: {kasutaja.Email}</div>
      <div>Parool: {kasutaja.Password}</div>
      <div>Vanus: {kasutaja.Age}</div>
    </div>
  )
}

export default YksKasutaja