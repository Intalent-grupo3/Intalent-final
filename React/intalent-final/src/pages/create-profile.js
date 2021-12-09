import React from 'react'
import './create-profile.css'

// import axios from 'axios';

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
        const book = {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description
        };
        //let history = useHistory();

        // axios
        //     .post(`http://localhost:8000/api/add-book`, book)
        //     .then((resp) => {
        //         alert('Se ha guardado el libro [' + this.state.name + ']' + '\nActualiza la lista para verlo');
        //         //Puedo navegar a Lista. Hay que retocarlo
        //         //useNavigate("http://localhost:3000/list-books");
        //         //history.push('/list-books');
        //     })
        //     .catch((error) => {
        //         this.setState({ errorMessage: error.message });
        //         console.error('Ha habido un error', error);
        //     });
    };

    // --------------------
    // RENDER
    // --------------------

    //en esencia es lo que tenia en Angular en el HTML + render()

    render() {
        return (
            <div className="container create">
                <h1 className="h1">Crear Perfil</h1>

                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label for="create--name">Nombre</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label for="create--age">Año de nacimiento</label>
                        <input
                            className="form-control"
                            type="date"
                            name="dob"
                            onChange={this.handleChange}
                            required
                        />
                    </div>

                    <div className="form-group checkgender">
                        <label for="create--gender">Mujer</label>
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
                        <label for="create--city">Ciudad</label>
                        <input
                            className="form-control"
                            type="text"
                            name="city"
                            onChange={this.handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label for="create--country">País</label>
                        <input
                            className="form-control"
                            type="text"
                            name="country"
                            onChange={this.handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label for="create--picture">Foto</label>
                        <input
                            className="form-control"
                            type="file"
                            name="create--image"
                            onChange={this.handleChange}
                            required
                        />
                        {/* <img
                        //  [src]="this.persona.image"
                        //  height="200"
                        // *ngIf="this.persona.image"
                        //  /> */}
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
                        <label for="create--text">Descripcion</label>
                        <textarea
                            className="form-control"
                            type="textarea"
                            name="bio"
                            onChange={this.handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <button className="submit" type="submit">
                            Busca tu amor
                        </button>
                    </div>
                </form>
            </div >
        );
    }
}


export default Crearperfil;