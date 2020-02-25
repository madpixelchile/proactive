

import React, {Component} from 'react';

import './ProjectComponent.scss';

export class ProjectComponent extends Component{

    constructor(){
        super();

        this.state = {
            loadData: null,
        }

    }

    
    componentDidMount = ()=> {
        this.setState = ({
            loadData: 'toke',
        });
    }
    

    render(){
        return(
            <div className="row">

                <div className="project-list">

                    <div className="col-md-4">
                        <div className="project-box">
                            <h3>CLIENTE</h3>
                            <span>Desarrollo Front End Sitio público</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-box">
                            <h3>CLIENTE</h3>
                            <span>Desarrollo Front End Sitio público</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-box">
                            <h3>CLIENTE</h3>
                            <span>Desarrollo Front End Sitio público</span>
                        </div>
                    </div>
                
                </div>

            </div>
        );
    }


}