import {newProject} from './projectCreator.js';
import {handleTaskBtn} from './taskCreator.js';

const createTaskBtn = document.querySelector('.task-btn'); 

const btns = document.querySelectorAll('.btn');
export function btnsCheck( ) {
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
    if(buttonId == 'Projects'){
        newProject();
    } else{
        const title = document.querySelector('.title');
        title.innerHTML = buttonId;
        title.style.fontWeight = '700';
        title.style.fontSize = '36px';
    }
}