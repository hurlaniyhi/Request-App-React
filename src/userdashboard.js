import React from 'react';
import {Route, NavLink, HashRouter, Switch, Redirect} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createReactClass from 'create-react-class';
var SignIn = require('./signin.js')
var Signs = require('./signin.css')
//var {Route,NavLink,HashRouter,Switch} = require('react-router-dom');

//var SignIn = require('./signin.js');
var Chef = require('./chef.js');
var Dashboard = require('./dashboard.js')
var Chores = require('./chores.js')
var Profile = require('./profile.js')
var mainstyle = require('./userdashboard.css');

var Sign = createReactClass({
    getInitialState: function(){
        return {
            Bcolor1: "#F44336",
            color1: "white",
            Bcolor2: "#F2F4F6",
            color2: "#3C4858",
            Bcolor3: "#F2F4F6",
            color3: "#3C4858",
            Bcolor4: "#F2F4F6",
            color4: "#3C4858"
        }
    },
    colorit: function(e){
        
            this.setState({
                Bcolor1: " #F2F4F6",
                color1: "#3C4858",
                Bcolor2: "#F2F4F6",
                color2: "#3C4858",
                Bcolor3: "#F2F4F6",
                color3: "#3C4858",
                Bcolor4: "#F2F4F6",
                color4: "#3C4858"
            })    
       
    },
    colorit1: function(e){
        
        this.setState({
            Bcolor1: "#F44336",
            color1: "white",
            Bcolor2: "#F44336",
            color2: "white",
            Bcolor3: "#F2F4F6",
            color3: "#3C4858",
            Bcolor4: "#F2F4F6",
            color4: "#3C4858"
        })       
},
colorit2: function(e){
        
    this.setState({
        Bcolor1: "#F44336",
        color1: "white",
        Bcolor2: "#F2F4F6",
        color2: "#3C4858",
        Bcolor3: "#F44336",
        color3: "white",
        Bcolor4: "#F2F4F6",
        color4: "#3C4858"
    })    

},
colorit3: function(e){
        
    this.setState({
        Bcolor1: "#F44336",
        color1: "white",
        Bcolor2: "#F2F4F6",
        color2: "#3C4858",
        Bcolor3: "#F2F4F6",
        color3: "#3C4858",
        Bcolor4: "#F44336",
        color4: "white"
    })    

},
mate: function(){
    this.setState({Bcolor3: "#F44336",color3: "white"})
    window.location.replace("/")
},

    render: function(){
         
        
        return (
    <HashRouter>
      <div className="navigate">
          <h3 className="info"><i>User Dashboard</i></h3>
        <NavLink exact to ="./chef.js"><button className = "well1" onClick = {this.colorit1} name="Bcolor2" style={{backgroundColor: this.state.Bcolor2,color: this.state.color2}}><h3>Vendors</h3></button></NavLink>
        <NavLink to ="./chores.js" style={{textDecoration: "none"}}><button className = "well2" onClick = {this.colorit3} name="Bcolor4" style={{backgroundColor: this.state.Bcolor4,display: "inline",color: this.state.color4, }}><h3>Chores</h3></button></NavLink>
        
        <NavLink to ="/" style={{textDecoration: "none"}}><button onClick={this.mate} className = "well2" name="Bcolor3" style={{backgroundColor: this.state.Bcolor3,display: "inline",color: this.state.color3,marginLeft: "240px" }} ><h3>LogOut</h3></button></NavLink>        
        
        <div className="gradient"></div>
      </div>
        <div className="samerow">
            <div className="mainContainer">
                
                <img className="gtlogo" src="http://www.citypeopleonline.com/wp-content/uploads/2017/01/Guaranty-Trust-Bank-gtbank-logo.jpg" />
                <hr/>
                <NavLink to = "/dashboard.js"><button onClick={this.colorit} name="Bcolor1" style={{backgroundColor: this.state.Bcolor1,color: this.state.color1}}><h3>Dashboard</h3></button></NavLink><br/><br/>
                
               {/*<NavLink to="/chef.js"><button id = "well" onClick = {this.colorit1} name="Bcolor2" style={{backgroundColor: this.state.Bcolor2}}><h3>Chef</h3></button></NavLink><br/><br/>
                <NavLink to="/signin.js" ><button onClick = {this.colorit2} name="Bcolor3" style={{backgroundColor: this.state.Bcolor3}}><h3>signIn</h3></button></NavLink>*/}

            </div>
            <div className="content">
                <Switch>
                <Route path = "/dashboard.js" component = {Dashboard} />
                <Route path="/chef.js" component = {Chef} />
                <Route path="/chores.js" component = {Chores} />
                
                
                
                
            
                
            
                                
                </Switch>
            </div>
        </div>
    </HashRouter>    
        )
    }
})


//ReactDOM.render(<Sign />,document.getElementById('run'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default Sign;