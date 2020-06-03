//Dom Elements

const form = document.getElementById('form');
const newTask = document.getElementById('new-task');


//Event handlers
function addNewTask(event){
    event.preventDefault();

    const newTaskName = newTask.value;
    console.log(newTaskName);
    
}




//Event listeners
form.addEventListener('click', addNewTask);