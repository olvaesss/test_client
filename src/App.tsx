import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboars';
import Departments from './pages/departments';
import Employees from './pages/employees';
import Navigate from './components/navigate';
import './index.css'


function App() {
  return (
    <div>
      <Router>
      <Navigate/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </Router>
    </div>
  )
}


export default App;
