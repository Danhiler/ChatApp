import * as React from 'react';
import './InputContainer.css'
import {appStore} from '../StateStore'
import Iuser from "../interfaces/iuser";
import Imessage from "../interfaces/Imessage";

interface Istate {
    text:string
}
interface Iprops {
    handleSend:(msg:Imessage)=>void
}
class InputContainer extends React.Component<Iprops,Istate>{
    constructor(props:Iprops){
        super(props);
        this.state={
            text:""
        }

    }

    render() {
        return (
            <>
                <input placeholder="Write Text" className="textInput" value={this.state.text} onChange={this.inputChange}/>
                <button onClick={this.handleSend} className="sendBtn" >Send</button>
            </>
        )
    }

    handleSend=()=> {
        //var socket = io();
        const msg = this.createMsg(this.state.text,appStore.loggedUser)
        this.props.handleSend(msg)
        this.setState({text:""})

    }
    inputChange =(e:React.FormEvent<HTMLInputElement>)=>{
        this.setState({text:e.currentTarget.value})
    }
    createMsg(content:string,user:Iuser|null) {
        const msg = {
            time: Date.now(),
            content: content,
            user: user

        };
        return msg;
    }

}

export default InputContainer
