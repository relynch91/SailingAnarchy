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
            <div className='sign-up-main'>
                <div className="sign-up-page">
                    <p>This is where the logo will be</p>
                </div>
                <div className="sign-up-page">
                    <Link to="/">Community Home </Link>
                </div>
                
                <div className="sign-up-page">
                    <h1>Sign Up </h1>
                    <p> Existing User?</p>
                    <Link to="/login">Sign in</Link>
                </div>

                <div className="sign-up-page">
                    <form className="sign-up-form" onSubmit={this.handleSubmit}>
                        <div>
                            <label>Display Name</label>
                            <input id="display-name" type="text" value={this.state.username} onChange={this.update('username')} />
                        </div>

                        <div>
                            <label>Email Address</label>
                            <input id="email" type="email" value={this.state.email} onChange={this.update('email')} />
                        </div>

                        <div>
                            <label>Password</label>
                            <input id="password" type="password" value={this.state.password} onChange={this.update('password')} />
                        </div>

                        <div>
                            <label>Confirm Password</label>
                            <input id="confirm-password" type="password" value={this.state.confirmPassword} onChange={this.update('confirmPassword')} />
                        </div>

                        <div>
                            <label>Location</label>
                            <input id="location" type="text" value={this.state.location} onChange={this.update('location')} />
                        </div>

                        <div>
                            <label>Interests</label>
                            <textarea id="interests" value={this.state.interests} onChange={this.update('interests')} />
                        </div>
                        
                        <div>
                            <label>Sailing Aspirations and History</label>
                            <input id="experience" type="text" value={this.state.experience} onChange={this.update('experience')} />
                        </div>

                        <div>
                            <input type="checkbox" id="newsUpdates" />
                            <label htmlFor='newsUpdates'>Send me news and updates</label><br></br>
                        </div>

                        <div>
                            <input type="checkbox" />
                            <label htmlFor='checkbox'> Sign in anonymously</label>
                        </div>

                        <div>
                            <button onSubmit={this.handleSubmit}>Create my Account</button>
                        </div>

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