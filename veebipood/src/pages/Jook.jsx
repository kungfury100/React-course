import React from "react";
import { useParams } from "react-router-dom";
import joogidFromDb from "../data/joogid.json";

function Jook() {
  const { number } = useParams();
  const leitudJook = joogidFromDb[number];

  if (leitudJook === undefined) {
    return <div>Jooki ei leitud</div>;
  }

  return (
    <div>
      <h2>{leitudJook.name}</h2>
    </div>
  );
}

export default Jook;