//Dom Elements

const form = document.getElementById('form');
const newTask = document.getElementById('new-task');
const taskList = document.getElementById('task-list');


//Event handlers
function addNewTask(event){
    event.preventDefault();

    const newTaskName = newTask.value;
    if(newTask != ''){

        //create task element
        const newTaskItem = document.createElement('li');

        //add task name to item
        newTaskItem.innerHTML = `${newTaskName}`;
        console.log(newTaskItem);
        
        taskList.appendChild(newTaskItem);
    }
    
}




//Event listeners
form.addEventListener('submit', addNewTask);