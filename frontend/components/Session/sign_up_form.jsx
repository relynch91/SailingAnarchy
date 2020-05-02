import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
            username: "",
            email: "",
            password: "", 
            confirmPassword: "",
            location: "",
            interests: "",
            experience: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign( {}, this.state);
        this.props.processForm(user);
    }

    render() {
        return (
            <div>
                <div className="sign-up-nav-links"><Link to="/">Community Home </Link></div>
                
                <div className="form-header">
                    <div className="sign-up-header-login">
                        <h1>Sign Up</h1>
                        <ul>
                            <p>Existing User?</p><Link to="/login">Sign in</Link>
                        </ul>
                    </div>

                    <form className="user-form" onSubmit={this.handleSubmit}>
                        <ul>
                            <label>Display Name
                                <input type="text" value={this.state.username} onChange={this.update('username')} />
                            </label>

                            <label>Email Address
                                <input type="email"value={this.state.email} onChange={this.update('email')} /> 
            
                            </label>
                            <label>Password
                                <input type="password" value={this.state.password} onChange={this.update('password')} />
                            </label>

                            <label>Confirm Password
                                <input type="password" value={this.state.confirmPassword} onChange={this.update('confirmPassword')} />
                            </label>

                            <label>Location
                                <input type="text" value={this.state.location} onChange={this.update('location')} />
                            </label>

                            <label>Interests
                                <textarea value={this.state.interests} onChange={this.update('interests')} />
                            </label>

                            <label>Sailing Aspirations and History
                                <input type="text" value={this.state.experience} onChange={this.update('experience')} />
                            </label>
                            <input type="checkbox" id="newsUpdates" />
                            <label htmlFor='newsUpdates'>Send me news and updates</label><br></br>

                            <input type="checkbox" />
                            <label htmlFor='checkbox'> Sign in anonymously</label>

                            <button onSubmit={this.handleSubmit}>Create my Account</button>
                        </ul>
                    </form>
                    <div>
                        {this.props.errors}
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUpForm;