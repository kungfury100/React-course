import { useState, useRef, use } from "react";
import "../App.css";

function App() {
  const [max, setMax] = useState();

  const ylalpeetavadRef = useRef();
  const netosissetulekRef = useRef();
  const igakuisedRef = useRef();

  const arvutaMax = () => {
    const ylalpeetavad = Number(ylalpeetavadRef.current.value);
    const netosissetulek = Number(netosissetulekRef.current.value);
    const igakuised = Number(igakuisedRef.current.value);

    const available = netosissetulek - igakuised;
    const factor = 50;

    const maxValue =
      available > 0
        ? (available * factor) / (1 + ylalpeetavad)
        : 0;

    setMax(Math.max(0, Math.round(maxValue)));
  };

  return (
    <>
      <div>
        <p>Maksimaalse kodulaenu kalkulaator</p>

        <label>Ülalpeetavate arv</label>
        <input
          defaultValue={1}
          onChange={arvutaMax}
          ref={ylalpeetavadRef}
          type="number"
        />
        <br />
        <br />

        <label>Netosissetulek</label>
        <input
          defaultValue={9000}
          onChange={arvutaMax}
          ref={netosissetulekRef}
          type="number"
        />
        <br />
        <br />

        <label>Igakuised kohustused</label>
        <input
          defaultValue={0}
          onChange={arvutaMax}
          ref={igakuisedRef}
          type="number"
        />
        <br />
        <br />

        <div>Maksimaalne kodulaen: {max}€</div>
      </div>
    </>
  );
}

export default App;
