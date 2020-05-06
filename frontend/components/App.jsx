import React from 'react';
import GreetingContainer from './Greeting/GreetingContainer';
import { Route, Switch } from 'react-router-dom';
import SignupFormContainer from './Session/signup_form_container';
import LoginFormContainer from './Session/login_form_container';
import { AuthRoute } from '../util/route_util';
import Greeting from './Greeting/greeting';

const App = () => (
    <div className="main-app">
        <Switch>
            <AuthRoute path='/login' component={LoginFormContainer} />
            <AuthRoute path='/signup' component={SignupFormContainer} />
            <Route path='/' component={GreetingContainer}/>
        </Switch>


        
    </div>
);

export default App

// WithRouter from react-importer-dom 