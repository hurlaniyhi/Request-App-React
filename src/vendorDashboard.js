import React from 'react';
import {Route, NavLink, HashRouter, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createReactClass from 'create-react-class';
import Request1 from './request.js';
var Signs = require('./signin.css');
var mainstyle = require('./userdashboard.css');
var {FaStar} = require('react-icons/fa');

var Vendor = createReactClass({
    getInitialState: function(){
        return {
            Bcolor3: "#F2F4F6",
            color3: "#3C4858",
        }
    },
    mate: function(){
        this.setState({Bcolor3: "#F44336",color3: "white"})
        window.location.replace("/")
    },

    render:function(){
        var vendImage = require('./rid1.jpg')
        var vendStyle = {
            height: "120px",
            width: "140px", 
            borderRadius: "100px",
            marginLeft: "80px",
            marginTop: "0px"
        }
        function cr8 (k){
            var send = []
            for(let i = 0; i<k; i++){
            send.push(<FaStar className="star"/>)
        }
        var add = React.createElement("div",{},send)
            return add
        }
        
        
        return (
            
            <div>
               <div className="navigate">
                  <h3 className="info"><i>Vendor Dashboard</i></h3>
                  <p style={{paddingLeft: 400, display: "inline", fontSize: 27, color: '#3C4858',height: "5px"}}>Requests</p>
                  <NavLink to ="/signin.js" style={{textDecoration: "none"}}><button onClick={this.mate} className = "well2" name="Bcolor3" style={{backgroundColor: this.state.Bcolor3,display: "inline",color: this.state.color3,marginLeft: "220px" }} ><h3>LogOut</h3></button></NavLink>        

                  <div className="gradient"></div>
                </div>
                <div className="samerow">
                <div className="mainContainer">
                
                <img className="gtlogo" style={vendStyle} src={vendImage} />
                <h3 style={{textAlign: "center"}}>Kolawole Ridwan</h3>
                <div id = "move">{cr8(5)}</div>
                <hr/><br/>
                <h3 style={{textAlign: "center", color: "Green"}}>Work done : <i style={{display: "inline", color: "Black"}}> 12</i></h3>
                <h3 style={{paddingLeft: "75px", color: "yellowgreen"}}>Pending work : <i style={{display: "inline", color: "Black"}}>4</i></h3>

            
                
            </div>
            <div className="content">
                <Request1 />
            </div>
            </div>
        </div>
    
        )
    }
})

export default Vendor;
