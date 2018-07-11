import{Router} from 'express';
import userServices from '../services/userServices'

const userRouter = Router();

userRouter.delete('/:userIndex', async (req,res)=>{
    const deleteUserIndex = req.params.userIndex;

    const newUserList = await userServices.deleteUser(deleteUserIndex)
    res.json(newUserList)
});

userRouter.post('/', async (req,res)=>{ //create new User
   const newUserList = await userServices.createUser(req.body)
   res.json(newUserList)
});

userRouter.put('/', async (req,res)=>{ //update existing User
   const newUserList = await userServices.updateUser(req.body)
    res.json(newUserList)
});

// If there are more than two arguments, the second argument will be
// counted as a middleware


export default userRouter;