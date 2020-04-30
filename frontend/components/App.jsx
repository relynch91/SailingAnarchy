import React from 'react';
import GreetingContainer from './Greeting/GreetingContainer';
import { Route } from 'react-router-dom';
import SignupFormContainer from './Session/signup_form_container';
import LoginFormContainer from './Session/login_form_container';

const App = () => (
    <div>
        <header>
            <h1>Sailing Anarchy 2.0 </h1>
            <GreetingContainer />
        </header>

        <Route path='/login' component={LoginFormContainer} />
        <Route path='/signup' component={SignupFormContainer} />
    </div>
);

export default App

// WithRouter from react-importer-dom 