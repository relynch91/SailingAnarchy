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
            <div className="login-main">

                <div className="login-page-header">
                    <h1>Sailing Sanctuary</h1>
                </div>

                <div className="login-page-link">
                    <Link to="/"> &lt; Community Home </Link>
                </div>

                <div className="login-page">
                    <div className="login-page-form-header">
                        <h1>Sign In</h1>
                        <div>
                            <span>Don't have an account?</span>
                            <Link to="/signup">Sign Up</Link>
                        </div>
                    </div>
                </div>

                <div className="login-page">
                    <div className="login-form-box">
                        <form className="login-form" onSubmit={this.handleSubmit}>

                            <div>
                                <label> Display Name  <span>REQUIRED</span></label>
                                <input type="text" value={this.state.username} 
                                onChange={this.update('username')} placeholder="Display Name" />
                            </div>

                            <div>
                                <label>Password  <span>REQUIRED</span></label>
                                <input type="password" value={this.state.password} 
                                    onChange={this.update('password')} placeholder="Display Name" />
                            </div>

                            <div>
                                <button onClick={this.handleSubmit}>Sign In</button>
                                <button onSubmit={this.handleSubmit}>Log In Dummy User</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;