const projectBar = document.querySelector('.projects');
const projectTemplate = document.querySelector('.projects-template').textContent
    .firstElementChild.cloneNode(true);

function renderProjects(projects){
    const fragment = document.createDocumentFragment();
    projectsBar.textContent = '';

    projects.forEach((project, index) => {
        const div = createProjectDiv(project, index);
        fragment.appendChild(div);
    });

    projectBar.appendChild(fragment);
}

function createProjectDiv(project, index){
    const projectDiv = projectTemplate.cloneNode(true);
    const titleInsideDiv = projectDiv.querySelector('.item__name');

    styleIfSelected(project.selected, projectDiv)

    titleInsideDiv.textContent = project.name;
    projectDiv.dataset.index = index;

    return projectDiv;
}

export default renderProjects;