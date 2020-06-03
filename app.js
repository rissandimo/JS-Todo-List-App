//Dom Elements
const newTaskBtn = document.getElementById('new-task-btn');
const newTask = document.getElementById('new-task');
const searchTask = document.getElementById('search-task');
const searchTaskBtn = document.getElementById('search-task-btn');
const showAllTasksButton = document.getElementById('show-all-tasks-btn');
const taskListDom = document.getElementById('task-list');

//App properties
const taskList = [];



                                                //Event handlers
//Create new task                                            
function addNewTask(event){
    event.preventDefault();

    const newTaskName = newTask.value;
    if(newTask != ''){

        //add task to array
        taskList.push(newTaskName);

        //add task to dom
        addTaskToDom(newTaskName);

        //clear and focus input
        newTask.value = '';
        newTask.focus();
    }
}

function addTaskToDom(newTaskName){
    //create task element and assign name
    const newTaskItem = document.createElement('li');
    newTaskItem.innerHTML = `${newTaskName}`;

    //add class
    newTaskItem.className = 'task-item';
    
    //add task to dom
    taskListDom.appendChild(newTaskItem);
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

    taskListDom.innerHTML = '';

    taskList.forEach(addTaskToDom);

    showAllTasksButton.classList.remove('show');
}




//Event listeners
newTaskBtn.addEventListener('click', addNewTask);
searchTaskBtn.addEventListener('click', filterTasks);
showAllTasksButton.addEventListener('click', showAllTasks);