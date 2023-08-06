
let tickets = getLocalStorageItem("Tickets");

let projectID = parseInt(new URLSearchParams(window.location.search).get("id"));

for (let ticket of tickets) {
    if(ticket.project === projectID) {
        document.getElementById("tickets").innerHTML += createTicketBlock(ticket);
    }
}
