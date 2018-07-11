import * as React from 'react';
import './MessageHistory.css';
import {appStore} from "../StateStore";
import Imessage from "../interfaces/Imessage";
import {getUserById} from "../helpers";

interface IMessageHistoryProps {
    messageHistory: Imessage[]
}

const printMessages = (props:IMessageHistoryProps)=> {
 //if(appStore.loggedUser!==null){
        return props.messageHistory
            .map((msg:Imessage,index:number) => {

              const user = getUserById(msg.user)

                    const msgDate =new Date(msg.time)
                console.log(msgDate)
                let messageClass = appStore.loggedUser.username === user.username ? 'MessageMe':'MessageOther';

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

export default MessagesHistory;

