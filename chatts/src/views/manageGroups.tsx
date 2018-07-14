import * as React from 'react';

import './manageGroups.css'
import Igroup from "../interfaces/igroup";
import groupService from '../services/groupService';
import GroupsTree from "../Components/GroupsTree";
import {Link} from "react-router-dom";
import UsersList from "./usersList"
import {connect} from "react-redux";
import Iuser from "../interfaces/iuser";

interface Iprops {
    groups: Igroup,
    users:Iuser[],

    createGroup:(parentId:string,groupName:string)=>void,
    deleteGroup:(id:string)=>void,
    updateUsersAtGroup:(groupId:string,usersIdArr:string[])=>void
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
            userList=<UsersList users={this.props.users} usersInGroups={this.state.selectedGroup.childs} saveUsers={this.handleSaveUsers}/>
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
        this.props.updateUsersAtGroup(this.state.selectedGroup._id,usersIdArr)
        this.setState({showUsersList:false})
    }


    private handleUpdateGroup() {

    }

    private handleDeleteGroup=()=> {
        if(this.state.selectedGroup._id){
            this.props.deleteGroup(this.state.selectedGroup._id)
    }}

    private handleCreateGroup=()=> {
        let selectedGroupId = this.state.selectedGroup._id;
        if(!selectedGroupId){selectedGroupId=0}
            this.props.createGroup(selectedGroupId,this.state.groupName)
    }

    private handleAddUsers=() =>{
        this.setState({showUsersList:true})
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        users:state.users,
        ownProps
    }
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        createGroup: (selectedGroupId:string,groupName:string)=>{
            dispatch(groupService.createGroup(selectedGroupId,groupName))
        },
        deleteGroup: (groupId:string)=>{
            dispatch( groupService.deleteGroup(groupId))
        },
        updateUsersAtGroup: (groupId:string,usersIdArr:string[])=>{
            dispatch(groupService.updateUsersAtGroup(groupId,usersIdArr))
        }
    }
};
const connectedManageGroups = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ManageGroups)

    export default connectedManageGroups;