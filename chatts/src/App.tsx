import * as React from 'react';
import './App.css';

import GroupsTree from "./Components/GroupsTree";
import MainContent from './Components/MainContent';

import Igroup from "./interfaces/igroup";

import Imessage from "./interfaces/Imessage";
import {appStore} from "./StateStore";

import LoginTopBar from "./Components/LoginTopBar";
import LoginPopup from "./Components/LoginPop";
import {appService} from "./StateService";
import * as $ from "jquery";
import Iuser from "./interfaces/iuser";
import { BrowserRouter, Route,Switch, Redirect } from 'react-router-dom'
import ManageUsers from "./views/manageUsers";
import ManageGroups from "./views/manageGroups";
import { connectToChatRoom, sendMessage} from './api/messagesApi';

interface Istate {
    items:Igroup,
    users:Iuser[] |null,
    selectedGroup:Igroup,
    loggedUser:Iuser|null
}
interface Iprops {
    items:Igroup,
    users:string,
    selectedGroup:Igroup | null
}

class App extends React.Component<{},Istate> {

    constructor(props:Iprops){
        super(props);
        appService.getData()
      this.state={
          items:appStore.groups,
          users:appStore.users,
          selectedGroup:appStore.groups,
          loggedUser:null

      };
        connectToChatRoom()

    appService.subscribe((newUsers:Iuser[],newGroups:Igroup)=>{
    this.setState({users:newUsers,items:newGroups});
    })
    }

  public render() {
    return (
        <BrowserRouter>

        <div className="ScreenContainer">
            {this.IsUserLoogedIn}
        <div className="topBar"><LoginTopBar loggedUser={this.state.loggedUser}/></div>
                <Switch>

                    <Route path='/' name='main' render={({}) => (
                        <div className="AppContainer">
                            <Route path='/login' name='login' render={({}) => (
                                <LoginPopup  handleLogin={this.handleLogin}/>
                            )}/>
                            <div className="SideBar" ><GroupsTree items={appStore.groups}
                                                                  updateCurGroup={this.updateCurGroup}/> </div>
                            <div className="Main" ><MainContent selectedGroup={this.state.selectedGroup} handleSend={this.handleSend}/></div>
                            <Route path='/users' name='manageUsersComp' render={({}) => (
                                <ManageUsers users={appStore.users}/>
                            )}/>

                            <Route path='/groups' name='manageGroupsComp' render={({}) => (
                                <ManageGroups groups={appStore.groups}/>
                            )}/>
                        </div>

                    )}/>


                </Switch>

        </div>
        </BrowserRouter>
    );
  }
  IsUserLoogedIn(){
      if (!this.state.loggedUser) {
          return <Redirect to='/login'/>;
      }
          return ""
  }
  handleLogin(typedUsername:string,typedPassword:string){
        const loggedUser=appStore.users.find((user)=>user.username===typedUsername&& user.password===typedPassword)
      if(loggedUser){
            appService.logIn(loggedUser)
      }
  }
    public componentDidMount() {
        this.arrowListeners()
    }

  updateCurGroup = (group:Igroup)=>{
//if(group.type===2) {
    this.setState({selectedGroup: group})
//}
  };

  handleSend= ( msg:Imessage)=>{

      //const curGroup = this.state.selectedGroup;
      sendMessage(this.state.selectedGroup._id,msg)

//      this.setState({selectedGroup:curGroup})

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

export default App;
