var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class')
var styles = require("./mystyle.js")
var count = 0

var Child = createReactClass({
    getInitialState: function(){
        return {
            
            background: "white"
    }
    },
    handleMe: function(){
        var col = count==1 ? 'orange' : count==2 ? "blue" : count==3 ? "yellow": (count=0,"purple")
        count++

        this.setState({background: col})
    },
    //interval: null,
    componentDidMount: function(){
        this.interval=setInterval(this.handleMe,300)
    },
    stopThis: function(){
        clearInterval(this.interval)
        
        
    },
    render: function(){

        var changec={
            "background": this.state.background
        }
        var stoc=JSON.stringify(this.state)
    return (
          <div>
              <input type="text"/>
             <h1 style={changec}>Hey, my name is {this.state.background} will be {stoc}</h1>
             <button onClick={this.stopThis}>stop me</button>
             <h2 className="rotated">rotate</h2>
             
             
             
          </div>
    )
    }
})
ReactDOM.render(<Child/>,document.getElementById("run"))

//module.exports = Child;