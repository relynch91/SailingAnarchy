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
            <div >
                <div className="sign-up-page">
                    <Link to="/">Community Home </Link>
                </div>
                
                <div className="sign-up-page">
                    <h1>Sign Up </h1>
                    <p>Existing User?</p><Link to="/login">Sign in</Link>
                    
                </div>

                <div className="sign-up-page">
                    <form onSubmit={this.handleSubmit}>
                        <ul>
                            <li>
                                <label>Display Name</label>
                                <input id="display-name" type="text" value={this.state.username} onChange={this.update('username')} />
                            </li>

                            <li>
                                <label>Email Address
                                <input id="email" type="email" value={this.state.email} onChange={this.update('email')} />
                                </label>
                            </li>

                            <li>
                                <label>Password
                                <input id="password" type="password" value={this.state.password} onChange={this.update('password')} />
                                </label>
                            </li>

                            <li>
                                <label>Confirm Password
                                <input id="confirm-password" type="password" value={this.state.confirmPassword} onChange={this.update('confirmPassword')} />
                                </label>
                            </li>

                            <li>
                                <label>Location
                                <input id="location" type="text" value={this.state.location} onChange={this.update('location')} />
                                </label>
                            </li>

                            <li>
                                <label>Interests
                                <textarea id="interests" value={this.state.interests} onChange={this.update('interests')} />
                                </label>
                            </li>

                            <li>
                                <label>Sailing Aspirations and History
                                <input id="experience" type="text" value={this.state.experience} onChange={this.update('experience')} />
                                </label>
                            </li>

                            <li>
                                <input type="checkbox" id="newsUpdates" />
                                <label htmlFor='newsUpdates'>Send me news and updates</label><br></br>
                            </li>

                            <li>
                                <input type="checkbox" />
                                <label htmlFor='checkbox'> Sign in anonymously</label>
                            </li>

                            <li>
                                <button onSubmit={this.handleSubmit}>Create my Account</button>
                            </li>
                        </ul>
                    </form>
                </div>
                
                <div>
                    {this.props.errors}
                </div>

            </div>
        )
    }
}

export default SignUpForm;