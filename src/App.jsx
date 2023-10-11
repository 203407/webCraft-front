import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import './App.css'
import Informe from './components/Informe';
import Register from './components/Register';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/inicio' element={<Home/>}/>
          <Route path='/informe' element={<Informe/>}/>
          <Route path='/informe/:nombre' element={<Informe/>}/> {/* Ruta dinámica */}
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
  );
}

export default App
