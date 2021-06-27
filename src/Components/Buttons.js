import React, { Component } from 'react';
import './Buttons.css'
class Buttons extends Component {
    render() {
        return (
            <div>
                 <button className="customButtonNavigation"> {this.props.text}</button>
            </div>
        );
    }
}

export default Buttons;