import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';
import {NavLink} from 'react-router-dom';


var Styles = require('./signin.css') 




//ReactDOM.render(<App />, document.getElementById('root'));

var SignIn = createReactClass({
    getInitialState: function(){
        return {
            username: "",
            password: "",
            type: "text"
        }
    },

    
    updateInput: function(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    },
    render: function(){
        //document.querySelector("body").style.backgroundColor = "orange"
        if (this.state.username == "Admin" && this.state.password != ""){
        var signLaunch = 
            <NavLink to = "/signin/vendorDashboard.js"><button className="butt" value = "submit">Log In</button></NavLink>
        }
        else if (this.state.username == "ridwan" && this.state.password !=""){
        var signLaunch = 
            <NavLink to = "/signin/userdashboard.js"><button className="butt" value = "submit">Log In</button></NavLink>
        }
        else {
            var signLaunch = <button className="butt" value = "submit">Log In</button>
        }
       
        return (
        <div className="cap">
            <div className="container">
                <h2>Sign In</h2>
                <form>
                <label className="lab"  for="inp1">Username</label><br/>
                <input id="inp1" name="username" className="inp1" type="text" value={this.state.username} placeholder = "Enter Username" onChange={this.updateInput} required/><br/><br/>
                <label className="lab1" for="too">Password</label><br/>
                <input id="too" name="password" className="inp" type="password" value={this.state.password} placeholder = "Enter Password" onChange={this.updateInput} required/> <br/><br/>
                <input type="checkbox" id="two"/>
                <label for="two">Remember me</label><br/><br/><br/>
                {signLaunch}
                </form>
                <p>Sign Up</p>               
            </div>
            <div className="overlay"></div>
        </div>
        )
    }
})
export default SignIn;

//ReactDOM.render(<SignIn />,document.getElementById('know'))