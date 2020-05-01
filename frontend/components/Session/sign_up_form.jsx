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
                <Link to="/">Community Home</Link>
                <h1>Sign Up</h1>
                <Link to="/login">Existing user? Sign in</Link>
                <form onSubmit={this.handleSubmit}>
                    <label>Display Name
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </label><br></br>
                    <label>Email Address
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label><br></br>
                    <label>Password
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label><br></br>
                    <label>Confirm Password
                        <input
                            type="password"
                            value={this.state.confirmPassword}
                            onChange={this.update('confirmPassword')}
                        />
                    </label><br></br>
                    <label>Location
                        <input
                            type="text"
                            value={this.state.location}
                            onChange={this.update('location')}
                        />
                    </label><br></br>
                    <label>Interests
                        <textarea
                            value={this.state.interests}
                            onChange={this.update('interests')}
                        />
                    </label><br></br>
                    <label>Sailing Aspirations and History
                        <textarea
                            value={this.state.experience}
                            onChange={this.update('experience')}
                        />
                    </label><br></br>
                    <input type="checkbox" id="newsUpdates" />
                    <label htmlFor='newsUpdates'>Send me news and updates</label><br></br>

                    <input type="checkbox" />
                    <label htmlFor='checkbox'> Sign in anonymously</label><br></br>
                    <br />
                    <button onSubmit={this.handleSubmit}>Create my Account</button>
                </form>
            </div>
        )
    }
}

export default SignUpForm;