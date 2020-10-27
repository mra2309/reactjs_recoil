import React, { useContext } from 'react';
import {UserContext } from '../views/contex/User';

function AutenticatedUser(props) {
    const {user,loading} = useContext(UserContext)
    return (
        <div>
            {
                loading ? <div>Loading . . .</div> :
                <div>{user.name}</div>
            }
        </div>
    );
}

export default AutenticatedUser;