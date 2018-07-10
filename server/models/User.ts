

export default class User {
    private userName: string;
    private password: string;
    private age: string;
    constructor(name, pass, userAge){
        this.userName= name;
        this.password= pass;
        this.age= userAge;
    }

    updateUser (newPass, newAge) {
        this.password = newPass;
        this.age = newAge;
    };
}