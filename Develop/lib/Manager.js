// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");
class Manager extends Employee{
    constructor(name, id, email, role, office){
        super(name, id, email, "Manager"),
        this.office = office

    }


    getOfficeNumber(){
        return this.Office
    }
}

module.exports = Manager