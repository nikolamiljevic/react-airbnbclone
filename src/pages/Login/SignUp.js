import React, {Component} from 'react';
import './Login.css'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import openModal from '../../actions/openModal'
import Login from './Login';
import axios from 'axios'

class SignUp extends Component{

    constructor(){
        super();
        this.state = {
            lowerPartOfForm:  <button type="button"  onClick={this.showInputs} className="sign-up-button">Sign up with email</button>,
            email:'',
            password:''
        }
    }

    changeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    changePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    showInputs = () => {
       this.setState({
           lowerPartOfForm: <SignUpInputFields changeEmail={this.changeEmail} changePassword={this.changePassword} />
       })
    }

    submitLogin = async (e) => {
        e.preventDefault();

        const url = `${window.apiHost}/users/signup`;
        const data = {
            email: this.state.email,
            password: this.state.password
        }

        const resp = await axios.post(url,data);
        const token = resp.data.token;

        const url2 = `${window.apiHost}/users/token-check`;
        const resp2 = await axios.post(url2,{token});
        console.log(resp2);
        
    }

    render(){
        return(
            <div className="login-form">
                <form onSubmit={this.submitLogin}>
                    <button className="facebook-login">Connect With Facebook</button>
                    <button className="google-login">Connect With Google</button>
                    <div className="login-or center">
                        <span>or</span>
                        <div className="or-divider"></div>
                    </div>
                   {this.state.lowerPartOfForm}
                    <div className="divider"></div>
                    <div>Already have an account? <span className="pointer" onClick={()=>{this.props.openModal('open',<Login/>)}}>Log in</span></div>
                </form>
            </div>

        )
    }
}

function mapDispatchToProps(dispatcher) {
    return bindActionCreators({
        openModal: openModal
    },dispatcher)
}

export default connect(null,mapDispatchToProps)(SignUp);



const SignUpInputFields = (props) => {
    return (
        <div className="sign-up-wrapper">
            <div className="col m12">
                <div className="input-field" id="email">
                    <div className="form-label">Email</div>
                    <input type="text" placeholder="Email" onChange={props.changeEmail} />
                </div>
            </div>
            <div className="col m12">
                <div className="input-field" id="email">
                <div className="form-label">Password</div>
                    <input type="password" placeholder="Password" onChange={props.changePassword} />
                </div>
            </div>
            <div className="col m12">
                <button type="submit" className="btn red accent-2">Sign up</button>
            </div>
        </div>
    )
}