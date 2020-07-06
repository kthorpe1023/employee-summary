// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");
class Intern extends Employee{
    constructor(name, id, email, role, school){
        super(name, id, email, "Intern"),
        this.School = school
    }


    getSchool(){
        return this.School
    }
}

module.exports = Intern