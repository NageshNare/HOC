import React, { Component } from 'react';
import Army from './Witharm';

class Nagesh extends Component{
    render(){
        return(
            <div>
                <h2>Camp: {this.props.camp}</h2>
                <h3 onMouseOver={this.props.hochandlegunshot}>Nagesh fires: {this.props.hocgunshots}</h3>
            </div>
        )
    }
}

export default Army(Nagesh, 20);