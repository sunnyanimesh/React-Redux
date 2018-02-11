import React,{Component} from 'react';
import {connect} from 'react-redux';

import {removeCharacterByid} from '../actions';

class HeroList extends Component{
    render(){
        return(<div>
             <h3>Heroes</h3>  
                <ul className="list-group">
                {
                    this.props.heroes.map(hero =>{
                         return(<li className="list-group-item" key={hero.id}>
                            <div className="list-item">{hero.name}</div>
                            <div className="list-item right-button" onClick={()=>(this.props.removeCharacterByid(hero.id))}>
                                -
                            </div>
                         </li>
                         
                        )   
                    })
                }
                </ul>



        </div>);
    }
}

function mapStateToProps(state){
    console.log("state",state);
    return {
        characters : state.characters,
        heroes : state.heroes
    };

}
export default connect(mapStateToProps,{removeCharacterByid})(HeroList);
