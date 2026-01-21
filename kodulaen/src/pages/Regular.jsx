import { useState, useRef } from "react";
import "../App.css";

function App() {
  const [laenusumma, setLaenusumma] = useState(75000);
  const [intress, setIntress] = useState(4.44);
  const [kuumakse, setKuumakse] = useState();

  const ostuhindRef = useRef();
  const sissemakseRef = useRef();
  const marginaalRef = useRef();
  const euriborRef = useRef();
  const perioodRef = useRef();

  const arvutaLaenusumma = () => {
    setLaenusumma(
      ostuhindRef.current.value - sissemakseRef.current.value
    );
    arvutaKuumakse();
  };

  const arvutaIntress = () => {
    setIntress(
      Number(marginaalRef.current.value) +
      Number(euriborRef.current.value)
    );
    arvutaKuumakse();
  };

  const arvutaKuumakse = () => {
    setKuumakse(
      (ostuhindRef.current.value - sissemakseRef.current.value) /
        (perioodRef.current.value * 12) *
        (Number(marginaalRef.current.value) +
          Number(euriborRef.current.value))
    );
  };

  return (
    <>
      <div>
        <p>Kodulaenu kalkulaator</p>

        <label>Kinnisvara ostuhind</label>
        <input
          defaultValue={75000}
          onChange={arvutaLaenusumma}
          ref={ostuhindRef}
          type="number"
        />
        <br />

        <label>Sissemakse</label>
        <input
          defaultValue={0}
          onChange={arvutaLaenusumma}
          ref={sissemakseRef}
          type="number"
        />
        <br />

        <div>Laenusumma: {laenusumma}</div>

        <label>Periood</label>
        <input
          defaultValue={30}
          onChange={arvutaKuumakse}
          ref={perioodRef}
          type="number"
        />
        <br />

        <label>Marginaal</label>
        <input
          defaultValue={1.7}
          onChange={arvutaIntress}
          ref={marginaalRef}
          type="number"
        />
        <br />

        <label>Euribor</label>
        <input
          defaultValue={2.74}
          onChange={arvutaIntress}
          ref={euriborRef}
          type="number"
        />

        <div>Intress kokku: {intress.toFixed(2)}</div>

        <br />
        <br />

        <div>Kuumakse: {kuumakse}€</div>
        <br />
      </div>
    </>
  );
}

export default App;
