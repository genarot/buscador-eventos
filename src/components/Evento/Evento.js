import React from 'react'

const Evento = function(props){
    const {name, description, url, logo}  = props.info;

    if ( description.text.length > 250) {
        description.text = description.text.substr(0, 250);
    }
    if ( !name ) return null;
    console.log(props.info);
    
    return  (
            <div>
                <div className="uk-card uk-card-default">
                    <div className="uk-card-media-top">
                        <img src={ (logo) ? logo.url : ''} alt={name.text}/>
                    </div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title">{name.text}</h3>
                        <p>
                            {description.text}
                        </p>
                    </div>
                    <div className="uk-card-footer">
                        <a className="uk-button uk-button-secondary" href={url} target="_blank">
                            Mas informacion
                        </a>
                    </div>
                </div>
            </div>
    )
}
export default Evento;