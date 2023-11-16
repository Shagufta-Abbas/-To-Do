import inquirer from 'inquirer'
import Choices from 'inquirer/lib/objects/choices.js'

// todos array=
// function=
// operation=

let todos : string[] = ["Hussain","Hamza"];
async function createTodos (arr:string[]){

do{

    let ans = await inquirer.prompt({
        type:"list",
        message:"Select An Operator",
        name:"select",
        choices:["Add","Update","View","Delete"]
    })
         if(ans.select == "Add"){
            let addTodo = await inquirer.prompt({
                type:"input",
                message:"Add Item.. ",
                name:"todo",
            })
            arr.push(addTodo.todo)
            console.log(todos)
         }
         if(ans.select == "Update"){
            let updateTodo = await inquirer.prompt({
                type:"list",
                message:"Select Item For Update",
                name:"todo",
                choices:todos.map(item => item)
            })
            let addTodo = await inquirer.prompt({
                type:"input",
                message:"Add Item.. ",
                name:"todo",
            });
    
            let newTodos = todos.filter(val => val !== updateTodo.todo)
            todos = [...newTodos,addTodo.todo]
            console.log(todos)
         }
         if(ans.select == "View"){
            console.log(todos)
         }
         if(ans.select == "Delete"){
            let deleteTodo= await inquirer.prompt({
                type:"list",
                message:"Select Item For Which You Want To Delete",
                name:"todo",
                choices:todos.map(item => item)
            })
            let newTodos = todos.filter(val => val !== deleteTodo.todo)
            todos=[...newTodos]
            console.log(todos)
         }  

}while(true)

}

createTodos(todos)
