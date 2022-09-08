import React, { PureComponent } from 'react';
import RegComp from './RegComp';
import PureCompDemo from './PureCompDemo';

// Make regular class component to pure component to see the result.

class ParentComp extends PureComponent {
    constructor(props) {
        super(props);
        this.state= {
            name: "Neha",
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:"Neha"
            })
        }, 2000);
    }
    

    render() {
        console.log("******* Parent Component****");
        return (
            <div>
                Parent Component
                <RegComp name={this.state.name}></RegComp>
                <PureCompDemo name={this.state.name}></PureCompDemo>
            </div>
        );
    }
}

export default ParentComp;