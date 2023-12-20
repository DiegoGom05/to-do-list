import {currentProject} from './domManipulation';
import { taskDOM, currentTodos} from './taskCreator';

const addProject = document.querySelector('.add-project');
const addButton = document.querySelector('.add');
const projectsList = document.querySelector('.projects-list');
let projectIdCounter = 1;
export let projects = [];

export function newProject() {
    const projectNameInput = document.querySelector('#projectName');
    addProject.classList.add('active');

    function handleAddButtonClick() {
        const projectName = projectNameInput.value;
        projectNameInput.value = '';

        if (projectName) {
            const project = {
                id: `project${projectIdCounter}`,
                name: projectName,
                todos: []
            };
            projects.push(project);
            projectIdCounter++;

            const newProjectElement = document.createElement('button');
            newProjectElement.innerText = `${project.name}`;
            newProjectElement.id = project.id;
            newProjectElement.classList = 'projectElement';
            projectsList.appendChild(newProjectElement);
            projectEventListeners();
        }
        addProject.classList.remove('active');
    }

    addButton.removeEventListener('click', handleAddButtonClick);
    addButton.addEventListener('click', handleAddButtonClick);
}

export function projectEventListeners() {
    const projectElements = document.querySelectorAll('.projectElement');

    projectElements.forEach((projectElement) => {
        projectElement.removeEventListener('click', handleProjectClick);
        projectElement.addEventListener('click', () => {
            currentProject = projectElement.innerText;
            handleProjectClick();
        });
    });
}

function handleProjectClick() {
    const title = document.querySelector('.title');
    title.innerHTML = currentProject;
    title.style.fontWeight = '700';
    title.style.fontSize = '36px';

    const createTaskBtn = document.querySelector('.task-btn');
    createTaskBtn.classList.remove('hide');
    projects.forEach(project => {
        if(project.name == currentProject){

            currentTodos = project.todos;
        }
    })
    taskDOM(undefined, currentTodos, undefined);
}