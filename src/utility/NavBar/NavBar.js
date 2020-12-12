import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom'
import Login from '../../pages/Login/Login'
import SignUp from '../../pages/Login/SignUp'
// redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import openModal from '../../actions/openModal'
import logoutAction from '../../actions/logoutAction'

class NavBar extends React.Component {
    
    componentDidUpdate(oldProps) {
        console.log(oldProps);
        if (oldProps.auth.token != this.props.auth.token) {
            this.props.openModal('closed','');
        }
    }

    render() { 
        let navColor = 'transparent';
        if(this.props.location.pathname !== '/') {
            //not home page
            navColor = 'black';
        }

        return ( 
            <div className="container-fluid nav">
                <div className="row">
                    <nav className={navColor}>
                        <div className="nav-wrapper">
                            <Link to="/" className="left">airbnb</Link>
                            <ul id="nav-mobile"  className="right">
                                <li><Link to="/"> English (US)</Link></li>
                                <li><Link to="/"> $ USD </Link></li>
                                <li><Link to="/"> Become a host </Link></li>
                                <li><Link to="/"> Help</Link></li>
                                {this.props.auth.email 
                                ? 
                                <>
                                <li><Link to="/account">Hello, {this.props.auth.email} </Link></li>
                                <li onClick={() => this.props.logoutAction()}>Logout</li>
                                </>
                                :
                                <>
                                <li className="login-signup" onClick={()=>{this.props.openModal('open',<SignUp/>)}}>Sign up</li>
                                <li className="login-signup" onClick={()=>{this.props.openModal('open',<Login/>)}}>Login</li>
                                </>
                              
                                }
                                
                                
                            </ul>   
                        </div>
                    </nav> 
                </div>
            </div>
         );
    }
}

function mapStateToProps(state) {
    return {
        auth : state.auth
    }
}

function mapDispatchToProps(dispatcher) {
    return bindActionCreators({
        openModal: openModal,
        logoutAction: logoutAction
    },dispatcher)
}
 
export default connect(mapStateToProps,mapDispatchToProps)(NavBar);