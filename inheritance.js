class Parent{
    constructor(){
        this.fatherName = ("scheznegger")
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " +this.fatherName;
    }
}
const baby = new Child("raju");
const baby2 = new Child("rana");
console.log(baby.getFullName(),baby2);
