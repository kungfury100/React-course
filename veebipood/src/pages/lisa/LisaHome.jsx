import React from 'react'
import { Link } from 'react-router-dom'

function LisaHome() {
  return (
    <div>
      <div>
        <br />
        <Link to="/lisa-auto">
            <button>Lisa autosid</button>
        </Link>
        <Link to="/lisa-esindus">
            <button>Lisa esindusi</button>
        </Link>
         <Link to="/lisa-hind">
            <button>Lisa hindu</button>
        </Link>
         <Link to="/lisa-kasutaja">
            <button>Lisa kasutajaid</button>
        </Link>
         <Link to="/lisa-tootaja">
            <button>Lisa töötajaid</button>
        </Link>
         <Link to="/lisa-toode">
            <button>Lisa tooteid</button>
        </Link>
    </div>
    </div>
  )
}

export default LisaHome