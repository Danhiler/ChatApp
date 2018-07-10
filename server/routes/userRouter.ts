import{Router} from 'express';
import userServices from '../services/userServices'

const userRouter = Router();

userRouter.delete('/:userIndex', (req,res)=>{
    const deleteUserIndex = req.params.userIndex;

    const newUserList = userServices.deleteUser(deleteUserIndex)
    res.json(newUserList)
});

// userRouter.post('/', (req,res)=>{ //create new User
// // console.log(req.body)
//    const newUserList = userServices.createUser(req.body)
//    res.json(newUserList)
// });

userRouter.put('/', (req,res)=>{ //update existing User
   const newUserList = userServices.updateUser(req.body)
    res.json(newUserList)
});

// If there are more than two arguments, the second argument will be
// counted as a middleware


export default userRouter;