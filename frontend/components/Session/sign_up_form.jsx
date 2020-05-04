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
                    <div className="sign-up-page-header">
                        <h1>Sailing Sanctuary</h1>
                    </div>
                </div>

                <div className="sign-up-page">
                    <div className="sign-up-page-link">
                        <Link to="/">Community Home </Link>
                    </div>
                </div>
                
                <div className="sign-up-page">
                    <div className="sign-up-page-form-header">
                        <h1>Sign Up </h1>
                        <div>
                            <span> Existing User? </span>
                            <Link to="/login">Sign in</Link>
                        </div>
                    </div>
                </div>

                <div className="sign-up-page">
                    <div className="sign-up-form-box">
                        <form className="sign-up-form" onSubmit={this.handleSubmit}>
                            
                            <div>
                                <label for='display-name'> Display Name * </label>
                                <input id="display-name" type="text" value={this.state.username} onChange={this.update('username')} />
                            </div>
                            
                            <div>
                                <label for='email'>EmailAddress</label>
                                <input id="email" type="email" value={this.state.email} onChange={this.update('email')} />
                            </div>

                            <div>
                                <label for='password'>Password* </label>
                                <input id="password" type="password" value={this.state.password} onChange={this.update('password')} />
                            </div>

                            <div>
                                <label for='confirm-password'>ConfirmPassword* </label>
                                <input id="confirm-password" type="password" value={this.state.confirmPassword} onChange={this.update('confirmPassword')} />
                            </div>
                            
                            <div>
                                <label for='location'>Location </label>
                                <input id="location" type="text" value={this.state.location} onChange={this.update('location')} />
                            </div>
                            
                            
                            <div>
                                <label for='interests'>Interests </label>
                                <textarea id="interests" value={this.state.interests} onChange={this.update('interests')} />
                            </div>
                            
                            <div>
                                <label for='experience'>Sailing_Aspirations and_History* </label>
                                <input id="experience" type="text" value={this.state.experience} onChange={this.update('experience')} />
                            </div>
                            
                            <button onSubmit={this.handleSubmit}>Create my Account</button>

                        </form>
                    </div>
                </div>
                
                <div>
                    {this.props.errors}
                </div>

            </div>
        )
    }
}

export default SignUpForm;