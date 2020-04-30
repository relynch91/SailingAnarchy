import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = () => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Existing user? Sign In </Link>
            <Link to='/signup'>Sign Up</Link>
        </nav>
    );
    return sessionLinks();
}

export default Greeting;