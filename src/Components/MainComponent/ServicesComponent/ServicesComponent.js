

import React, {Component} from 'react';


export class ServicesComponent extends Component{


    render(){
        return(
            <div className="row">

                <div className="col-md-4">
                    <div className="service-box">
                        <h3>Diseño de experiencias UX</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            Ut enim ad minim veniam.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-box">
                        <h3>Diseño de interfaces UI</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            Ut enim ad minim veniam.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-box">
                        <h3>Desarrollo Web Front / Back End</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            Ut enim ad minim veniam.
                        </p>
                    </div>
                </div>

            </div>
        );
    }

}