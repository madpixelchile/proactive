


import React, {Component} from 'react';

import './MainComponent.scss';

import {AboutUsComponent} from './AboutUsComponent/AboutUsComponent';
import {ServicesComponent} from './ServicesComponent/ServicesComponent';
import {ProjectComponent} from './ProjectComponent/ProjectComponent';
import {ContactComponent} from './ContactComponent/ContactComponent';

export class MainComponent extends Component{


    render(){
        return(
            <main>

                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <AboutUsComponent />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <h2>Servicios</h2>
                            <p className="preview-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua t labore et dolore magna aliqua
                            </p>
                            <ServicesComponent />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <h2>Proyectos</h2>
                            <p className="preview-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua t labore et dolore magna aliqua
                            </p>
                            <ProjectComponent/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <h2>Conversemos</h2>
                            <p className="preview-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                            <ContactComponent/>
                        </div>
                    </div>
                </div>

            </main>
        )
    }


}