
// this is for me to keep track of where the functions are coming from

// import {getLocalStorageItem, updateLocalStorageItem} from "./io";

function Project(id, name, tickets) {
    this.id = id;
    this.name = name;
    this.tickets = tickets;
}

function createProject(event) {
    // this alows us to properly redirect
    event.preventDefault();

    let name = document.getElementById("name").value;
    let projects = getLocalStorageItem("Projects");

    let newProject = new Project(Object.keys(projects).length+1, name, 0);
    projects[newProject.id] = newProject;

    updateLocalStorageItem("Projects", projects);

    window.location.href = window.location.origin;
    return false;
}

function createProjectBlock(key, dict) {
    return `<div onclick="location.href='/pages/project.html?id=${key}'" class='project' id='project${key}'>
                <p><b>${dict[key].name}</b></p>
                <p>number of tickets: ${dict[key].tickets}</p>
            </div>`;
}
