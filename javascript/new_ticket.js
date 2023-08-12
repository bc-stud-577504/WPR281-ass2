
let projects = getLocalStorageItem("Projects");
let tickets = getLocalStorageItem("Tickets");

let dropdownCB = document.getElementById("createdBy");
let dropdownAT = document.getElementById("assignTo");

let users = getLocalStorageItem("Users");

// populate dropdown list with user emails
for (let key in users) {
    let elCB = document.createElement("option");
    let elAT = document.createElement("option");
    elCB.textContent = users[key].email;
    elCB.value = users[key].id;

    elAT.textContent = users[key].email;
    elAT.value = users[key].id;

    dropdownCB.appendChild(elCB);
    dropdownAT.appendChild(elAT);
}

document.getElementById("new-ticket").addEventListener("submit", (event) => {
    // allows us to redirect to the home page without passing form arguments
    event.preventDefault();

    let summary = document.getElementById("summary").value;
    let detailed = document.getElementById("detailed").value;
    let projectID = parseInt(new URLSearchParams(window.location.search).get("id"));
    
    // gets the selected option from the dropdown
    let CBID = document.getElementById("createdBy").value;
    let ATID = document.getElementById("assignTo").value;
    let priority = document.getElementById("priority").value;

    let targetDate = document.getElementById("target-date").value;

    let ticket = new Ticket(tickets.length+1, summary, detailed, CBID, new Date(), projectID, ATID, "open", priority, new Date(targetDate), null, null);

    tickets.push(ticket);

    for (let key in projects) {
        if(projects[key].id === projectID) {
            projects[key].tickets += 1;
        }
    }

    updateLocalStorageItem("Projects", projects);
    updateLocalStorageItem("Tickets", tickets);

    window.location.href = window.location.origin + "/pages/home.html";
    return false;
});