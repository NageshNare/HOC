import React, {Component} from 'react';

const Army = (Men, shots) =>{
class newMan extends Component{

    state = {
        gunShot: 0
    }

    handleGunShot = () =>{
        this.setState({gunShot: this.state.gunShot + shots})
    }
    render(){
        return <Men 
            hocgunname="AK47" 
            hocgunshots={this.state.gunShot}
            hochandlegunshot={this.handleGunShot}
            {...this.props}/>
    }
}
  return newMan;
}
export default Army;