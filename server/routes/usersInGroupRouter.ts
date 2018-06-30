import{Router} from 'express';
import groupServices from '../services/groupServices'
import usersInGroupServices from '../services/usersInGroupServices';

const usersInGroupRouter = Router();

usersInGroupRouter.put('/', (req,res)=>{ //update users in group
    const {groupId, usersIdArr} = req.body

    const updatedUsersInGroupsAndGroupsArr = usersInGroupServices.updateUsersInGroup(groupId,usersIdArr)
    res.json(updatedUsersInGroupsAndGroupsArr)
});

// groupRouter.put('/', (req,res)=>{ //update existing User
//     const newUserList = userServices.updateUser(req.body)
//     res.json(newUserList)
// });

// If there are more than two arguments, the second argument will be
// counted as a middleware



export default usersInGroupRouter;