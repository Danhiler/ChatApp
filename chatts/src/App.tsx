import * as React from 'react';
import './App.css';

import GroupsTree from "./Components/GroupsTree";
import MainContent from './Components/MainContent';
import LoginTopBar from "./Components/LoginTopBar";
import LoginPopup from "./Components/LoginPop";

import Igroup from "./interfaces/igroup";
import Imessage from "./interfaces/Imessage";
import Iuser from "./interfaces/iuser";

import * as $ from "jquery";
import { BrowserRouter, Route,Switch, Redirect } from 'react-router-dom'
import ManageUsers from "./views/manageUsers";
import ManageGroups from "./views/manageGroups";
import {connect} from 'react-redux';

import {getData, updateCurrentGroup, updateMessageHistory, userLogin} from "./redux-action"
import * as openSocket from "socket.io-client";

interface AppProps {
    groups: Igroup,
    loggedUser: Iuser,
    users: Iuser[],
    usersInGroups:any,
    selectedGroup: Igroup,
    getData:()=>void,
    userLogin:(user:Iuser)=>void,
    updateCurGroup:(group:Igroup)=>void,
    updateMessageHistory:(groupArr:Igroup[])=>void
}


class App extends React.Component<AppProps,{}> {
    private socket: SocketIOClient.Socket;

     constructor(props:any){
         super(props);
         this.socket = openSocket('http://localhost:4001')
     }


  public render() {
    return (
        <BrowserRouter>
        <div className="ScreenContainer">
            {this.IsUserLoogedIn}
        <div className="topBar"><LoginTopBar loggedUser={this.props.loggedUser}/></div>
                <Switch>
                    <Route path='/' name='main' render={({}) => (
                        <div className="AppContainer">
                            <Route path='/login' name='login' render={({}) => (
                                <LoginPopup  handleLogin={this.handleLogin}/>
                            )}/>
                            <div className="SideBar" ><GroupsTree items={this.props.groups}
                                                                  updateCurGroup={this.updateCurGroup}/> </div>
                            <div className="Main" ><MainContent selectedGroup={this.props.selectedGroup} handleSend={this.handleSend} loggedUser={this.props.loggedUser}/></div>
                            <Route path='/users' name='manageUsersComp' render={({}) => (
                                <ManageUsers users={this.props.users}/>
                            )}/>

                            <Route path='/groups' name='manageGroupsComp' render={({}) => (
                                <ManageGroups groups={this.props.groups}/>
                            )}/>
                        </div>
                    )}/>
                </Switch>
        </div>
        </BrowserRouter>
    );
  }


  IsUserLoogedIn(){
      if (!this.props.loggedUser) {
          return <Redirect to='/login'/>;
      }
          return ""
  }
  handleLogin=(typedUsername:string,typedPassword:string)=>{
        const loggedUser=this.props.users.find((user)=>user.username===typedUsername && user.password===typedPassword)
      if(loggedUser){
            this.props.userLogin(loggedUser)
      }
  }
    public componentDidMount() {
        this.props.getData()
        this.addMessageReceivedListener()
        this.arrowListeners()
    }

    addMessageReceivedListener() {
        this.socket.on("updateClients",   (groupsArr:any)=>{
            this.props.updateMessageHistory(groupsArr)
        }
           )
    }
     sendMessage(groupID:string, msg:Imessage){
        this.socket.emit('sendMessage', groupID,msg);
    }

  updateCurGroup = (group:Igroup)=>{
//if(group.type===2) {
    this.props.updateCurGroup(group)
//}
  };

  handleSend= ( msg:Imessage)=>{
      if(this.props.selectedGroup)
      this.sendMessage(this.props.selectedGroup["_id"],msg)


  }
    arrowListeners() {
        document.addEventListener('keydown',(e)=>{
            let selected = $(".selected");

            switch (e.which) {
                case 13: //enter
                    let focusedElement = $(':focus')
                    if(focusedElement.is("input"))
                    {
                        focusedElement.next().trigger('click')
                    } else {
                        selected.trigger('dblclick')
                    }

                    break;
                case 37: // left
                    let curDL=selected.attr('data-level');
                    let nextDl= selected.next().attr('data-level') || -1;

                    if(curDL)
                        if( +curDL +1 === +nextDl && selected.next().css('display') !== 'none'){
                            selected.trigger('openGroup', 'left')
                        } else {
                            selected.trigger('selectGroupName')
                        }
                    break;

                case 38: // up
                    do {
                        if (selected.prev().length === 0) {
                            selected = selected.siblings().last()
                        } else {
                            selected = selected.prev()
                        }
                        this.paintLi(selected)
                    } while (selected.css('display') === 'none')
                    break;

                case 39: // right
                    selected.trigger('openGroup', 'right')
                    break;

                case 40: // down
                    do {
                        if (selected.next().length === 0|| selected.next()[0].tagName==='UL') {
                            selected = selected.siblings().first()
                        } else {
                            selected = selected.next()
                        }
                        this.paintLi(selected)
                    } while (selected.css('display') === 'none')


                    break;

                default:
                    return; // exit this handler for other keys
            }
            e.preventDefault(); // prevent the default action (scroll / move caret)
        });

    }
    paintLi($li:JQuery) {
        $('li').removeClass('selected');
        $li.addClass('selected');

        this.updateCurGroup($li.data('item'))
    }
}


const mapStateToProps = (state:any, ownProps:any) => {
    return {
        groups:state.groups,
        loggedUser:state.loggedUser,
        users:state.users,
        usersInGroups:state.usersInGroups,
        selectedGroup:state.selectedGroup
    }
};

const mapDispatchToProps = (dispatch:any, ownProps:any) => {
    return {
        getData: () => {
            dispatch(getData())
        },
        updateMessageHistory:(groupsArr:Igroup[])=>{
            dispatch(updateMessageHistory(groupsArr))
        },
        updateCurGroup:(group:Igroup)=>{
            dispatch(updateCurrentGroup(group))
        },
        userLogin:(user:Iuser)=>{
            dispatch(userLogin(user))
        }

    }
}

const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


export default ConnectedApp;

