import React,{Component} from 'react';
import Evento from '../Evento/Evento';

export default class Eventos extends Component {
    
    render() {
        console.log(this.props);
        
        return (
            <div className="uk-child-width-1-3@dm" uk-grid="true">
                {
                    this.props.eventos.map( (evento,index) => <Evento key={index} info={evento}/> )
                }
            </div>
        );
    }
}