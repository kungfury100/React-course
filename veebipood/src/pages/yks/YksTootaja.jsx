import { useParams } from "react-router-dom"
import employeesFromDb from "../../data/tootajad.json"
import { convertHtmlVariable } from "../../util/convertings"

function YksTootaja() {
  const { tootaja_nimi } = useParams()
  const tootaja = employeesFromDb.find(
    employee => convertHtmlVariable(employee.Name) === tootaja_nimi
  )

  if (tootaja === undefined) {
    return <div>Töötajat ei leitud</div>
  }

  return (
    <div>
      <div>Nimi: {tootaja.Name}</div>
      <div>Amet: {tootaja.Occupation}</div>
      <div>Telefon: {tootaja.Telephone}</div>
    </div>
  )
}

export default YksTootaja