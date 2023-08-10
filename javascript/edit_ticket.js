
let tickets = getLocalStorageItem("Tickets");
let ticketID = parseInt(new URLSearchParams(window.location.search).get("id"));
let ticketIndx = new Number();

// get index of the ticket in the array
for (let indx in tickets) {
    if(tickets[indx].id === ticketID) {
        ticketIndx = indx;
    }
}

// populate the form with current content for easier editing
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
    // allows us to redirect to the home page without passing form arguments
    event.preventDefault();

    let summary = document.getElementById("summary").value;
    let detailed = document.getElementById("detailed").value;
    
    // gets the selected option from the dropdown
    let userID = document.getElementById("assignTo").value;

    // assign the new values
    tickets[ticketIndx].summary = summary;
    tickets[ticketIndx].detailed = detailed;
    tickets[ticketIndx].assignedTo = parseInt(userID);

    // update the stored tickets
    updateLocalStorageItem("Tickets", tickets);

    // redirects to homepage
    window.location.href = window.location.origin + "/pages/home.html";
    return false;
});