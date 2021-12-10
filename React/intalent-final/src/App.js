
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Crearperfil from './pages/create-profile';
import Registrar from './pages/signin';

function App() {
  return (
    <div className="App">
      {/* <Crearperfil /> */}
      {/* {<Registrar />} */}

      <Routes>
        <Route exact path="/" element={<Registrar />} />
        <Route exact path="/crear-perfil" element={<Crearperfil />} />
      </Routes>
    </div>

  );


}

export default App;
