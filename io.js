
// Throws an error if local storage is not available
if(!window.localStorage) {
    throw new Error("Local storage not available");
}

let projects = {
    1: {id:1, name:"project1", tickets: 2},
    2: {id:2, name:"project2", tickets: 1},
    3: {id:3, name:"project3", tickets: 0}
};

let users = {
    1: {id: 1, name: "user1", surname: "surname", age: 1},
    2: {id: 2, name: "user2", surname: "surname", age: 1}
};

let tickets = [
    {summary:"summary", detailed:"detailed", created_by: 1, created: new Date(), project: 1, assigned_to: 2,
    priority: "low", target: new Date(), actual: new Date(), res_summary: "summary", status:"closed"},

    {summary:"summary", detailed:"detailed", created_by: 2, created: new Date(), project: 2, assigned_to: 1,
    priority: "medium", target: new Date(), actual: null, res_summary: null, status:"open"},

    {summary:"summary", detailed:"detailed", created_by: 1, created: new Date(), project: 1, assigned_to: null,
    priority: "low", target: new Date(), actual: new Date(), res_summary: "summary", status:"closed"}
];

// updateLocalStorageItem("Projects", projects);
// updateLocalStorageItem("Users", users);
// updateLocalStorageItem("Tickets", tickets);

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