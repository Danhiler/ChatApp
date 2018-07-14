import * as React from 'react';
import './MainContent.css';
import InputContainer from './InputContainer';
import MessagesHistory from './MessagesHistory';

import Igroup from '../interfaces/igroup'
import Imessage from "../interfaces/Imessage";
import Iuser from "../interfaces/iuser";

interface Iprops {
    selectedGroup:Igroup,
    handleSend:(msg:Imessage)=>void
    loggedUser:Iuser
}


class MainContent extends React.Component<Iprops,{}>{

    public render(){
        console.log(this.props.selectedGroup)
        return (
            <div className="MainContainer">
            <div className="HeaderContainer">Group name: {this.props.selectedGroup.name}</div>

                    <MessagesHistory messageHistory={this.props.selectedGroup.messageHistory} />
                <div className="InputContainer"><InputContainer handleSend={this.props.handleSend} loggedUser={this.props.loggedUser}/></div>
            </div>

        )
    }



}
export default MainContent;
