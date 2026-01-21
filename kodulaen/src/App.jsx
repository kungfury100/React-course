import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';
import Regular from './pages/Regular.jsx';
import Max from './pages/Max.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "active" : ""}
            end
          >
            <button>Regular</button>
          </NavLink>
          <NavLink
            to="/max"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            <button>Max</button>
          </NavLink>
        </div>
          <Routes>
            <Route path="/" element={<Regular />} />
            <Route path="/max" element={<Max />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App