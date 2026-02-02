import { useState } from "react"
import { Link } from "react-router-dom"
import esindusedFromDb from "../../data/esindused.json"
import { convertHtmlVariable } from "../../util/convertings";

function Esindused() {
  const [linn, setLinn] = useState('tallinn')
  const [esindused, setEsindused] = useState(esindusedFromDb.slice());

  const sortNimiAZ = () => {
    esindused.sort((a, b) => a.nimi.localeCompare(b.nimi));
    setEsindused(esindused.slice());
  }

  const sortAadressAZ = () => {
    esindused.sort((a, b) => a.aadress.localeCompare(b.aadress));
    setEsindused(esindused.slice());
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


        <div>Hetkel aktiivne linn: {linn}</div>
        <button className={linn === "tallinn" ? "city-active" : undefined} onClick={() => setLinn('tallinn')}>Tallinn</button>
        <button className={linn === "tartu" ? "city-active" : undefined} onClick={() => setLinn('tartu')}>Tartu</button>
        <button className={linn === "narva" ? "city-active" : undefined} onClick={() => setLinn('narva')}>Narva</button>
        <button className={linn === "pärnu" ? "city-active" : undefined} onClick={() => setLinn('pärnu')}>Pärnu</button>

        {linn === 'tallinn' &&
          <>  
            <br /><br />
            <button onClick={sortNimiAZ}>Sorteeri nimi A-Z</button>
            <button onClick={sortAadressAZ}>Sorteeri aadress A-Z</button>
            <br /><br />
            {esindused.map(esindus => 
              <div key={esindus.aadress}>
                {esindus.nimi} - {esindus.aadress} 
                <Link to={"/esindused/" + convertHtmlVariable(esindus.nimi)}>
                  <button>Vt lähemalt</button>
                </Link></div>)}
          </>
        }

        {linn === 'tartu' &&
          <>  
            <div>Raatuse</div>
            <div>Lõunakeskus</div>
          </>
        }
        
        {linn === 'narva' && <div>Fama keskus</div>}
        {linn === 'pärnu' && <div>Port Artur 2</div>}
    </div>
  )
}

export default Esindused