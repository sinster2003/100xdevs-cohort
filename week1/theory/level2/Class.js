// blueprint
class Employee {
    constructor(name, id, salary) {
        // object properties
        this.name = name;
        this.id = id;
        this.salary = salary;
    }

    // calling a method without a creation of instance / object 
    static Details() {
        console.log("Employee Details");
    }

    introduce() {
        console.log(`HI my name is ${this.name} and my id is ${this.id}`)
    }
}

// create an object
const Manager = new Employee("Jack", "ahydlk_67", 100000);

// static method call 
Employee.Details();

// calling a method
Manager.introduce();