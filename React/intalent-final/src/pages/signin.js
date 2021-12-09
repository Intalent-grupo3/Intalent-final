import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/Fire'
import './signin.css'
import logo from '../assets/logo-white.png'
import { useNavigate } from 'react-router-dom';


export default function Registrar() {
    const [registerUser, setRegisterUser] = useState('');
    const [registerpass, setRegisterPass] = useState('');
    const navigate = useNavigate();

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerUser, registerpass)
            navigate('/crear-perfil')
            console.log(user.user.uid)
        } catch (error) {
            console.log(error.messsage)
        }

    };
    // const handleClickNavMenu = pageURL => { navigate(pageURL) };

    return (
        // <div className="App">
        //     <h2>Registrar Usuario </h2>
        //     <input placeholder="Email" onChange={(event) => { setRegisterUser(event.target.value) }}
        //     />
        //     <input placeholder="Password" onChange={(event) => { setRegisterPass(event.target.value) }}
        //     />
        //     <button onClick={register}>Crear usuario</button>
        // </div>
        <div className="container signin notLogged">
            <header className="header">
                <div className="logoBox">
                    <img src={logo} alt="LucaTinder" />
                </div>
                ¿Aun no tienes cuenta? No te preocupes, en unos pocos pasos estarás
                listo para conectarte. <br />
                <span className="bold">¡Registrate aqui!</span>
            </header>
            <form className="form">
                <div className="form-group">
                    <label className="signin--mail">Correo</label>
                    <input
                        onChange={(event) => {
                            setRegisterUser(event.target.value)
                        }}
                        type="text"
                        name="signin--mail"
                        id="signin--mail"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="signin--pw">Contraseña</label>
                    <input
                        onChange={(event) => {
                            setRegisterPass(event.target.value)
                        }}
                        type="password"
                        name="signin--pw"
                        id="signin--pw"
                        className="form-control"
                    />
                </div>
            </form>
            <button className="submit" onClick={register}>
                Registrarme
            </button>
        </div>

    )


}