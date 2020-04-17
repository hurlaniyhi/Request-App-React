var {FaStar} = require('react-icons/fa')
var React = require('react');
//var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class')
var style = require('./chef.css')

var Request1 = createReactClass({
    
    getInitialState: function(){
        
        
        return {
            Request1: (
                <div>
                    <p style={{display: "inline", fontSize: "12px", color: "Black", paddingRight: "20px"}}>Did you accept this request</p>
                    <button style={{display: "inline", width: "40px", height: "30px"}} onClick = {this.change1}>yes</button>
                    <button style={{display: "inline", width: "40px", height: "30px", marginLeft: "20px"}} onClick = {this.change_1}>No</button>
                    
                </div>
            ) ,
            Request2: (
                <div>
                    <p style={{display: "inline", fontSize: "12px", color: "Black", paddingRight: "20px"}}>Did you accept this request</p>
                    <button style={{display: "inline", width: "40px", height: "30px"}} onClick = {this.change2}>yes</button>
                    <button style={{display: "inline", width: "40px", height: "30px", marginLeft: "20px"}} onClick = {this.change_2}>No</button>
                    
                </div>
            ),
            Request3: (
                <div>
                    <p style={{display: "inline", fontSize: "12px", color: "Black", paddingRight: "20px"}}>Did you accept this request</p>
                    <button style={{display: "inline", width: "40px", height: "30px"}} onClick = {this.change3}>yes</button>
                    <button style={{display: "inline", width: "40px", height: "30px", marginLeft: "20px"}} onClick = {this.change_3}>No</button>
                    
                </div>
            ),
            Request4: (
                <div>
                    <p style={{display: "inline", fontSize: "12px", color: "Black", paddingRight: "20px"}}>Did you accept this request</p>
                    <button style={{display: "inline", width: "40px", height: "30px"}} onClick = {this.change4}>yes</button>
                    <button style={{display: "inline", width: "40px", height: "30px", marginLeft: "20px"}} onClick = {this.change_4}>No</button>
                    
                </div>
            )
        }
    },
    change1: function(){
        this.setState({Request1: (<div><p style={{display: "inline", fontSize: "12px", color: "Black", paddingRight: "20px"}}>you've accepted the request</p></div>)})
    },
    change_1: function(){
        this.setState({Request1: (<div><p style={{display: "inline", fontSize: "12px", color: "Black", paddingRight: "20px"}}>you just declined the request</p></div>)})
    },
    change2: function(){
        this.setState({Request2: (<div><p style={{display: "inline", fontSize: "12px", color: "Black", paddingRight: "20px"}}>you've accepted the request</p></div>)})
    },
    change_2: function(){
        this.setState({Request2: (<div><p style={{display: "inline", fontSize: "12px", color: "Black", paddingRight: "20px"}}>you just declined the request</p></div>)})
    },
    change3: function(){
        this.setState({Request3: (<div><p style={{display: "inline", fontSize: "12px", color: "Black", paddingRight: "20px"}}>you've accepted the request</p></div>)})
    },
    change_3: function(){
        this.setState({Request3: (<div><p style={{display: "inline", fontSize: "12px", color: "Black", paddingRight: "20px"}}>you just declined the request</p></div>)})
    },
    change4: function(){
        this.setState({Request4: (<div><p style={{display: "inline", fontSize: "12px", color: "Black", paddingRight: "20px"}}>you've accepted the request</p></div>)})
    },
    change_4: function(){
        this.setState({Request4: (<div><p style={{display: "inline", fontSize: "12px", color: "Black", paddingRight: "20px"}}>you just declined the request</p></div>)})
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
                    <td rowSpan ="3"><img src={infoArr[0].src}/></td>
                    <td></td><td></td><td></td>
                    <td className="chefname" rowSpan ="3"><h2>{infoArr[0].name}<br/>{this.state.Request1}</h2></td>
                    <td></td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                
                <hr/>
                <tr>
                    <td rowSpan ="3"><img src={story1}/></td>
                    <td></td><td></td><td></td>
                    <td className="chefname" rowSpan ="3"><h2>{infoArr[1].name}<br/>{this.state.Request2}</h2></td>

                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <hr/>
                <tr>
                    <td rowSpan ="3"><img src={story2}/></td>
                    <td></td><td></td><td></td>
                    <td className="chefname" rowSpan ="3"><h2>{infoArr[2].name}<br/>{this.state.Request3}</h2></td>

                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <hr/>
                <tr>
                    <td rowSpan ="3"><img src={story3}/></td>
                    <td></td><td></td><td></td>
                    <td className="chefname" rowSpan ="3"><h2>{infoArr[3].name}<br/>{this.state.Request4}</h2></td>

                </tr>
                
            </table>
        </div>
        )
    }
})
export default Request1;