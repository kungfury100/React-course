import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Courses from './pages/Courses.jsx';
import Hobbies from './pages/Hobbies.jsx';
import Work from './pages/Work.jsx';
import Navbar from './components/Navbar.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <div className="App">
      {/* <Navbar />   */}
      <Routes>
        <Route path="" element={ <Navbar /> } />
        <Route path="work" element={ <Work /> } />
        <Route path="hobbies" element={ <Hobbies /> } />
        <Route path="courses" element={ <Courses /> } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
