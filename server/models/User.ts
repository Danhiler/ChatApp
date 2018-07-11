

export default class User {
    private username: string;
    private password: string;
    private age: string;
    constructor(name, pass, userAge){
        this.username= name;
        this.password= pass;
        this.age= userAge;
    }
}