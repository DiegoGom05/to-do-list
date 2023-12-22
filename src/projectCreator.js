import { currentProject } from './domManipulation';
import { taskDOM, currentTodos } from './taskCreator';

const addProject = document.querySelector('.add-project');
const addButton = document.querySelector('.add');
const projectsDiv = document.querySelector('.projects')
let projectIdCounter = 1;
export let projects = []; 

window.addEventListener('load', () => {
    const storedProjects = localStorage.getItem('projects');
    if(storedProjects){
        projects = JSON.parse(storedProjects);
        projectIdCounter = projects.length + 1;

        projectsDiv.innerHTML = '';

        projects.forEach((project) =>{
            const newProjectElement = document.createElement('button');
            newProjectElement.innerHTML = project.name;
            newProjectElement.id = project.id;
            newProjectElement.classList = 'projectElement';
            projectsDiv.appendChild(newProjectElement);
        });

        projectEventListeners();
    }
})

export function newProject() {
    projectsDiv.classList.add('hide');
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
 
            saveProjectsToLocalStorage();

            const newProjectElement = document.createElement('button');
            newProjectElement.innerText = `${project.name}`;
            newProjectElement.id = project.id;
            newProjectElement.classList = 'projectElement';
            projectsDiv.appendChild(newProjectElement);
            projectEventListeners();
        }
        addProject.classList.remove('active');
        projectsDiv.classList.remove('hide');
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
    projects.forEach((project) => {
        if (project.name == currentProject) {
            currentTodos = project.todos;
        }
    });
    taskDOM(undefined, currentTodos, undefined);
}


export function saveProjectsToLocalStorage() {
    localStorage.setItem('projects', JSON.stringify(projects));
}
