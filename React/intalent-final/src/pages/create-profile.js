import React from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from 'axios';

class Crearperfil extends React.Component {
    //const { register, errors, handleSubmit } = useForm();
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            dob: '',
            gender: '',
            city: '',
            country: '',
            topics: '',
            bio:'',
        };
        this.topics = [
            'Naturaleza',
            'Ir de cañas',
            'Juegos de mesa',
            'Bailar',
            'Mascotas',
            'Picnic',
            'Idiomas',
        ];

        //truco para estar siempre actualizado con respecto al formulario
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Lo usaremos cuando cambien los valores del formulario
    //este truco permite que todos empleen el mismo handler
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        //Desesctructuracion (ES6)
        this.setState({
            [name]: value
        });
    }

    // --------------------
    // SERVICIOS CON AXIOS (POST)
    // --------------------

    handleSubmit = (event) => {
        //Para no propagar el formulario
        event.preventDefault();
        //leo datos
        const persona = {
            loginId: getAuth().currentUser?.uid,
    gender: this.state.gender,
    name: this.state.name,
    city: this.state.city,
    country: this.state.country,
    dob: this.state.dob,
    bio: this.state.bio,
    likes:[],
    dislikes: [],
    topics:[],
        };
        //let history = useHistory();

        axios
            .post(`http://localhost:8080/api/crear-perfil`,persona)
            .then((resp) => {
                console.log('perfil creado')
                
                // navi("http://localhost:4200/main");
                //history.push('/list-books');
            })
            .catch((error) => {
                this.setState({ errorMessage: error.message });
                console.error('Ha habido un error', error);
            });
    };

    // --------------------
    // RENDER
    // --------------------

    //en esencia es lo que tenia en Angular en el HTML + render()

    render() {
        return (
            <div className="container">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h2 className="h2">Crear Perfil</h2>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-md-4">
                        <form onSubmit={this.handleSubmit}>

                            <div className="form-group">
                                <label>Nombre</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Año de nacimiento</label>
                                <input
                                    className="form-control"
                                    type="date"
                                    name="dob"
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Mujer</label>
                                <input
                                    className="form-control"
                                    type="radio"
                                    value="Mujer"
                                    name="gender"
                                    onChange={this.handleChange}
                                    required

                                />
                                <label>Hombre</label>
                                <input
                                    className="form-control"
                                    type="radio"
                                    name="gender"
                                    value="Hombre"
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Ciudad</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="city"
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Pais</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="country"
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <span>Intereses</span>
                                {this.topics.map((topic) =>
                                (
                                    <div>
                                        <input
                                            id={topic}
                                            className="form-control"
                                            type="checkbox"
                                            name="topics"
                                            onChange={this.handleChange}
                                            required
                                        />
                                        <label for={topic}> {topic}</label>
                                    </div>
                                ))}
                            </div>


                            <div className="form-group">
                                <label>Descripcion</label>
                                <input
                                    className="form-control"
                                    type="textarea"
                                    name="bio"
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary btn-block" type="submit">
                                    Busca tu amor
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        );
    }
}


export default Crearperfil;