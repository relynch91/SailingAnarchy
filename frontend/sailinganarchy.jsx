import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout } from './util/session_api_util';
// import { current_user } from 

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    window.login = login
    window.signup = signup
    window.logout = logout
    // window.current_user = current_user
    ReactDOM.render(<h1>Welcome to Sailing Anarchy! </h1>, root);
});