import * as React from "react";
import './LoginPop.css';
import {Link} from "react-router-dom";


class LogintopBar extends React.Component<any,any>{
    constructor(props:any) {
        super(props);
        this.state = {
            showPopup: false
        };
    }

    render(){
        return (<span>
            Hello {this.showLoggedUsername()} |&nbsp;
            <Link to="/login" className="navLinks" >Change User </Link>
            <Link to="/users" className="navLinks" >Manage Users </Link>
            <Link to="/groups" className="navLinks">Manage Groups </Link>

        </span>)



    }
    changeLoggedUser = ()=> {
        this.setState({showPopup:true})
    }
    // ifShowPopup() {
    //     if(this.state.showPopup) {
    //         return <Popup closePopup={this.toggleShowPop}></Popup>;
    //     }
    //
    // }
    // toggleShowPop=(typedUsername,typedPassword)=>{
    //     const loggedUser = appStore.users.find((user)=>{
    //         return (typedUsername ===user.userName &&typedPassword ===user.password)
    //
    //     })
    //     if(loggedUser){
    //         appService.logIn(loggedUser)
    //         this.setState((prevState) => {
    //             let togglePop = (!prevState.showPopup)
    //             return {showPopup:togglePop}
    //         })}
    // }
    //
    showLoggedUsername=() =>{
        return this.props.loggedUser ? this.props.loggedUser.username : "Login";
    }
}
export default LogintopBar