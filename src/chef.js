var {NavLink} = require('react-router-dom');
var {FaStar} = require('react-icons/fa')
var React = require('react');
//var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class')
var style = require('./chef.css')
var Profile = require('./profile.js')

var move;
var move1;
var move2;
var move3;


var Chef = createReactClass({
    
    mate: function(){
        //alert(move1)
       //localStorage.removeItem("item")
       localStorage.setItem('item',JSON.stringify(move1))
    
        this.setState({
            Bcolor3: "#F44336",
            color3: "white",
            
        })
        window.location.replace("/signin/userdashboard/chef/profile.js")
    },
    mate1: function(){
        
       localStorage.setItem('item',JSON.stringify(move2))
    
        this.setState({
            Bcolor3: "#F44336",
            color3: "white",
            
        })
        window.location.replace("/signin/userdashboard/chef/profile.js")
    },
    mate2: function(){
        
       
       localStorage.setItem('item',JSON.stringify(move3))
    
        this.setState({
            Bcolor3: "#F44336",
            color3: "white",
            
        })
        window.location.replace("/signin/userdashboard/chef/profile.js")
    },
    mate3: function(){
        
       localStorage.setItem('item',JSON.stringify(move))
    
        this.setState({
            Bcolor3: "#F44336",
            color3: "white",
            
        })
        window.location.replace("/signin/userdashboard/chef/profile.js")
    },
    
    render: function(){
        
        
        
        var story =require("./rid1.jpg")
        var story1 = require("./rid2.jpg")
        var story2 = require('./rid3.jpg')
        var story3 = require('./tochy.jpg')
        function cr8 (k){
            var send = []
            for(let i = 0; i<k; i++){
            send.push(<FaStar className="star"/>)
        }
        //var add = React.createElement("div",{},send)
            return send
        }

        
        

        var infoArr = [
            {name: "Kolawole Ridwan", rating: cr8(5), src: story, star: 5,status: "Status: single",phone_No: "Phone Number: 07087994127",Address: "Location : No 2A kano street,oyingbo lagos"},
            {name: "Olanrewaju Habeeb", rating: cr8(3), src: story1,star: 3,status: "Status: married",phone_No: "Phone Number: 09087994137",Address: "Location : No 67 yaba street,orile lagos"},
            {name: "Olaniyi Jibola", rating: cr8(4), src: story2,star: 4,status: "Status: single",phone_No: "Phone Number: 09060673167",Address: "Location : No 20 Adeola Odeku street,VI lagos"},
            {name: "Solomon Tochukwu", rating: cr8(2), src: story3,star: 2,status: "Status: married",phone_No: "Phone Number: 09033505658",Address: "Location : No 45 De bryune street, Ajah lagos"}]

        
           
        return (
        <div className="chefbody">
            <table className="tablee">
                <tr>
                    <td rowSpan ="3"><img src={infoArr[0].src}/></td>
                    <td></td><td></td><td></td>
                    <td className="chefname" rowSpan ="3"><NavLink to = "/chef/profile.js" style = {{textDecoration: "none",color: "#F44336"}}><h2 onClick={move1 = [infoArr[0].name,infoArr[0].Address, infoArr[0].phone_No, infoArr[0].status, infoArr[0].src, infoArr[0].star],this.mate} >{infoArr[0].name} <br/>{infoArr[0].rating}</h2></NavLink></td>
                    <td></td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                
                <hr/>
                <tr>
                    <td rowSpan ="3"><img src={story1}/></td>
                    <td></td><td></td><td></td>
        <td className="chefname" rowSpan ="3"><NavLink to = "/chef/profile.js" style = {{textDecoration: "none",color: "#F44336"}}><h2  onClick={move2 = [infoArr[1].name,infoArr[1].Address, infoArr[1].phone_No, infoArr[1].status, infoArr[1].src, infoArr[1].star], this.mate1}>{infoArr[1].name} <br/>{infoArr[1].rating}</h2></NavLink></td>

                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <hr/>
                <tr>
                    <td rowSpan ="3"><img src={story2}/></td>
                    <td></td><td></td><td></td>
                    <td className="chefname" rowSpan ="3"><NavLink to = "/chef/profile.js" style = {{textDecoration: "none",color: "#F44336"}}><h2 onClick={move3 = [infoArr[2].name,infoArr[2].Address, infoArr[2].phone_No, infoArr[2].status, infoArr[2].src, infoArr[2].star], this.mate2}>{infoArr[2].name}<br/>{infoArr[2].rating}</h2></NavLink></td>

                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <hr/>
                <tr>
                    <td rowSpan ="3"><img src={story3}/></td>
                    <td></td><td></td><td></td>
                    <td className="chefname" rowSpan ="3"><NavLink to = "/profile.js" style = {{textDecoration: "none",color: "#F44336"}}><h2 onClick={move = [infoArr[3].name,infoArr[3].Address, infoArr[3].phone_No, infoArr[3].status, infoArr[3].src, infoArr[3].star],this.mate3}>{infoArr[3].name}<br/>{infoArr[3].rating}</h2></NavLink></td>

                </tr>

                
            </table>
        
            
        </div>
        )
    }
})
module.exports = Chef;
