import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom'
import Login from '../../pages/Login/Login'
import SignUp from '../../pages/Login/SignUp'
// redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import openModal from '../../actions/openModal'

class NavBar extends React.Component {
    state = {  }
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
                                <li onClick={()=>{this.props.openModal('open',<SignUp/>)}}>Sign up</li>
                                <li onClick={()=>{this.props.openModal('open',<Login/>)}}>Login</li>
                            </ul>   
                        </div>
                    </nav> 
                </div>
            </div>
         );
    }
}

function mapDispatchToProps(dispatcher) {
    return bindActionCreators({
        openModal: openModal
    },dispatcher)
}
 
export default connect(null,mapDispatchToProps)(NavBar);