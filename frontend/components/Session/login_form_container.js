import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import React from 'react';
import SessionForm from '.session_form';


const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'login'
})

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm)