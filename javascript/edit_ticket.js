
let tickets = getLocalStorageItem("Tickets");

let ticketID = parseInt(new URLSearchParams(window.location.search).get("id"));

let ticketIndx;

for (let indx in tickets) {
    if(tickets[indx].id === ticketID) {
        ticketIndx = indx;
    }
}

document.getElementById("summary").value = tickets[ticketIndx].summary;
document.getElementById("detailed").value = tickets[ticketIndx].detailed;
let dropdown = document.getElementById("assignTo");

let users = getLocalStorageItem("Users");

// populate dropdown list with user emails
for (let key in users) {
    let el = document.createElement("option");
    el.textContent = users[key].email;
    el.value = users[key].id;

    dropdown.appendChild(el);
}

document.getElementById("edit-ticket").addEventListener("submit", (event) => {
    event.preventDefault();

    let summary = document.getElementById("summary").value;
    let detailed = document.getElementById("detailed").value;
    
    // gets the selected option from the dropdown
    let userID = document.getElementById("assignTo").value;

    console.log(tickets[ticketIndx].summary);
    console.log(tickets[ticketIndx].detailed);
    console.log(tickets[ticketIndx].assignedTo);

    tickets[ticketIndx].summary = summary;
    tickets[ticketIndx].detailed = detailed;
    tickets[ticketIndx].assignedTo = parseInt(userID);

    console.log(tickets[ticketIndx].summary);
    console.log(tickets[ticketIndx].detailed);
    console.log(tickets[ticketIndx].assignedTo);

    updateLocalStorageItem("Tickets", tickets);

    window.location.href = window.location.origin;
    return false;
});