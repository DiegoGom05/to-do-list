const addProject = document.querySelector('.add-project');
const addButton = document.querySelector('.add');
const projectsList = document.querySelector('.projects-list');
let projectIdCounter = 1;
 
  

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
            };

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

export function projectEventListeners(){
    const projects = document.querySelectorAll('.projectElement');

    projects.forEach((projectElement) => {
        projectElement.removeEventListener('click', handleProjectClick);
        projectElement.addEventListener('click', handleProjectClick);
    });
}

function handleProjectClick() {
     
    const title = document.querySelector('.title');
    title.innerHTML = this.innerText;
    title.style.fontWeight = '700';
    title.style.fontSize = '36px';
    tasksDiv.innerHTML = '';
    
 
    
}