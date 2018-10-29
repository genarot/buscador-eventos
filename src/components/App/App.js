import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import Formulario from '../Formulario';
import Eventos from '../Eventos';

class App extends Component {
  _token = '37IC2UCENTI4KE3DPJ3W';
  ordenar ='date';
  state = {
    categorias: [],
    eventos: []
  }

  componentDidMount() {
    this.obtenerCategorias();
  }

  obtenerEventos = async (datosBusqueda) => {
    let url =  `https://www.eventbriteapi.com/v3/events/search/?q=${datosBusqueda.nombreEvento}&categories=${datosBusqueda.categoria}&sort_by=${this.ordenar}&locale=es_ES&token=${this._token}`

    fetch(url)
    .then( datos => datos.json())
    .then( eventos => {
        console.log(eventos.events);
        this.setState({
          eventos: eventos.events
        })
    })
    .catch()
  }
  obtenerCategorias=  async ( ) => {

    let url =  `https://www.eventbriteapi.com/v3/categories/?token=${this._token}&locale=es_ES`;
    
    await fetch(url)
        .then( respuesta => {
          return respuesta.json()
        })
        .then( categorias => {
          console.log(categorias.categories);
          this.setState({
            categorias: categorias.categories
          })
        })
        .catch( err => console.error(err))
  }
  render() {
    return (
      <div className="App">
        <Header titulo="Eventos"/>
        <div className="uk-container">
          <Formulario
             categorias={this.state.categorias}
             obtenerEventos={this.obtenerEventos}/>
          <Eventos eventos={this.state.eventos} />
        </div>
      </div>
    );
  }
}

export default App;
