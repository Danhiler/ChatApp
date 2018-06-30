import * as uuidv1 from 'uuid/v1'

export default class User {
    private id: string;
    private userName: string;
    private password: string;
    private age: string;
    constructor(name, pass, userAge){
        this.id= uuidv1();
        this.userName= name;
        this.password= pass;
        this.age= userAge;
    }

    updateUser (newPass, newAge) {
        this.password = newPass;
        this.age = newAge;
    };
}