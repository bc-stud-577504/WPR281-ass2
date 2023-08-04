
//import {getLocalStorageItem} from "./io";

projects = getLocalStorageItem("Projects");

console.log(projects)

function create_project_block(key, dict) {
    return `<div onclick="location.href='/project.html?id=${key}'" class='project' id='project${key}'>
                <p><b>${dict[key].name}</b></p>
                <p>number of tickets: ${dict[key].tickets}</p>
            </div>`;
}

for (let key in projects) {
    document.getElementById("projects").innerHTML += create_project_block(key, projects);
}
