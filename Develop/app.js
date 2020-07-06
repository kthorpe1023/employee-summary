const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { endianness } = require("os");

const allInterns = []
const allEngineers = []
const allManagers = []
const allEmployees = [...allInterns, ...allEngineers, ...allManagers]



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const intern = function(){ inquirer.prompt([
    {type: "input", message: "What is the employee's name?", name: "Name"},
    {type: "input", message: "What is the employee's ID?", name: "id"},
    {type: "input", message: "What is the employee's email?", name: "Email"},
    {type: "input", message: "What school did (s)he attend?", name: "School"}
]).then(function(data) {
    let intern = new Intern(data.Name, data.id, data.Email, data.role, data.School)
    allInterns.push(intern);
    allEmployees.push(intern);
    // console.log(allEmployees);
    start();
})
};

const engineer= function(){ inquirer.prompt([
    {type: "input", message: "What is the employee's name?", name: "Name"},
    {type: "input", message: "What is the employee's ID?", name: "id"},
    {type: "input", message: "What is the employee's email?", name: "Email"},
    {type: "input", message: "What is their Github username?", name: "Github"}
]).then((data) => {
    let engineer = new Engineer(data.Name, data.id, data.Email, data.role, data.Github)
    allEngineers.push(engineer);
    allEmployees.push(engineer);
    // console.log(allEmployees);
    start()
})
};

const manager = function() {
    inquirer.prompt([
    {type: "input", message: "What is the employee's name?", name: "Name"},
    {type: "input", message: "What is the employee's ID?", name: "id"},
    {type: "input", message: "What is the employee's email?", name: "Email"},
    {type: "input", message: "What is their office number?", name: "Office"}
]).then((data) => {
    let manager =  new Manager(data.Name, data.id, data.Email, data.role, data.Office);
    allManagers.push(manager);
    allEmployees.push(manager);
    console.log(allEmployees);
    start();
})
}



const start = function(){
    inquirer.prompt([
        {type: "list", message: "What is the employee title?", name: "role", choices: ["intern", "engineer", "manager", "exit"]}
    ]).then((data) => {
    switch(data.role){
        case "intern":
            return intern(data)
            break;
        case "engineer":
            return engineer(data)
            break;
        case "manager":
            return manager(data)
            break;
        case "exit":
            return registerEmployees();
            break;
    }

    console.log(data)
})
};

start();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
const registerEmployees = function(){
    console.log(render(allEmployees));
}

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
const fileTime = function(){
    fs.writeFile("team.html")
}

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
