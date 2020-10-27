import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Show(props) {
    const [user,setUser] = useState([]);
    let {identifier} = useParams();
    
    const getUser = async () => {
        try {
            let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`)
            setUser(response.data);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(()=> {getUser()},[identifier])
    
    return (
        <div className="container">
        <div className="card">
            <div className="card-header">
                <div>{user.name}</div>
            </div>
            <div className="card-body">
            <div>{user.username}</div>
            <div>{user.email}</div>
            <div>{user.website}</div>
            <div>{user.user}</div>
            <div>{user.phone}</div>
            </div>
        </div>
        </div>
    );
}

export default Show;