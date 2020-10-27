import React from 'react';
import {Route, Switch } from 'react-router-dom';
import About from '../views/About';
import Home from '../views/Home';
import NotFound from '../views/errors/NotFound';
import Navbar from '../componnents/Navbar';
import Login from '../views/auth/Login';
import Users from '../views/users';
import UserShow from '../views/users/Show';

function index(props) {
    return (
            <Switch>
            <Route exact path='/'>
                <Navbar>
                    <Home />
                </Navbar>
            </Route>

            <Route exact path='/about'>
                <Navbar>
                    <About />
                </Navbar>
            </Route>

            <Route exact path='/users'>
                <Navbar>
                    <Users />
                </Navbar>
            </Route>

            <Route exact path='/users/:identifier'>
                <Navbar>
                    <UserShow />
                </Navbar>
            </Route>

            <Route exact path='/login'>
                <Login />
            </Route>

            <Route path="*" component={NotFound}/>
            
            </Switch>
    );
}

export default index;