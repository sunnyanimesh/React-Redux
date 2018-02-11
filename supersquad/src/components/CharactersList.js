import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addCharacterByid} from '../actions';



class CharacterList extends Component{

    render(){

        console.log('this.props',this.props,this.state);
       
        return(<div>
            <h3>Characters</h3>  
                <ul className ="list-group">
                {
                    this.props.characters.map(character =>{
                         return(<li key={character.id} className="list-group-item">
                            <div className="list-item">{character.name}</div>
                            <div className="list-item right-button" onClick={()=>(this.props.addCharacterByid(character.id))}>
                                +
                            </div>
                        
                         </li>
                         
                        )   
                    })
                }
                </ul>

               

            </div>)

        }



}

function mapStateToProps(state){
    console.log("state",state);
    return {
        characters : state.characters,
        heroes : state.heroes
    };

}

function mapDispatchToProps(dispatch){
     return bindActionCreators({addCharacterByid},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(CharacterList);