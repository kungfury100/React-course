import { useState } from "react"

function Esindused() {
  const [linn, setLinn] = useState('tallinn')
  return (
    <div>
        <div>Hetkel aktiivne linn: {linn}</div>
        <button className={linn === "tallinn" ? "city-active" : undefined} onClick={() => setLinn('tallinn')}>Tallinn</button>
        <button className={linn === "tartu" ? "city-active" : undefined} onClick={() => setLinn('tartu')}>Tartu</button>
        <button className={linn === "narva" ? "city-active" : undefined} onClick={() => setLinn('narva')}>Narva</button>
        <button className={linn === "pärnu" ? "city-active" : undefined} onClick={() => setLinn('pärnu')}>Pärnu</button>

        {linn === 'tallinn' &&
          <>  
            <div>Ülemiste</div>
            <div>Rocca al Mare</div>
            <div>Magistrali</div>
            <div>Vesse</div>
            <div>Kristiine</div>
            <div>Järveotsa</div>
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