

import React,{Component} from 'react';

export class ContactComponent extends Component{

    constructor(){
        super();

        this.state = {
            initalState: '',
        }

    }

    render(){
        return(
            <form className={`form-area`} method={`post`} action={`#;`}>
           
                <div className={` field`}>
                    <input type="text" placeholder="Escribe tu Nombre aquí" />
                </div>
                <div className={` field`}>
                    <input type="email" placeholder="Escribe tu email aquí" />
                </div>
                <div className={` field`}>
                    <input type="number" placeholder="Escribe tu teléfono aquí" />  
                </div>
                <div className={` field`}>
                    <textarea placeholder="Escribe tu mensaje aquí"></textarea>
                </div>
                
                <div className="button-area">
                    <button className={`btn btn--primary`} type={`submit`} title={`Enviar mensaje`}>Enviar</button>
                </div>
                
            </form>
        );
    }

}