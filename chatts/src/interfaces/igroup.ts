import Imessage from './Imessage'

interface Igroup {
    _id:string,
    name :string,
    parent :Igroup | null,
    childs : any,
    type : number,//0 empty, 1 users, 2 groups
    userCount :number,
    show:boolean,
    messageHistory:Imessage[],
    isRoot:boolean

    //addGroup2Group(newGroupName:string):void

}
export default Igroup;