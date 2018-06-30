import groupService from "../services/groupServices";
import * as uuidv1 from 'uuid/v1'

class Group {
    private name: string;
    private parent: string;
    private type: number;
    private userCount: number;
    private messageHistory: any[];
    private show: boolean;
    private id: string;

    constructor(groupName, parentID) {
        this.id= uuidv1();
        this.name = groupName;
        this.parent = ""+parentID;
        this.type = 0;//0 empty, 1 users, 2 groups
        this.userCount =0;
        this.messageHistory=[]

        this.show=false;
    }


    // addGroup2Group(newGroupName) {
    //     if( this.type === 1) {
    //         this.groupUsersToGroups()
    //     }
    //     if(!this.childs[newGroupName] && this.type !== 1) {
    //         this.childs[newGroupName] = new Group(newGroupName,this);
    //         this.type = 2;
    //     }
    //
    // }
    //
    // addUser2Group(addedUser) {
    //     if(addedUser && !this.childs[addedUser.userName] && this.type !== 2) {
    //     //if(this && this.childs.every(user => user.userName !== addedUser.userName)) {
    //         this.childs[addedUser.userName] = addedUser;
    //         this.type = 1;
    //         this.updateUserCount(1);
    //     //}
    //
    // }
    //
    // }
    // deleteSubGroup(groupName){
    //     var children = this.childs;
    //     if(children[groupName]&& this.type ===2) {
    //         delete children[groupName];
    //     }
    // }
    // deleteUser2Group(userName) {
    //     var children = this.childs;
    //     if (children[userName] && this.type ===1) {
    //         delete children[userName];
    //     }
    //     this.updateUserCount(-1)
    // }

    // updateUserCount(count){
    //         var node = this;
    //         while(node!==null) {
    //             node.userCount+=count;
    //             node=node.parent;
    //         }
    //     }
    //
    // groupUsersToGroups() {//*
    //     var children = this.childs;
    //     if(!children['others']) {
    //         children['others'] = new Group('others',this)
    //     }
    //     for (let user in children){
    //         if(children[user].userName !== undefined) {
    //             children['others'].addUser2Group(children[user]);
    //             this.deleteUser2Group(children[user].userName)
    //         }
    //     }
    //     this.type =2;
    // // }
    // flattenGroup() {
    //     var parentChildren = this.parent.childs;
    //     if( Object.keys(parentChildren).length ===1) {
    //         this.parent.childs = this.childs
    //
    //     }


// }
}
export default Group;
