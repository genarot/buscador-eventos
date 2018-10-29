import React,{Component} from 'react';

export default class Formulario extends Component {
    nombreEventoRef = React.createRef();
    categoriaRef = React.createRef();

    buscarEvento = (e ) => {
        e.preventDefault();

        const datosBusqueda = {
            nombreEvento: this.nombreEventoRef.current.value,
            categoria: this.categoriaRef.current.value
        }

        this.props.obtenerEventos( datosBusqueda )
    }
    mostrarOpciones = (index) => {
        const categoria = this.props.categorias[index];
        // console.log(categoria);
        
        const {id, name_localized} = categoria;

        if ( !id || !name_localized ) return null;

        return (
            <option key={index} value={id}>{name_localized}</option>
        )
    }
    render() {
        console.log(this.props);
        
        return (
            <form onSubmit={this.buscarEvento}>
                <fieldset className="uk-fieldset uk-margin">
                    <legend className="uk-legend uk-text-center">
                        Busca tu evento por nombre o categoria
                    </legend>

                    <div className="uk-column-1-3@m uk-margin">
                        <div className="uk-margin" uk-margin="true">
                            <input type="text" ref={this.nombreEventoRef} placeholder="Nombre de Evento o Ciudad" className="uk-input"/>
                        </div>
                        <div className="uk-margin" uk-margin="true">
                           <select ref={this.categoriaRef} className="uk-select">
                            {  
                            
                                this.props.categorias.map( (categoria,index) => {
                                    
                                    return this.mostrarOpciones(index)
                                })
                            }
                           </select>
                        </div>
                        <div className="uk-margin" uk-margin="true">
                            <button className="uk-button uk-button-danger">Buscar</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
}