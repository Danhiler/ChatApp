import GroupModel from '../mongoServer/groupsModel'

async function messageSent(groupId:any,msg:any){
     await GroupModel.findOneAndUpdate({_id:groupId},{$push:{messageHistory:msg}})
    return await GroupModel.find()

};


export {messageSent};