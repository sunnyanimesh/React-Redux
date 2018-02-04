import React,{Component} from 'react';
import {Form,FormControl,Button} from 'react-bootstrap';
import './App.css';
class App extends Component{

    constructor(){
        super();
        this.state= {
             date : ""
        }
    }

    printDate(date){
        var today = new Date().getTime();
        var d = new Date(date).getTime();
        var ms = today-d;
        if(ms>0)
        {
        if(!isNaN(ms)){
            var days = Math.floor(ms /(1000*3600*24));
            var years = Math.floor(days/365);
            days -= years*365;
            var month = Math.floor(days/31);
            days -= month*31;
                return `${years} years ${month} month and ${days} days old`;
            }
         else
            return `` ;  
        }
        else
            return ``;
            
        }
        
    
    render(){
        return(
            <div className = "App">
                <h2>Input your Birthday!</h2>
                <Form inline>
                    <FormControl type='date'  onChange = {event=>{
                        this.setState({date : event.target.value},function(){
                    
                        });
                    }} >
                   </FormControl>
                    {' '}
      
                </Form>
                    <h3>{this.state.date}</h3>
                <h4>{this.printDate(this.state.date)} </h4>    
            </div>
        )
    }
}

export default App;