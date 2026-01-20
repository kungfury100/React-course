import { useState } from 'react';
import { Link } from 'react-router-dom';

function Courses() {
    const [kursus, uuendaKursus] = useState("Valimata");

  return (
    <div>
        <Link to="/"><button>Tagasi</button></Link><br /><br />
        <button className={kursus === "Udemy" ? "fancy-btn-active" : "fancy-btn-default"} onClick={() => uuendaKursus("Udemy")}>Udemy</button>
        <button className={kursus === "Coursera" ? "fancy-btn-active" : "fancy-btn-default"} onClick={() => uuendaKursus("Coursera")}>Coursera</button>
        <button className={kursus === "Codecademy" ? "fancy-btn-active" : "fancy-btn-default"} onClick={() => uuendaKursus("Codecademy")}>Codecademy</button>
        <button className={kursus === "Udacity" ? "fancy-btn-active" : "fancy-btn-default"} onClick={() => uuendaKursus("Udacity")}>Udacity</button>
        <br /><br />
        {kursus === "Udemy" && <div>Siin on Udemy kursused</div>}
        {kursus === "Coursera" && <div>Siin on Coursera kursused</div>}
        {kursus === "Codecademy" && <div>Siin on Codecademy kursused</div>}
        {kursus === "Udacity" && <div>Siin on Udacity kursused</div>}
    </div>
  )
}

export default Courses;