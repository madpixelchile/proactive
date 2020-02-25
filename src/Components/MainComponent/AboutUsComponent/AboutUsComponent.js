

import React, {Component} from 'react';

import devices from '../../../assets/img/mobile-device-example.png';

export class AboutUsComponent extends Component{

    render(){
        return(
            <div className="row">

                <div className="col-md-6">
                    <div className="info-area">
                        <h1>ProActive latam</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            Ut enim ad minim veniam.
                        </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="img-area">
                        <img src={devices} alt={`Imagen representativa de proActive Latam`}/>
                    </div>
                </div>

            </div>
        );
    }

}