import React, { useRef, useState } from 'react'
import { calculatePayment } from '../util/calculations';

function LoanCalculator() {
  const price = 75000;
  const priceRef = useRef();
  const downPayment = 0;
  const downPaymentRef = useRef();
  const period = 30;
  const periodRef = useRef();
  const marginal = 1.7;
  const marginalRef = useRef();
  const euribor = 2.15;
  const euriborRef = useRef();
  const [monthlyPayment, setMonthlyPayment] = useState(
    calculatePayment(price, downPayment, period, marginal, euribor)
  );


  const handleMonthlyPayment = () => {
    setMonthlyPayment(calculatePayment(
      Number(priceRef.current.value),
      Number(downPaymentRef.current.value),
      Number(periodRef.current.value),
      Number(marginalRef.current.value),
      Number(euriborRef.current.value)
    ));
  }

  return (
    <div>
      <label>Kinnisvara ostuhind</label>
      <input defaultValue={price} ref={priceRef} onChange={handleMonthlyPayment} type="text" />
      <br />
      <label>Sissemakse</label>
      <input defaultValue={downPayment} ref={downPaymentRef} onChange={handleMonthlyPayment} type="text" />
      <br />
      <label>Laenusumma</label>
      <input disabled type="text" />
      <br />
      <label>Periood</label>
      <select defaultValue={period} ref={periodRef} onChange={handleMonthlyPayment}>
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
        <option>25</option>
        <option>30</option>
      </select>
      <br />
      <label>Marginaal</label>
      <input value={marginal} ref={marginalRef} onChange={handleMonthlyPayment} type="text" />
      <br />
      <label>Euribor</label>
      <input value={euribor} ref={euriborRef} onChange={handleMonthlyPayment} type="text" />
      <br />
      <label>Intress kokku</label>
      <input disabled type="text" />
      <br /><br />
      <div>{monthlyPayment.toFixed(2)}€</div>
    </div>
  )
}

export default LoanCalculator