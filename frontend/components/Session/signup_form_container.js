import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import React from 'react';
import SessionForm from './sign_up_form';


const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'signup'
})

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm)