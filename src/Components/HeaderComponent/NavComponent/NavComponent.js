
import React,{Component} from 'react';

import './NavComponent.scss';

import logo from '../../../assets/img/proactive-logo.svg';

export class NavComponent extends Component{

    constructor(){
        super();

        this.state = {
            activeClassButton: false,
        }

    }

    navButtonBehaviours =()=>{
        this.setState({
            activeClassButton: true,
        });
    }

    render(){
        return(

            <nav>
            
                <div>
                    <a href={`#;`} onClick={this.navButtonBehaviours} title="Volver al inicio">
                        <img src={logo} alt={`proactive logo`} />
                    </a>
                </div>
                <div>
                    <div className={`button-group`}>
                        <a href={`#;`} title="Ir a Nosotros">Nosotros</a>
                        <a href={`#;`} title="Ir a Servicios">Servicios</a>
                        <a href={`#;`} title="Ir a Proyectos">Proyectos</a>
                        <a href={`#;`} title="Ir a Conversemos">Conversemos</a>
                    </div>
                </div>
            
            </nav>

        );
    }

}