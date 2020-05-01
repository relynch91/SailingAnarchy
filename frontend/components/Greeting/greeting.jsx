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
                <div className='personal-greeting'>
                    <h1>Sailing Anarchy</h1>

                    <div className="session-dropdown">
                        <button className="session-dropbtn">{this.props.currentUser.username}
                            <i className="fa fa-caret-down"></i>
                        </button>
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
                <div>
                    <h1>Sailing Anarchy 2.0 </h1>
                    <nav className="login-signup">
                        <Link to="/login">Existing user? Sign In </Link>
                        <Link to='/signup'>Sign Up</Link>
                    </nav>
                </div>
            )
        }
    }   
}

export default Greeting;