
let tickets = getLocalStorageItem("Tickets");

let ticketID = parseInt(new URLSearchParams(window.location.search).get("id"));
let ticket = new Ticket();

for (let tkt of tickets) {
    if (tkt.id === ticketID) {
        ticket = tkt;
        break;
    }
}

for (let key in ticket) {
    document.getElementById("ticket").innerHTML += `<p>${key}: ${ticket[key]}</p>`;
}
