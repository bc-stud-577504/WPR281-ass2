
//import {getLocalStorageItem} from "./io";

projects = getLocalStorageItem("Projects");

console.log(projects)

function create_project_block(indx, dict) {
    return `<div onclick="location.href='/project.html?id=${indx}'" class='project' id='project${indx}'>
                <p><b>${dict[indx].name}</b></p>
                <p>number of tickets: ${dict[indx].tickets}</p>
            </div>`;
}

for (let x of Object.keys(projects)) {
    document.getElementById("projects").innerHTML += create_project_block(x, projects);
}
