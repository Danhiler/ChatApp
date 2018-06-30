import * as React from 'react';
import './MainContent.css';
import InputContainer from './InputContainer';
import MessagesHistory from './MessagesHistory';

import Igroup from '../interfaces/igroup'
import Imessage from "../interfaces/Imessage";

interface Iprops {
    selectedGroup:Igroup,
    handleSend:(msg:Imessage)=>void
}


class MainContent extends React.Component<Iprops,{}>{
    constructor(props:Iprops){
        super(props)

    }

    public render(){
        return (
            <div className="MainContainer">
            <div className="HeaderContainer">Group name: {this.props.selectedGroup.name}</div>

                    <MessagesHistory messageHistory={this.props.selectedGroup.messageHistory} />
                <div className="InputContainer"><InputContainer handleSend={this.props.handleSend}/></div>
            </div>

        )
    }



}
export default MainContent;
