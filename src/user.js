import React from 'react';
import PropTypes from 'prop-types'
const user = (props)=>{
    return (
        <li className = "user">
            <p>userName:{props.user.userName}</p>
            <p>played {props.showGamePlayed?props.user.noGamePlayed:'*'} games.</p>
        </li>
    );
}
user.PropTypes = {
    showGamePlayed:PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
};
export default user;