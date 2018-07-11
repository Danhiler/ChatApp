import * as React from 'react';
import './userList.css'
import Iuser from "../interfaces/iuser";

interface Iprops {
    users: Iuser[],
    usersInGroups:any,
    saveUsers:any
}
class UsersList extends React.Component <Iprops,any>{
    constructor(props:any){
        super(props)

    }
    render(){
        return (<div className="UsersListContainer">
        <div className="innerUsersListContainer">
            <h1>Users List</h1>
        <select className="usersListeStyle" id="selectUsers" multiple={true}>
        {this.props.users.map((user,index)=>{
            return (<option value={user._id} className="userInList" key={index}>{user.username}</option>)})}
        </select>
        <input type="button" value="save" onClick={this.handleSave}/>
        </div>
        </div>

    )}




    handleSave=(e:any)=>{
        const htmlSelect = document.querySelector('#selectUsers')
        this.props.saveUsers(this.getSelectValues(htmlSelect));
    }

    getSelectValues(select:any) {
        const result = [];
        const options = select && select.options;
        let opt;

        for (var i=0, iLen=options.length; i<iLen; i++) {
            opt = options[i];

            if (opt.selected) {
                result.push(opt.value || opt.text);
            }
        }
        return result;
    }
}
export default UsersList;