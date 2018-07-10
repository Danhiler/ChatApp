import * as express from 'express';
//import * as routes from './routes';
import * as Cors from 'cors'

import userRouter from './routes/userRouter';
import groupRouter from "./routes/groupRouter";
import usersInGroupRouter from './routes/usersInGroupRouter';

import GroupModel from "./mongoServer/groupsModel";
import {User as UserModel} from "./mongoServer/UsersModel";
import UserInGroupsModel from "./mongoServer/UsersInGroupsModel";


const app = express();
app.use(Cors());
app.use(express.json());

app.get('/', (req,res)=> {
    res.send("Hello World")
});

app.use('/getData', (req,res)=> {
    Promise.all([UserModel.find(),GroupModel.find(),UserInGroupsModel.find()])
        .then(([users,groups,usersInGroups])=>{
            const data ={"users":users,"groups":groups,"usersInGroup":usersInGroups}
            res.json(data)
        })

});


app.use('/users',userRouter);
app.use('/groups',groupRouter);
app.use('/userInGroups',usersInGroupRouter);



export default app;