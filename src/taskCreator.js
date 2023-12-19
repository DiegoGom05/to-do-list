const taskBtn = document.querySelector('.task-btn');
const addTask = document.querySelector('.add-task');
const taskPopup = document.querySelector('.add-task-popup');
const tasksDiv = document.querySelector('.tasks');

function createTask(taskTitle, taskDate, priorityLevel) { 
   const task = {
    Title: taskTitle,
    Date: taskDate,
    priorityLevel: priorityLevel,
    done: function(){
        newTask.style.textDecoration = 'line-through';
    }
   }
    
   const doneCheckbox = document.createElement('input');
    doneCheckbox.type = 'checkbox';
    doneCheckbox.addEventListener('change', function () {
        newTask.style.textDecoration = 'none';
        if (doneCheckbox.checked) {
            task.done();
        }          
    });
    const newTask = document.createElement('div');

    newTask.innerHTML = `<strong>Title: </strong>${task.Title} <strong>Date due: </strong> ${task.Date} <strong>Priority: </strong> ${task.priorityLevel}`
    newTask.classList.add('task');
    newTask.appendChild(doneCheckbox);
      
   
    tasksDiv.appendChild(newTask);  
}  

export function handleTaskBtn() {
    taskPopup.classList.add('active');
    taskBtn.classList.add('hide');

    const handleClick = function() {
        const taskTitle = document.querySelector('.input-add-task-popup').value;
        const taskDate = document.getElementById('taskDate').value;
        const radioButtons = document.querySelectorAll('input[name="priority"]');
        let priorityLevel;
        for(const radioButton of radioButtons) {
            if(radioButton.checked){
                priorityLevel =radioButton.value;
                break;
            }
        }
        if(taskTitle && taskTitle !== ''){
            createTask(taskTitle, taskDate, priorityLevel);
            
        }  
        addTask.removeEventListener('click', handleClick);
        taskPopup.classList.remove('active');
        taskBtn.classList.remove('hide');
    };

    addTask.addEventListener('click', handleClick);

} 