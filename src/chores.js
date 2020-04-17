var {FaStar} = require('react-icons/fa')
var React = require('react');
//var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class')
var style = require('./chef.css')


var Chores = createReactClass({
    getInitialState: function(){
        return{
            first: "",
            second: "",
            third: "",
            fourth: "",
            request: true
        }
    },
    request1: function(){
        if (this.state.request == true){
        this.setState({
            request: false,
            first: (<div><p style={{display: "inline", fontSize: "12px", color: "Black", paddingRight: "20px"}}>you just made a request</p></div>)
        })
    }
        else if(this.state.request == false){
            this.setState({
                request: true,
                first: (<div><p style={{display: "inline", fontSize: "12px", color: "Black", paddingRight: "20px"}}>you've cancelled your request</p></div>)
            })
        }
    },
    request2: function(){
        if (this.state.request == true){
        this.setState({
            request: false,
            second: (<div><p style={{display: "inline", fontSize: "12px", color: "Black", paddingRight: "20px"}}>you just made a request</p></div>)
        })
    }
    else if(this.state.request == false){
        this.setState({
            request: true,
            second: (<div><p style={{display: "inline", fontSize: "12px", color: "Black", paddingRight: "20px"}}>you've cancelled your request</p></div>)
        })
    }
    
    },
    request3: function(){
        if (this.state.request == true){
        this.setState({
            request: false,
            third: (<div><p style={{display: "inline", fontSize: "12px", color: "Black", paddingRight: "20px"}}>you just made a request</p></div>)
        })
    }   else if(this.state.request == false){
        this.setState({
            request: true,
            third: (<div><p style={{display: "inline", fontSize: "12px", color: "Black", paddingRight: "20px"}}>you've cancelled your request</p></div>)
        })
    }  
    },
    request4: function(){
        if (this.state.request == true){
        this.setState({
            request: false,
            fourth: (<div><p style={{display: "inline", fontSize: "12px", color: "Black", paddingRight: "20px"}}>you just made a request</p></div>)
        })
    }   else if(this.state.request == false){
        this.setState({
            request: true,
            fourth: (<div><p style={{display: "inline", fontSize: "12px", color: "Black", paddingRight: "20px"}}>you've cancelled your request</p></div>)
        })
    }  
    },
    render: function(){
        
        
        var story =require("./utensils.jpg")
        var story1 = require("./cleaning.jpg")
        var story2 = require('./iron.jpg')
        var story3 = require('./Baby.jpg')

        
        

        var infoArr = [
            {name: "Washing of Utensils", src: story},
            {name: "House Cleaning", src: story1},
            {name: "Laundering", src: story2},
            {name: "Baby Sitting", src: story3},]
        return (
        <div className="chefbody">
            <table className="tablee">
                <tr>
                    <td rowSpan ="3"><img onClick = {this.request1} src={infoArr[0].src}/></td>
                    <td></td><td></td><td></td>
                    <td className="chefname" rowSpan ="3"><h2>{infoArr[0].name}<br/>{this.state.first}</h2></td>
                    <td></td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                
                <hr/>
                <tr>
                    <td rowSpan ="3"><img onClick = {this.request2} src={story1}/></td>
                    <td></td><td></td><td></td>
                    <td className="chefname" rowSpan ="3"><h2>{infoArr[1].name}<br/>{this.state.second}</h2></td>

                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <hr/>
                <tr>
                    <td rowSpan ="3"><img onClick = {this.request3} src={story2}/></td>
                    <td></td><td></td><td></td>
                    <td className="chefname" rowSpan ="3"><h2>{infoArr[2].name}<br/>{this.state.third}</h2></td>

                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <hr/>
                <tr>
                    <td rowSpan ="3"><img onClick = {this.request4} src={story3}/></td>
                    <td></td><td></td><td></td>
                    <td className="chefname" rowSpan ="3"><h2>{infoArr[3].name}<br/>{this.state.fourth}</h2></td>

                </tr>
                
            </table>
        </div>
        )
    }
})




module.exports = Chores
