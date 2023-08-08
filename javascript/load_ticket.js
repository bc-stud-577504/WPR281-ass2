
let tickets = getLocalStorageItem("Tickets");

let ticketID = parseInt(new URLSearchParams(window.location.search).get("id"));
let ticket = new Ticket();

for (let tkt of tickets) {
    if (tkt.id === ticketID) {
        ticket = tkt;
        break;
    }
}

let userBy = getLocalStorageItem("Users")[ticket.createdBy];
let userTo = getLocalStorageItem("Users")[ticket.assignedTo];

for (let key in ticket) {
    if(key === "createdBy") {
        document.getElementById("ticket").innerHTML += `<p>${key}: ${userBy.email}</p>`;
    }
    else if(key === "assignedTo"){
        document.getElementById("ticket").innerHTML += `<p>${key}: ${(ticket.assignedTo!=null)?userTo.email:"nobody"}</p>`;
    }
    else {
        document.getElementById("ticket").innerHTML += `<p>${key}: ${ticket[key]}</p>`;
    }
}
