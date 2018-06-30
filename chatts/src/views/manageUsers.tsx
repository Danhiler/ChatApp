import * as React from 'react';
import Iuser from "../interfaces/iuser";
import './manageUsers.css'
import userService from "../services/userService";
import {Link} from "react-router-dom";

interface Iprops {
    users: Iuser[]

}
class ManageUsers extends React.Component <Iprops,any>{
    constructor(props:any){
        super(props)

        this.state={
            selectedUser:{
                userName:'',
                password:'',
                age:''
            }
        }

    }
    render(){
        return (<div className="manageUsersContainer">
            <div className="innerUsersContainer">
                <h1>Manage Users</h1>
                <Link to="/"  >Back </Link>

                <table className="usersTableStyle">
                <tr className="userInList">
                    <th >#</th>
                    <th >UserName</th>
                    <th >Password</th>
                    <th >Age</th>
                    <th >Edit</th>
                    <th >Delete</th>
                </tr>
                {this.props.users.map((user,index)=>{
                    return (<tr className="userInList" key={index}>
                        <td >{index+1}</td>
                        <td >{user.userName}</td>
                        <td >{user.password}</td>
                        <td >{user.age}</td>
                        <td ><button onClick={this.editUser.bind(this,user)}>edit </button></td>
                        <td ><button onClick={this.handleDeleteUser.bind(this,user.id)}>delete</button></td>
                        </tr>)

                })}
                </table>
                <div className="usersTablediv">
                    <h2>Create/Edit User</h2>
                    <p>Username: <input type="input" id="userName" value={this.state.selectedUser.userName} onChange={this.updateField}/></p>
                    <p>Password: <input type="input" id="password" value={this.state.selectedUser.password} onChange={this.updateField}/></p>
                    <p>Age: <input type="input" id="age" value={this.state.selectedUser.age} onChange={this.updateField}/></p>
                    <input type="button" value="save" onClick={this.handleUpdateUser}/>
                    <input type="button" value="create" onClick={this.handleCreateUser}/>
                </div>
            </div>


        </div>
        )}
editUser=(user:Iuser)=>{
    this.setState({selectedUser:{...user}})
}
    handleCreateUser=()=>{

        userService.createUser(this.state.selectedUser)
    }
    handleUpdateUser=()=>{
        userService.updateUser(this.state.selectedUser)
    }
handleDeleteUser(id:string){
    userService.deleteUser(id)
}
    updateField=(e:any)=>{
        const inputId =e.target.id
        const inputValue = e.target.value
        this.setState((prevState:any)=>{
            const selectedUser = prevState.selectedUser
            selectedUser[inputId] = inputValue
            return {selectedUser}
        })
    }
}
export default ManageUsers;