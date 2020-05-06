import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        if (!!this.props.currentUser) {
            return (
                <div className='greeting-header'>
                    <div className='greeting-logo'>
                        <Link to="/">Sailing Sanctuary</Link>
                    </div>

                    <div className="greeting-dropdown">
                        <div>
                            <button className="greeting-dropbtn">{this.props.currentUser.username}</button>
                        </div>
                        
                        <div className="dropdown-content">
                            <ul className="SessionLinks">
                                <li className="signout">
                                    <a href="" onClick={this.handleClick}>Sign Out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="greeting-header">
                    <div className='greeting-logo'>
                        <Link to="/">Sailing Sanctuary</Link>
                    </div>

                    <div className="greeting-nav">
                        <Link className='greeting-nav-login' to="/login">Existing user? Sign In </Link>
                        <Link className='greeting-nav-signup' to='/signup'>Sign Up</Link>
                    </div>
                </div>
            )
        }
    }   
}

export default Greeting;