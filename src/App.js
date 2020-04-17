import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

/*
//import Component from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';*/


export default class App extends Component
{
constructor(props){
  super(props)
  this.state={
    username: "Ridwan",
    course:"React from zero to hero"
  }
}

changestate =()=>
{
 
    this.setState({username: this.state.username=="Ridwan"?"Olaniyi":"Ridwan"})
 
};
  render(){
    return(

      <div>
        <h4 className="bg-primary text-center text-white p-2">
    Hey {this.state.username} welcome to react. <strong>the course is {this.state.course}</strong>
       <button className="btn btn-danger m-3" onClick={this.changestate}>change</button>
        </h4>
      </div>

    )
  }
}
