
let tickets = getLocalStorageItem("Tickets");

let projectID = parseInt(new URLSearchParams(window.location.search).get("id"));

document.getElementById("new-ticket-args").href = `../pages/new_ticket.html?id=${projectID}`;

for (let ticket of tickets) {
    if(ticket.project === projectID) {
        document.getElementById("tickets").innerHTML += createTicketBlock(ticket);
    }
}
