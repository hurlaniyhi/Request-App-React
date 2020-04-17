import React from 'react';
import ReactDom from 'react-dom';
import createReactClass from 'create-react-class'
import {BrowserRouter, NavLink, Switch, Route} from 'react-router-dom';
import Sign from './userdashboard.js';
import SignIn from './signin.js';
import Vendor from './vendorDashboard.js';
import Profile from'./profile.js'
//var Profile = require('./profile.js')

//ReactDOM.render(<App />, document.getElementById('root'));




var AllOver = createReactClass({
    render: function(){
        
        return (
            <BrowserRouter>
                <Switch>
                    <div>
                        <Route path = "/" exact component = {SignIn}/>
                        <Route path = "/signin" exact component = {SignIn} />
                        <Route path = "/signin/userdashboard.js" component = {Sign} />
                        <Route path = "/signin/vendorDashboard.js" component = {Vendor}/>
                        <Route path = "/signin/userdashboard/chef/profile.js" component = {Profile}/>
                        
                    </div>
                </Switch>
            </BrowserRouter>
        )
    }
})

ReactDom.render(<AllOver />, document.getElementById('run'))