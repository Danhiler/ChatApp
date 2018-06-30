import * as React from 'react';
import './MessageHistory.css';
import {appStore} from "../StateStore";
import Imessage from "../interfaces/Imessage";

interface IMessageHistoryProps {
    messageHistory: Imessage[]
}

const printMessages = (props:IMessageHistoryProps)=> {
 //if(appStore.loggedUser!==null){
        return props.messageHistory
            .map((msg:Imessage,index:number) => {
                    const msgDate =new Date(msg.time)

                    let messageClass = appStore.loggedUser.userName === msg.user.userName ? 'MessageMe':'MessageOther';
                    return <div key={index} className={messageClass}>

                        <li className={messageClass} key={index}>
                            <div className="senderNameLabel">{msg.user.userName}</div>
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

export default MessagesHistory;

