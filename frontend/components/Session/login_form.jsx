import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        })
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign( {}, this.state);
        this.props.processForm(user)
    }

    render() {
        return (
            <div classname="login-main-page">

                <div className="login-page">
                    <p>Sailing Sanctuary</p>
                </div>

                <div className="login-page">
                    <Link to="/">Community Home </Link>
                </div>

                <div className="login-page">
                    <h1>Sign In </h1>
                    <p> Don't have an account?</p>
                    <Link to="/signup">Sign up</Link>
                </div>

                <form className="login-page" onSubmit={this.handleSubmit}>
                    <div>
                        <label> Display Name
                            <input type="text" value={this.state.username} onChange={this.update('username')}/>
                        </label>
                    </div>

                    <div>
                        <label> Password
                            <input type="password" value={this.state.password} onChange={this.update('password')}/>
                            <input type="checkbox" id="rememberMe" value="Remember Me"/>
                        </label>
                    </div>

                    <div>
                        <label htmlFor='rememberMe'> Remember me</label>
                    </div>
                    
                    <div>
                        <input type="checkbox" id='checkbox'/>
                        <label htmlFor='checkbox'> Sign in anonymously</label>
                    </div>
                    <div>
                        <button onClick={this.handleSubmit}>Sign In</button>
                        <button onSubmit={this.handleSubmit}>Log In Dummy User</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm;