import * as React from 'react';
import './MessageHistory.css';
import Imessage from "../interfaces/Imessage";
import {getUserById} from "../helpers";
import Iuser from "../interfaces/iuser";
import {connect} from "react-redux";
//import groupService from "../services/groupService";

interface IMessageHistoryProps {
    messageHistory: Imessage[],
    users:Iuser[],
    loggedUser:Iuser
}

const printMessages = (props:IMessageHistoryProps)=> {
 //if(appStore.loggedUser!==null){
        return props.messageHistory
            .map((msg:Imessage,index:number) => {
              const user = getUserById(msg.user,props.users)
                    const msgDate =new Date(msg.time)
                let messageClass = props.loggedUser.username === user.username ? 'MessageMe':'MessageOther';

                return <div key={index} className={messageClass}>
                        <li className={messageClass} key={index}>
                            <div className="senderNameLabel">{user.username}</div>
                            {msg.content}
                            <div className="timeMessageSentLabel">{msgDate.getHours()+":"+msgDate.getMinutes()}</div>
                        </li>
                    </div>
                }
            )
   // }

}
const MessagesHistory: React.StatelessComponent<IMessageHistoryProps>  = (props)=>{
       return (<ul className="MessagesContainer">
           {printMessages(props)}
            </ul>);
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        users:state.users,
        loggedUser:state.loggedUser,
        ownProps
    }
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {

    }
};
const connectedMessagesHistory = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MessagesHistory)

export default connectedMessagesHistory;



