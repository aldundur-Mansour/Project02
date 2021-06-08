import React, { Component } from 'react'
import axios from 'axios' 
import Quote from './Quote'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: "" 
    }
    this.handleClick = this.handleClick.bind(this)
  }


componentDidMount() {
  alert("Welcome to the office Quotes website")
}
  componentWillMount() {
    this.callApi()
  } 
   
  handleClick(){
    this.callApi()
    this.setState({
      data:""
    })
   }
  callApi() {
    axios({
      method: "get",
      url: "quotes/random"
    }).then((response) => {
      this.setState({ data: response.data.data })
      console.log("res", this.state.data);
    }).catch((e) => {
      console.log("error", e);
    })
  }





  render() {
    
    return ((this.state.data).length != 0 ) ? 
    <center>
      <Quote  CharacterName = {`${this.state.data.character.firstname} ${this.state.data.character.lastname}`} qoute = {this.state.data.content} handleClick= {this.handleClick}/> 
      </center>
    : (
      <center>
      <span>Loading Quotes</span>
      </center>
    )
      
    
  }
}
