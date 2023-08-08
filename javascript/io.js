
// Throws an error if local storage is not available
if(!window.localStorage) {
    throw new Error("Local storage not available");
}

let projects_io = {
    1: {id:1, name:"project1", tickets: 2},
    2: {id:2, name:"project2", tickets: 1},
    3: {id:3, name:"project3", tickets: 0}
};

let users_io = {
    1: {id: 1, name: "user1", surname: "surname", email: "user1_email", username: "username"},
    2: {id: 2, name: "user2", surname: "surname", email: "user2_email", username: "username"}
};

// summary, 
// detailed, 
// created_by, 
// created, 
// project, 
// person_assigned,
// priority,
// target date,
// actual date,
// resolution summary,
// status

let tickets_io = [
    {id:1, summary:"summary", detailed:"detailed", createdBy: 1, created: new Date(), project: 1, assignedTo: 2,
    priority: "low", target: new Date(), actual: new Date(), res_summary: "summary", status:"closed"},

    {id:2, summary:"summary", detailed:"detailed", createdBy: 2, created: new Date(), project: 2, assignedTo: 1,
    priority: "medium", target: new Date(), actual: null, res_summary: null, status:"open"},

    {id:3, summary:"summary", detailed:"detailed", createdBy: 1, created: new Date(), project: 1, assignedTo: null,
    priority: "low", target: new Date(), actual: new Date(), res_summary: "summary", status:"closed"}
];

// updateLocalStorageItem("Projects", projects_io);
// updateLocalStorageItem("Users", users_io);
// updateLocalStorageItem("Tickets", tickets_io);

if(localStorage.getItem("Projects") === null) {
    localStorage.setItem("Projects", {});
}

if(localStorage.getItem("Users") === null) {
    localStorage.setItem("Users", {})
}

if(localStorage.getItem("Tickets") === null) {
    localStorage.setItem("Tickets", []);
}


function getLocalStorageItem(key) {
    if(localStorage.getItem(key) === null) {
        return null;
    }

    return JSON.parse(localStorage.getItem(key));
}

function updateLocalStorageItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

//export {getLocalStorageItem, updateLocalStorageItem};