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
    
    handleSubmit = e => {
        e.preventDefault();
        const user = Object.assign( {}, this.state);
        this.props.processForm(user)
    }

    render() {
        return (
            <div>
                Log-In Form Motha fucka!
            </div>
        )
    }
}

export default LoginForm;