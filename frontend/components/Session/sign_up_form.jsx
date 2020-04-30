import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
            username: "",
            password: "", 
        }
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     const user = Object.assign( {}, this.state);
    //     this.props.processForm(user);
    // }

    // const _signUpForm = 
    render() {
        return (
            <h1>Sign Up</h1>
            <p>Existing User? LoginLinkHERE!!</p>
            <form action="">
                <label>Display Name
                    <input 
                    type="text"
                    value={this.state.username}
                    />
                </label>

            </form>
        )
    }
}

export default SignUpForm;