import React,{Component} from 'react';
import {connect} from 'react-redux';


class SquadStats extends Component{
 
    render(){
        console.log("squad stats.." ,this.props.stats);
        return(<div>
            <h3>Squad Stats</h3>
            <ul className ="list-group">
                
                        <li  className="list-group-item">
                            <div className="list-item">Overall Strength : {this.props.stats.strength}</div>
                         </li>
                         <li  className="list-group-item">
                            <div className="list-item">Overall Intelligence :{this.props.stats.intellegence}</div>
                         </li>
                         <li  className="list-group-item">
                            <div className="list-item">Overall Speed :{this.props.stats.speed}</div>
                         </li>
                
                </ul>
        </div>);
    }
}

function mapStateToProps(state){

    return {
        characters : state.characters,
        heroes : state.heroes,
        stats : state.squadStat
    };

}
export default connect(mapStateToProps,null)(SquadStats);
