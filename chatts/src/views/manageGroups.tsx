import * as React from 'react';

import './manageGroups.css'
import Igroup from "../interfaces/igroup";
import groupService from '../services/groupService';
import GroupsTree from "../Components/GroupsTree";
import {Link} from "react-router-dom";
import UsersList from "./usersList"
import {appStore} from "../StateStore";

interface Iprops {
    groups: Igroup

}

class ManageGroups extends React.Component <Iprops, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            selectedGroup: {
                name: "",
                parent: null,
                childs: {},
                type: 0,//0 empty, 1 users, 2 groups
                userCount: 0,
                show: true
            },
            groupName: "",
            showUsersList: false

        }
    }

    render() {
        let userList;
        if(this.state.showUsersList){
            userList=<UsersList users={appStore.users} usersInGroups={this.state.selectedGroup.childs} saveUsers={this.handleSaveUsers}/>
        } else {
            userList=""
        }
        return (<div className="managegroupsContainer">
            <div className="innerGroupsContainer">
                <Link to="/"  >Back</Link>
                <h1>Manage Groups</h1>
                {userList}
                <br />

                <div className="GroupsListStyle">
                    <GroupsTree items={this.props.groups} updateCurGroup={this.updateSelectedGroup}  />
                </div>


                <div className="groupsTablediv">
                    <h2>Manage group</h2>
                    <input type="button" value="addUser" onClick={this.handleAddUsers}/>
                    <input type="button" value="addGroup" onClick={this.handleCreateGroup}/>
                    <input type="button" value="DeleteGroup" onClick={this.handleDeleteGroup}/>
                    <input type="button" value="updateGroup" onClick={this.handleUpdateGroup}/>
                    <p>Group Name: <input type="input" id="groupName" value={this.state.groupName} onChange={this.updateField} /></p>


                </div>
            </div>
        </div>)
    }
    updateField = (e:any) => {
            const inputValue = e.target.value
            this.setState({groupName:inputValue})
    }
    updateSelectedGroup = (group:Igroup)=>{
        //if(group.type===2) {
        console.log(group)
            this.setState({selectedGroup: {...group}})
        //}
    };


    private handleSaveUsers=(usersIdArr:string[])=> {
        groupService.updateUsersAtGroup(this.state.selectedGroup.id,usersIdArr)
this.setState({showUsersList:false})
    }


    private handleUpdateGroup() {

    }

    private handleDeleteGroup=()=> {
        console.log(this.state.selectedGroup.id)
        if(this.state.selectedGroup.id){
        groupService.deleteGroup(this.state.selectedGroup.id)
    }}

    private handleCreateGroup=()=> {
        let selectedGroupId = this.state.selectedGroup.id;
        if(!selectedGroupId){selectedGroupId=0}
            groupService.createGroup(selectedGroupId,this.state.groupName)
    }

    private handleAddUsers=() =>{
        this.setState({showUsersList:true})
    }
}
    export default ManageGroups;