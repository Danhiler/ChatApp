import * as express from 'express';
//import * as routes from './routes';
import * as Cors from 'cors'
import db from "./db";
import userRouter from './routes/userRouter';
import groupRouter from "./routes/groupRouter";
import usersInGroupRouter from './routes/usersInGroupRouter';


const app = express();
app.use(Cors());
app.use(express.json());

app.get('/', (req,res)=> {
    res.send("Hello World")

});

app.use('/getData', (req,res)=> {
    const {users,groups,usersInGroups} = db;


    const data ={"users":users,"groups":groups,"usersInGroup":usersInGroups}
    res.json(data)

});


app.use('/users',userRouter);
app.use('/groups',groupRouter);
app.use('/userInGroups',usersInGroupRouter);



export default app;