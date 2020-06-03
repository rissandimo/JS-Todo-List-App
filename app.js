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

        //add task to list
        taskList.push(newTaskName);

        //create task element
        const newTaskItem = document.createElement('li');

        //add task name to item
        newTaskItem.innerHTML = `${newTaskName}`;
        
        taskListDom.appendChild(newTaskItem);
    }
}


function filterTasks(event){
    event.preventDefault();

    const filteredTasks = [];

    console.log(`current tasks: ${taskList}`);
    

    const searchQuery = searchTask.value;
    if(searchQuery != ''){
        taskList.forEach(task => {
           if( task.toLowerCase().indexOf(searchQuery.toLowerCase()) != -1){
               console.log(`Match found: ${searchQuery}`);
               filteredTasks.push(searchQuery);
           }
           else{
               console.log("no match found");
               
           }
        });
    }

    console.log(`filtered tasks: ${filterTasks}`);

    
    
}




//Event listeners
newTaskBtn.addEventListener('click', addNewTask);
searchTaskBtn.addEventListener('click', filterTasks);