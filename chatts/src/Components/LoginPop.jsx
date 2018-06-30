import * as React from "react";
import './LoginPop.css';

import {appService, appStore} from "../StateStore";
import Iuser from "../interfaces/iuser";
import {Link} from "react-router-dom";

class LoginPopup extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            typedUsername:"",
            typedPassword:""
        }
    }
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <Link to="/"  >Back</Link>
                    <h1>Login</h1>


                    <input className="inputField" id="typedUsername"
                           value={this.state.typedUsername}
                           onChange={this.updateField}
                           type="text" placeholder="Username"/>


                        <input className="inputField" id="typedPassword"
                               value={this.state.typedPassword}
                               onChange={this.updateField}
                               type="text" placeholder="Passwords"/>


                    <button className="lgnBtn" onClick={this.props.handleLogin
                        .bind(this,this.state.typedUsername,this.state.typedPassword)}>Login</button>

                </div>
            </div>
        );
    }
    updateField=(e)=>{
        const newState={};
        newState[e.target.id] =e.target.value

         this.setState(newState)
    }

}
export default LoginPopup;
