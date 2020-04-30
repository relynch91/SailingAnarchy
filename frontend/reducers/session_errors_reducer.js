import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionErrorsReducer = ( oldState = [], action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            debugger
            return action.sessionErrors;
        case RECEIVE_CURRENT_USER: 
            return [];
        default:
            return newState;
    }
}

export default sessionErrorsReducer;