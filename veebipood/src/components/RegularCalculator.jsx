import React, { useState } from 'react'

function RegularCalculator() {
  const [nr1, setNr1] = useState(0);
  const [operator, setOperator] = useState();
  const [nr2, setNr2] = useState();
  const [result, setResult] = useState();

  function setNumber(number) {
    if (result) {
      return;
    }
    if (!operator) {
      setNr1(number);
    }
    else {
      setNr2(number);
    }
  }

  function reset() {
    setNr1(0);
    setOperator();
    setNr2();
    setResult();
  }

  function submit() {
    switch(operator) {
      case("*"): setResult(nr1 * nr2); break;
      case("+"): setResult(nr1 + nr2); break;
      case("-"): setResult(nr1 - nr2); break;
      case("/"): setResult(nr1 / nr2); break;
    }
  }

  return (
    <div>
      <div>
        <span>{nr1} {operator} {nr2}</span> 
        {result && <span> = {result}</span> }
      </div>
      <button onClick={() => setNumber(7)}>7</button>
      <button onClick={() => setNumber(8)}>8</button>
      <button onClick={() => setNumber(9)}>9</button>
      <button onClick={() => setOperator("*")}>x</button>
      <br />
      <button onClick={() => setNumber(4)}>4</button>
      <button onClick={() => setNumber(5)}>5</button>
      <button onClick={() => setNumber(6)}>6</button>
      <button onClick={() => setOperator("+")}>+</button>

      <br />
      <button onClick={() => setNumber(1)}>1</button>
      <button onClick={() => setNumber(2)}>2</button>
      <button onClick={() => setNumber(3)}>3</button>
      <button onClick={() => setOperator("-")}>-</button>
      <br />
      <button onClick={() => reset()}>C</button>
      <button onClick={() => setNumber(0)}>0</button>
      <button onClick={() => setOperator("/")}>/</button>
      <button onClick={() => submit()}>=</button>
    </div>
  )
}

export default RegularCalculator