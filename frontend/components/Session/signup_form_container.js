import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import React from 'react';
import SignUpForm from './sign_up_form';


const mapStateToProps = ({ errors }) => {
    return {errors: errors.sessionErrors,
    formType: 'signup'
    }
}

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpForm)