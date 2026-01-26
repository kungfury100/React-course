import {Link} from "react-router-dom";

function Menu() {
  return (
    <div>
        <Link to="/">
            <img className="pilt" src="https://www.green.earth/hs-fs/hubfs/Nature-based%20markets%20valued%20at%20$7%20trillion.jpg?width=683&height=420&name=Nature-based%20markets%20valued%20at%20$7%20trillion.jpg" alt="" />
        </Link>
        <Link to="/osta-kinkekaart">
            <button>Kinkekaardid</button>
        </Link>
        <Link to="/lisa">
            <button>Lisa</button>
        </Link>
        <Link to="/ostukorv">
            <button>Ostukorv</button>
        </Link>
        <Link to="/seaded">
            <button>Seaded</button>
        </Link>
        <Link to="/kalkulaator">
            <button>Kalkulaator</button>
        </Link>

        <Link to="/arrays">
            <button>Arrays</button>
        </Link>

        <Link to="/halda">
            <button>Halda</button>
        </Link>
    </div>
  )
}

export default Menu