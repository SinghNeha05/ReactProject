import React, { PureComponent } from 'react';
import RegComp from './RegComp';

class PureCompDemo extends PureComponent {


    render() {
        console.log("Pure Component");
        return (
            <div>
                I am a Pure Component {this.props.name}
                
            </div>
        );
    }
}



export default PureCompDemo;