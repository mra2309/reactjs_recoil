import Axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user,setUser ]  =  useState([]);
    const [loading,setLoading ]  =  useState(false);

    const getUser = async () => {
        setLoading(true);
        try {
            let response = await Axios.get('https://jsonplaceholder.typicode.com/users/3')
            setUser(response.data)
            setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
        getUser();
    },[])


    return (
        <UserContext.Provider value={{user,loading}}>
            {children}
        </UserContext.Provider>
    )
}


export {UserContext,UserProvider}