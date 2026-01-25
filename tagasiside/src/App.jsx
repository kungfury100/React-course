import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Tagasiside from './pages/Tagasiside.jsx';

function App() {
  return (
    <div>
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "active" : ""}
          end
        >
          <button>Avaleht</button>
        </NavLink>
        <NavLink
          to="/tagasiside"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          <button>Tagasiside</button>
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<div>Tere</div>} />
        <Route path="/tagasiside" element={<Tagasiside />} />
      </Routes>
    </div>
  )
}

export default App