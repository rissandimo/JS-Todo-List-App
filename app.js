//Dom Elements
const newTaskBtn = document.getElementById('new-task-btn');
const newTask = document.getElementById('new-task');
const searchTask = document.getElementById('search-task');
const searchTaskBtn = document.getElementById('search-task-btn');
const taskListDom = document.getElementById('task-list');

//App properties
const taskList = [];



                                                //Event handlers
//Add new task to dom                                                
function addNewTask(event){
    event.preventDefault();

    const newTaskName = newTask.value;
    if(newTask != ''){

        //add task to array
        taskList.push(newTaskName);

        //create task element and assign name
        const newTaskItem = document.createElement('li');
        newTaskItem.innerHTML = `${newTaskName}`;

        //add class
        newTaskItem.className = 'task-item';
        
        //add task to dom
        taskListDom.appendChild(newTaskItem);

        //clear input
        newTask.value = '';
    }
}


function filterTasks(event){
    event.preventDefault();

    const filteredTasks = [];

    //get a list of all tasks
    const taskListDOM = document.querySelector('.task-list');
    const tasks = taskListDOM.querySelectorAll('.task-item');
    
    tasks.forEach(task => console.log(task.innerHTML));
    
    
    

    const searchQuery = searchTask.value;
    if(searchQuery != ''){
        taskList.forEach(task => {
           if( task.toLowerCase().indexOf(searchQuery.toLowerCase()) != -1){
               console.log(`Match found: ${task}`);
               filteredTasks.push(searchQuery);
           }
           else{
               console.log("no match found");
               
           }
        });
    }

    console.log(`filtered tasks: ${filteredTasks}`);

    
    
}




//Event listeners
newTaskBtn.addEventListener('click', addNewTask);
searchTaskBtn.addEventListener('click', filterTasks);