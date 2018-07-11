// import * as fs from 'fs'
// import GroupModel from "./groupsModel";
//
//
//
// class DB {
//     groupModel;
//     constructor() {
//         this.groupModel = GroupModel;
//     }
//
//     getData=()=>{
//         this.groupModel
//         //const {users,groups,usersInGroups} = db;
//
//
//         //const data ={"users":users,"groups":groups,"usersInGroup":usersInGroups}
//         //========================================================res.json(data)
//     }
//
//     deleteElement = (type:string, id:string) => {
//         const elementIndex=this[type].findIndex((element)=>element.id===id)
//         this[type].splice(elementIndex,1);
//
//         return this[type]
//
//     };
//
//     // createElement = (type, newElement) => {
//     //     this[type].push(newElement);
//     //
//     //     return this[type]
//     // };
//     //
//     // updateElement = (type, updatedElement) => {
//     //     const index = this[type].findIndex(element => element.id === updatedElement.id)
//     //     this[type][index] = {...updatedElement};
//     //     this.writeToJson(type)
//     //     return this[type]
//     // }
//     //
//     // updateUsersInGroup(groupId: string, usersIdArr: string) {
//     //     this.usersInGroups[groupId]=usersIdArr;
//     //     this.writeToJson("usersInGroups")
//     //     return {usersInGroup:this.usersInGroups,groupsArr:""}
//     // }
// }
//
// const db = new DB()
//
// export default db