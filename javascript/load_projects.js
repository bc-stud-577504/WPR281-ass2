
//import {getLocalStorageItem} from "./io";

projects = getLocalStorageItem("Projects");

console.log(projects)

function create_project_block(indx, dict) {
    return `<div onclick="location.href='/pages/project.html?id=${indx}'" class='project' id='project${indx}'>
                <p><b>${dict[indx].name}</b></p>
                <p>number of tickets: ${dict[indx].tickets}</p>
            </div>`;
}

for (let key in projects) {
    document.getElementById("projects").innerHTML += create_project_block(key, projects);
}
