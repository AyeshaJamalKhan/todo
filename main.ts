#! /usr/bin/env node

import inquirer  from "inquirer"
let todos:string[]=[]
let condition= true;

let main = async () => {
   while  (condition){
    let option = await inquirer.prompt([
      {
        name:"choice",
        type:"list",
        message:"select an option you want to do:",
        choices:["Add task","Delete task", "View list","Update Task","Exit Program"]
      }
    ])
    if(option.choice=== "Add task"){
        await addTask ()
    }
    else if(option.choice === "Delete task"){
      await deleteTask()
    }
    else if(option.choice === "View list"){
        await viewTast ()
    }
    else if (option.choice === "Update Task"){
      await updateTask()
    }
    else if(option.choice === "Exit Program"){
      condition = false;
    }
    
    };
   };


// function to add new task in the list
let addTask = async () => {
  let newTask= await inquirer.prompt([
    {
      name:"task",
      type:"input",
      message:"Add your new task:"
    }
  ]);
  todos.push(newTask.task)
  console.log(`\n ${newTask.task} task added successfully in todo list`);
};

// function to view list items
let viewTast=() => {
   console.log(`\n Your todo-list: \n`);
   todos.forEach((task , index) => {
    console.log(`${index}:${task}`)
   })
};
 
// funcion to delete a task 

let deleteTask = async  () => {
  await viewTast()
  let taskIndex= await inquirer.prompt([
    {
      name:"index",
      type:"number",
      message:"Entre the 'index no'of the task you want to delete: ",

    }
  ]);
  let deletedTask = todos.splice(taskIndex.index,1);
  console.log(`\n ${deletedTask } this task has been deleted successfully from your todos\n`)

}

// function to update task
let updateTask = async() => {
    await viewTast();
  let update_Task_Index = await inquirer.prompt([
      {
        name:"index",
        type:"number",
        message:"entre the index of the task you want to update: ",
      },
      {
        name:"new_task",
        type:"input",
        message:"now entre the new task name: ",
      }
    ]);
    todos[update_Task_Index.index] = update_Task_Index.new_task;
    console.log( `\n task at index no.${update_Task_Index.index} updated  successfully [for updated list check option: "View list" ]\n `);
  }
  ;
main();
