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
                <div className="sign-up-page-header">
                    <Link to="/">Sailing Sanctuary</Link>
                </div>
                
                <div className="sign-up-page-link">
                    <Link to="/"> &lt; Community Home </Link>
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
                                <span for='display-name'> Display Name </span>
                                <span className="span-red"> * </span>
                                <input id="display-name" type="text" value={this.state.username} onChange={this.update('username')} />
                            </div>
                            
                            <div>
                                <span for='email'>Email Address</span>
                                <span className="span-red"> * </span>
                                <input id="email" type="email" value={this.state.email} onChange={this.update('email')} />
                            </div>

                            <div>
                                <span for='password'>Password  </span>
                                <span className="span-red"> * </span>
                                <input id="password" type="password" value={this.state.password} onChange={this.update('password')} />
                            </div>

                            <div>
                                <span for='confirm-password'>Confirm Password </span>
                                <span className="span-red"> * </span>
                                <input id="confirm-password" type="password" value={this.state.confirmPassword} onChange={this.update('confirmPassword')} />
                            </div>
                            
                            <div>
                                <span for='location'>Location </span>
                                <input id="location" type="text" value={this.state.location} onChange={this.update('location')} />
                            </div>
                            
                            
                            <div className="form-interests">
                                <label for='interests'>Interests </label>
                                <textarea rows="4" cols="55" id="interests" value={this.state.interests} onChange={this.update('interests')} />
                            </div>
                            
                            <div>
                                <span for='experience'>Sailing Aspirations and History  </span>
                                <span className="span-red"> * </span>
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