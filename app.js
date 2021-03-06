//Dom Elements
const newTaskBtn = document.getElementById('new-task-btn');
const newTask = document.getElementById('new-task');
const searchTask = document.getElementById('search-task');
const searchTaskBtn = document.getElementById('search-task-btn');
const showAllTasksButton = document.getElementById('show-all-tasks-btn');
const taskListDom = document.getElementById('task-list');



                                                //Event handlers

/*
Retrieve task name
Retrieve current tasks saved in local storage - if any
Add new to dom
Save local storage
*/                                                
function addNewTask(event){
    event.preventDefault();
    let taskList;
    const newTaskName = newTask.value;
    if(newTaskName.trim() !== ''){
        //retrieve tasks from local storage
        taskList = retrieveTaskFromLocalStorage();

        //add task to array
        taskList.push(newTaskName);

        //add task to dom
        addTaskToDom(newTaskName);

        //add task to local storage
        addTaskToLocalStorage(newTaskName);

        //clear and focus input
        newTask.value = '';
        newTask.focus();
    }
}

function addTaskToDom(newTaskName){

    //create task element and assign name
    const newTaskItem = document.createElement('li');

    //add class and add delete button
    newTaskItem.className = 'task-item';
    newTaskItem.innerHTML = `${newTaskName}
    <button class="delete-item">X</button>`;

    //add task to dom
    taskListDom.appendChild(newTaskItem);
}

function addTaskToLocalStorage(newTaskName){

    let taskList;

    //retrieve local storage
    const currentTasks = localStorage.getItem('tasks');
    if(currentTasks === null){ // no tasks - create empty storage
        taskList = [];
    }
    else{
        taskList = JSON.parse(localStorage.getItem('tasks')); // assign local storage to array
    }

    //add new task to array
    taskList.push(newTaskName);

    //save array to local storage
    localStorage.setItem('tasks', JSON.stringify(taskList));
    
}

function deleteTask(e){
    const targetClicked = e.target;
    let taskName;


    //if delete button clicked
    if(targetClicked.className === 'delete-item'){
        //remove task from local storage
        taskName = targetClicked.parentElement.textContent.replace('X', '');     
      //  console.log(`task name: ${taskName}`);
        
        removeTaskFromLocalStorage(taskName);

        //remove task from DOM
        targetClicked.parentElement.remove();        
    }
    
}

function loadTasksAndRenderToDOM(){

    //retrieve tasks from LS
    const tasks = retrieveTaskFromLocalStorage();

    //traverse tasks and add to DOM
    tasks.forEach(addTaskToDom);

}

function retrieveTaskFromLocalStorage(){
    let taskList;

    //retrieve local storage
    const currentTasks = localStorage.getItem('tasks');
    if(currentTasks === null){ // no tasks - create empty storage
        taskList = [];
    }
    else{
        taskList = JSON.parse(localStorage.getItem('tasks')); // assign local storage to array
    }

    return taskList;
}

function removeTaskFromLocalStorage(taskName){    
   
    //retrieve tasks saved in local storage
   let currentTasks = retrieveTaskFromLocalStorage();

   //remove task from list
   currentTasks.forEach( function(task, currentIndex) {
        if(task.trim() === taskName.trim()){
            currentTasks.splice(currentIndex, 1);
        }
   });

   //save tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(currentTasks));
}


function filterTasks(event){
    event.preventDefault();    

            //show button to show all tasks
  //  document.querySelector('.show-all-tasks-btn').classList.add('show');
    const filteredTasks = [];

    //get a list of all tasks
    const taskListDOM = document.querySelector('.task-list');
    const tasks = taskListDOM.querySelectorAll('.task-item');
    
    //search for queried task
    const searchQuery = searchTask.value;
    if(searchQuery != ''){
        tasks.forEach(task => {
        const taskName = task.innerHTML;
           if( taskName.toLowerCase().indexOf(searchQuery.toLowerCase()) != -1){
               filteredTasks.push(taskName);
           }
        });
    }

    // check if matches found - display tasks; otherwise inform of no matches
    if(filteredTasks.length > 0){

        //clear current task list
        taskListDOM.innerHTML = '';

        //add filtered task to dom
        filteredTasks.forEach(addTaskToDom);

        //show all tasks button
        showAllTasksButton.classList.add('show');

    }    
    
}

//clear all filtered task and actual task list
function showAllTasks(event){
    event.preventDefault();

    const taskList = retrieveTaskFromLocalStorage();

    taskListDom.innerHTML = '';

    taskList.forEach(addTaskToDom);

    showAllTasksButton.classList.remove('show');
}


//Event listeners

newTaskBtn.addEventListener('click', addNewTask);

searchTaskBtn.addEventListener('click', filterTasks);

showAllTasksButton.addEventListener('click', showAllTasks);

//load tasks when app starts
document.addEventListener('DOMContentLoaded', loadTasksAndRenderToDOM);

//remove task 
taskListDom.addEventListener('click', deleteTask);