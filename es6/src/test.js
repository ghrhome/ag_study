class PersonClass{

    constructor(name){
        this.name=name;
    }

    sayName(){
        console.log(this.name)
    }
}

let person= new PersonClass("Nicholas");
person.sayName();

