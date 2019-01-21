import React, {Component}  from 'react'
import './index.css'

export default class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.state={value:props.initialValue}

    }
    soma(delta){
        this.setState({...this.state,value: this.state.value+delta})
    }
    
    render(){
        return (
            <div>
                <h1 className="contador">{this.props.label}</h1>
                <h2 className="numero">{this.state.value}</h2>
                <button className="buttonDec" onClick={()=>this.soma(-1)}>Dec</button>
                <button className="buttonInc" onClick={()=>this.soma(1)}>Inc</button>
            </div>
        )
    }
}