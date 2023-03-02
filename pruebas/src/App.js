import logo from './logo.svg';
import './App.css';
import Wellcome from './Components/WellcomeProps';
import HooksPrueba from './Components/HooksPrueba';
import HookUseState from './Components/HookUseState';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contacto from './Pages/Contact';
import Profile from './Pages/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Wellcome cosa="Hola wellcome props" name="Santi"/>
        <HooksPrueba/>
        <HookUseState/> */}
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contactPage">Pagina Contacto</Link>
              </li>
              <li>
                <Link to="/profile">Pagina Perfil</Link>
              </li>
            </ul>
          </div>
          <Routes>{/* Cargar distintas rutas */}
            <Route path='/contactPage' element={<Contacto />} /> 
            <Route path='/profile/:name' element={<Profile />} /> {/* solo carga si le definimos la variable en la ruta */}
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
