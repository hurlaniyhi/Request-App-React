var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class')
var mainstyle = require('./mainstyle.js')

var Sign = createReactClass({
    render: function(){
        return (
            <div className="mainContainer">
                <ul>
                  <li>Chef</li>
                  <li>Chores</li>
                </ul>
            </div>
        )
    }
})
   

//ReactDOM.render(<Sign />,document.getElementById("root"))