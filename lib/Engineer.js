// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Engineer extends Employee{
    constructor(name, id, email, role, github){
        super(name, id, email, "Engineer"),
        this.Github = github
    }

    getGithub(){
        return this.Github
    }
}

module.exports = Engineer