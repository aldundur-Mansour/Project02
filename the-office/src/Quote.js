import React, { Component } from 'react'

export default class Qoute extends Component {


    constructor(props) {
        super (props)
        this.state = {
            name : this.props.CharacterName || "No name " , 
            qoute : this.props.qoute || "No Quote"
        }
    }
    render() {
        return (
            <div>
                <h1> The Office API</h1>
                <div className="Container">
                <h2>Character </h2>
                
                <h4>||</h4>
                <h3> {this.state.name}</h3>
                <h4>=</h4>
                <h2> Quote</h2>
                <h4>||</h4>
                <h3> {this.state.qoute}</h3>
                </div>
                <button className="Button" onClick={this.props.handleClick}> New Quote</button>
            </div>

        )
    }
}
