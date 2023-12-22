import {currentProject} from './domManipulation'
import {projects, saveProjectsToLocalStorage} from './projectCreator'

const taskBtn = document.querySelector('.task-btn');
const addTask = document.querySelector('.add-task');
const taskPopup = document.querySelector('.add-task-popup');
export let currentTodos = '';


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

function createTask(taskTitle, taskDate, priorityLevel) { 
    const task = {
        Title: taskTitle,
        Date: taskDate,
        priorityLevel: priorityLevel,
        done: function(newTask){
            newTask.style.textDecoration = 'line-through';
        }
    }

    projects.forEach(project => {
        if(project.name == currentProject){      
            project.todos.push(task);    
            currentTodos = project.todos;
        }
    })
    saveProjectsToLocalStorage();
    
    taskDOM(task, currentTodos, undefined);        
}  

export function taskDOM(task, currentTodos, section){
    const tasksDiv = document.querySelector('.tasks-list');
    tasksDiv.innerHTML = '';
    if(section === undefined){ 
        currentTodos.forEach(todo => {
            const newTask = document.createElement('div');
            newTask.innerHTML = `<strong>Title: </strong>${todo.Title} <strong>Date due: </strong> ${todo.Date} <strong>Priority: </strong> ${todo.priorityLevel}`
            newTask.classList.add('task');
            const doneCheckbox = document.createElement('input');
            doneCheckbox.type = 'checkbox';
            doneCheckbox.addEventListener('change', function () {
                newTask.style.textDecoration = 'none';
                if (doneCheckbox.checked) {
                    task.done(newTask);
                    console.log(task);

                }          
            });
            
            newTask.appendChild(doneCheckbox);
            tasksDiv.appendChild(newTask);  
        })
    } else{
        switch(section){
            case('Inbox'):
            projects.forEach(project => {
                project.todos.forEach(todo => {
                    const newTask = document.createElement('div');
                    newTask.innerHTML = `<strong>Title: </strong>${todo.Title} <strong>Date due: </strong> ${todo.Date} <strong>Priority: </strong> ${todo.priorityLevel}`
                    newTask.classList.add('task');
                    const doneCheckbox = document.createElement('input');
                    doneCheckbox.type = 'checkbox';
                    doneCheckbox.addEventListener('change', function () {
                        newTask.style.textDecoration = 'none';
                        if (doneCheckbox.checked) {
                            const task = doneCheckbox.parentNode;
                            task.style.textDecoration = 'line-through';
                        }          
                    });
                    
                    newTask.appendChild(doneCheckbox);
                    tasksDiv.appendChild(newTask);  
                })
            })
            break;
            case('Today'):
                projects.forEach(project => {
                    project.todos.forEach(todo => {
                        if (isDateToday(todo.Date)) {
                            const newTask = document.createElement('div');
                            newTask.innerHTML = `<strong>Title: </strong>${todo.Title} <strong>Date due: </strong> ${todo.Date} <strong>Priority: </strong> ${todo.priorityLevel}`;
                            newTask.classList.add('task');
                            const doneCheckbox = document.createElement('input');
                            doneCheckbox.type = 'checkbox';
                            doneCheckbox.addEventListener('change', function () {
                                newTask.style.textDecoration = 'none';
                                if (doneCheckbox.checked) {
                                    const task = doneCheckbox.parentNode;
                                    task.style.textDecoration = 'line-through';
                                }
                            });

                            newTask.appendChild(doneCheckbox);
                            tasksDiv.appendChild(newTask);
                        }
                    });
                });
            break;
            case('Week'):
                projects.forEach(project => {
                    project.todos.forEach(todo => {
                        const todoDate = new Date(todo.Date);

                        if(isDateInThisWeek(todoDate)){
                            const newTask = document.createElement('div');
                            newTask.innerHTML = `<strong>Title: </strong>${todo.Title} <strong>Date due: </strong> ${todo.Date} <strong>Priority: </strong> ${todo.priorityLevel}`
                            newTask.classList.add('task');
                            const doneCheckbox = document.createElement('input');
                            doneCheckbox.type = 'checkbox';
                            doneCheckbox.addEventListener('change', function () {
                                newTask.style.textDecoration = 'none';
                                if (doneCheckbox.checked) {
                                    const task = doneCheckbox.parentNode;
                                    task.style.textDecoration = 'line-through';                        
                                }          
                            });
                            
                            newTask.appendChild(doneCheckbox);
                            tasksDiv.appendChild(newTask);  
                        }
                    
                    })
                })
            break;
        }
    }
}

function isDateInThisWeek(checkDate) {
    const currentDate = new Date();
    const currentDayOfWeek = currentDate.getDay(); 
    const startDateOfWeek = new Date(currentDate);
    startDateOfWeek.setDate(currentDate.getDate() - currentDayOfWeek);
    const endDateOfWeek = new Date(startDateOfWeek);
    endDateOfWeek.setDate(startDateOfWeek.getDate() + 6); 
    return checkDate >= startDateOfWeek && checkDate <= endDateOfWeek;
}

function isDateToday(checkDate) {
    const today = new Date();
    const checkDateObj = new Date(checkDate);
    today.setHours(0, 0, 0, 0);
    checkDateObj.setHours(0, 0, 0, 0);
    checkDateObj.setDate(checkDateObj.getDate() + 1);
    return checkDateObj.getTime() === today.getTime();
}
