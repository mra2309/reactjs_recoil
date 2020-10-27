import React from 'react';
import { NavLink } from 'react-router-dom';

function login(props) {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-4">
                <div className="text-center py-5">
                    Go To <NavLink to="/">Home</NavLink>
                </div>
                <div className="card">
                <div className="card-header">Login</div>
                <div className="card-body">
                    <form action="">
                    <div className="form-group mb-3">
                            <label htmlFor="email" className="email">Email</label>
                            <input type="email" name="email" id="email" className="form-control"/>
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="email" className="email">Email</label>
                            <input type="email" name="email" id="email" className="form-control"/>
                        </div>

                        <button type="submit" className="btn btn-block btn-primary">Login</button>
                    </form>
                </div>
            </div>
                </div>
            </div>
        </div>
    );
}

export default login;