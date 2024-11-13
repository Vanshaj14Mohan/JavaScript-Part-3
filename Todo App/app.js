let todo = [];

let req = prompt("Please enter your request");

while(true){
    if(req == "quit"){
        console.log("Quitting app");
        break;
    }
    if(req == "list"){
        console.log("-----------");
        // for(task of todo)
        for(i =0; i<todo.length; i++){
            // console.log(task);
            console.log(i, todo[i]);
        }
        console.log("-----------");
    }
    else if (req == "add"){
        let new_task = prompt("Enter the task you want to add");
        todo.push(new_task);
        console.log("Task added"); 
    }
    else if (req == "delete"){ //for delete
        let del_task = prompt("Enter the task you want to delete");
        todo.splice(del_task,1);
        console.log("Task deleted");
    }
    else{
        console.log("Wrong request");
    }
    req = prompt("Please enter your request");

}