import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
            username: "",
            emailAdress: "",
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
                <h1>Sign Up</h1>
                <p>Existing User? SIGN IN LINK HERE</p>
                <form onSubmit={this.handleSubmit}>
                    <label>Display Name
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </label><br></br>
                    <label>Email Adress
                        <input
                            type="text"
                            value={this.state.emailAddress}
                            onChange={this.update('emailAdress')}
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
                    <label for='newsUpdates'>Send me news and updates</label><br></br>

                    <input type="checkbox" />
                    <label for='checkbox'> Sign in anonymously</label><br></br>
                    <br />
                    <button onSubmit={this.handleSubmit}>Create my Account</button>
                </form>
            </div>
        )
    }
}

export default SignUpForm;