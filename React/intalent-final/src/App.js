import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Crearperfil from './pages/create-profile';
import Registrar from './pages/signin';

function App() {
  return (
    <div className="App">
      {/* <Crearperfil /> */}
      {<Registrar />}
    </div>
  );

}

export default App;
