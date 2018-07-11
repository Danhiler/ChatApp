import{Router} from 'express';
import usersInGroupServices from '../services/usersInGroupServices';
import GroupModel from "../mongoServer/GroupsModel";


const usersInGroupRouter = Router();

usersInGroupRouter.put('/', async (req,res)=>{ //update users in group
    const {groupId, usersIdArr} = req.body;

    const updatedUsersInGroupsArr =  await usersInGroupServices.updateUsersInGroup(groupId,usersIdArr)
    const updatedGroupsArr = await GroupModel.find()
    res.json({usersInGroup:updatedUsersInGroupsArr,groupsArr:updatedGroupsArr})
});

// groupRouter.put('/', (req,res)=>{ //update existing User
//     const newUserList = userServices.updateUser(req.body)
//     res.json(newUserList)
// });

// If there are more than two arguments, the second argument will be
// counted as a middleware



export default usersInGroupRouter;