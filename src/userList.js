import React, {Component} from 'react';
import PropTypes from 'prop-types';
import user from './user';
class userList extends Component{
    state = {
        showGamePlayed:true,
    }
    toggleButtonClick=() =>{
        this.setState((oldState)=>
        ({showGamePlayed:!oldState.showGamePlayed}),
        );
    }
    render(){
        const {users} = this.props;
        const {showGamePlayed} = this.state;
        const gamePlayed= (
            <div>
                <p>
                <button className="smallButton" onClick={this.toggelButtonClick}>{showGamePlayed?"Hide ":"Show "} 
     							the Number of Games Played</button>
                </p>
            </div>
        );
        return (
            <div>
                <h1>users</h1>
                {users && users.length>0?gamePlayed:''}
                <ol>
                    {user.map((user) =>(
                        <user key={user.userName} user ={user} showGamePlayed ={showGamePlayed} />
                    ))}
                </ol>
            </div>

        );
    }
}
userList.propTypes = {
    users: PropTypes.array.isRequired,
};
export default userList;