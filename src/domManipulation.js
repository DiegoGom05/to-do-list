import {newProject} from './projectCreator.js';
import {handleTaskBtn, taskDOM, currentTodos} from './taskCreator.js';

const createTaskBtn = document.querySelector('.task-btn'); 
const btns = document.querySelectorAll('.btn');
export let currentProject = 'Inbox';

export function btnsCheck() {
    btns.forEach((btn) => {
        btn.addEventListener('mouseover', () => {
            btns.forEach((otherBtn) => {
                otherBtn.classList.remove('active');
            });
            btn.classList.add('active');
        });
        btn.addEventListener('mouseout', () => {
            btn.classList.remove('active');
        })
        btn.addEventListener('click', () => {  
            handleButtonClick(btn.id);  
            if (!createTaskBtn.classList.contains('hide')) {
                createTaskBtn.classList.add('hide');
            }   
        })
    });

  
    createTaskBtn.addEventListener('mouseover', () => {
        createTaskBtn.classList.add('active');
    });
    createTaskBtn.addEventListener('mouseout', () => {
        createTaskBtn.classList.remove('active');
    });
    createTaskBtn.addEventListener('click', () => {
        handleTaskBtn();
    })
}

function handleButtonClick(buttonId) {
    const title = document.querySelector('.title');

    switch(buttonId){
        case('Projects'):
            newProject();
        break;
        case('Inbox'):
            title.innerHTML = buttonId;
            title.style.fontWeight = '700';
            title.style.fontSize = '36px';
            taskDOM(undefined, currentTodos, buttonId);
        break;
        case('Today'):
            title.innerHTML = buttonId;
            title.style.fontWeight = '700';
            title.style.fontSize = '36px';
            taskDOM(undefined, currentTodos, buttonId);
        break;
        case('Week'):
            title.innerHTML = buttonId;
            title.style.fontWeight = '700';
            title.style.fontSize = '36px';
            taskDOM(undefined, currentTodos, buttonId);
        break;
    }
    
}

