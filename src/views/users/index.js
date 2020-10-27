import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Index (props) {

    const [users, setUsers] = useState([])


    const getUser = async () => {
        try{
        let response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data)
        }catch(e){
            console.log(e.message)
        }
    }


    useEffect(()=>{
        getUser()
    }, [])

    return (
        <div className="container">
            <div className="row">
                {
                    users.map((user, index)=>{
                        return(
                            <div className="col-md-4 mb-3" key={index}>
                                <div className="card">
                                    <div className="card-header">
                                        {user.name}
                                    </div>
                                    <div className="card-body">
                                    <div className="mb-4">
                                    <a href={`http//${user.website}`} target="_blank">{user.website}</a>
                                    </div>

                                    <NavLink className="btn btn-primary btn-block" to={`/users/${user.id}`} >View Profile</NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Index;