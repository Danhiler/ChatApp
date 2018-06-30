class Group {
    constructor(groupName, parent) {
        this.name = groupName;
        this.parent = parent;
        this.childs = {};
        this.type = 0;//0 empty, 1 users, 2 groups
        this.userCount =0;
        this.messageHistory=[]

        this.show=false;
    }


}
module.exports = Group;
