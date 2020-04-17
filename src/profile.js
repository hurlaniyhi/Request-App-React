import React from 'react';
import {Route, NavLink, HashRouter, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import createReactClass from 'create-react-class';
import Request1 from './request.js';
var Signs = require('./signin.css');
var mainstyle = require('./userdashboard.css');
var {FaStar} = require('react-icons/fa');
var Chef = require('./chef.js')

var Profile = createReactClass({
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
        var content = {
                   border: "1px solid white", 
                   height:"550px",
                   marginTop:"15px",
                   backgroundColor: "white",
                   marginLeft: "300px",
                   marginRight: "185px",
                   paddingLeft: "30px",
                   paddingRight: "40px",
                   width: "900px",
                   
                   borderRadius: "50px"
                }
        
        var vendStyle = {
            height: "200px",
            width: "220px", 
            borderRadius: "100px",
            marginLeft: "131px",
            marginTop: "30px"
        }
        let pay = JSON.parse(localStorage.getItem("item"))
        
    
        
        return (
    <div>
        <div className="navigate">
          <h3 className="info" style={{paddingLeft:"800px"}}><i>Vendor Profile</i></h3>
        
          <div className="gradient"></div>
        </div>
       <div className="samerow">
            <div className="mainContainer">
                
                <img className="gtlogo" src="http://www.citypeopleonline.com/wp-content/uploads/2017/01/Guaranty-Trust-Bank-gtbank-logo.jpg" />
                <hr/>                
               
            </div>
            <div className="content" style={content}>
            <img className="gtlogo" style={vendStyle} src={pay[4]} />
                <h3 style={{paddingLeft: "168px",color: "#F44336"}}> {pay[0]}</h3>
                <div id = "move" style={{paddingLeft: "100px"}}>{cr8(pay[5])}</div>
                <hr style={{marginLeft: "115px"}}/><br/>
                <div>
                    <h4 style={{paddingLeft: "40px"}}>{pay[1]}</h4>
                    <h4 style={{paddingLeft: "40px"}}>{pay[2]}</h4>
                    <h4 style={{paddingLeft: "40px"}}>{pay[3]}</h4>
                </div>
                
            </div>
        </div>
    </div>

        )
    }
})
export default Profile;
