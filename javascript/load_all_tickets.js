
let tickets = getLocalStorageItem("Tickets");

for (let ticket of tickets) {
    document.getElementById("tickets").innerHTML += createTicketBlock(ticket);
}
