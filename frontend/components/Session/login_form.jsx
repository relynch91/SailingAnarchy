import React from 'react';

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
        // debugger 
        e.preventDefault();
        const user = Object.assign( {}, this.state);
        this.props.processForm(user)
    }

    render() {
        return (
            <div>
                <h1>Sign In!</h1>
                <p>Don't have an account? SIGN UP LINK HERE</p>
                <form onSubmit={this.handleSubmit}>
                    <label> Display Name
                        <br />
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </label><br></br>
                    <label> Password
                        <br />

                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label><br></br>
                    <input type="checkbox" id="rememberMe" value="Remember Me"/>
                    <label for='rememberMe'> Remember me</label><br></br>
                    
                    <input type="checkbox" id='checkbox'/>
                    <label for='checkbox'> Sign in anonymously</label><br></br>
                    <br/>
                    <button onClick={this.handleSubmit}>Sign In</button>
                    <button onSubmit={this.handleSubmit}>Log In Dummy User</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;