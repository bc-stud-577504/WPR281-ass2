
// this is for me to keep track of where the functions are coming from

// import {getLocalStorageItem} from "./io";
// import {createProjectBlock} from "./project";

let projects = getLocalStorageItem("Projects");

for (let key in projects) {
    document.getElementById("projects").innerHTML += createProjectBlock(projects[key]);
}
