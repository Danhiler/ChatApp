import {Router} from 'express';
import groupServices from '../services/groupServices'

const groupRouter = Router();


groupRouter.delete('/:groupId', async (req, res) => {
    const deleteGroupId = req.params.groupId;
    const newGroupList = await groupServices.deleteGroup(deleteGroupId)
    res.json(newGroupList)
});

groupRouter.post('/', async (req,res)=>{ //create new Group
     let {newGroupName, parentId} = req.body
    if(+parentId===0){
        parentId="5b487b4a448bcd338c859dd7";
    }

    const newGroupList = await groupServices.createGroup(parentId,newGroupName)

    res.json(newGroupList)
});

// groupRouter.put('/', (req,res)=>{ //update existing User
//     const newUserList = userServices.updateUser(req.body)
//     res.json(newUserList)
// });

// If there are more than two arguments, the second argument will be
// counted as a middleware

function flatToHierarchy(flat) {

    const roots = {} // things without parent

    // make them accessible by guid on this map
    const all = {}

    flat.forEach(function (item) {
        all[item.id] = item
    })
    // connect childrens to its parent, and split roots apart
    Object.keys(all).forEach(function (id) {
        let item = all[id];
        if (item.parent === null) {
            roots[item.name] = item
        } else if (item.parent in all) {
            let p = all[item.parent]
            if (!('childs' in p)) {
                p.childs = {}
            }
            p.childs[item.name] = item;
        }
    })

    // done!
    return roots["global"]
}

export default groupRouter;