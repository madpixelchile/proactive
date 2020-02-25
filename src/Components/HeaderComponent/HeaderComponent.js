
import React, {Component} from 'react';

import './HeaderComponent.scss';

import {NavComponent} from './NavComponent/NavComponent';


export class HeaderComponent extends Component{


    render(){
        return(
            <header>
                <div className="container">

                    <div className="row">

                        <div className="col-xs-12">

                            <NavComponent/>

                        </div>

                    </div>

                </div>
            </header>
        );
    }

}