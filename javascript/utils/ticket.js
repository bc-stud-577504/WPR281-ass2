
function Ticket(id, summary, detailed) {
    this.id = id;
    this.summary = summary;
    this.detailed = detailed;
}

function createTicketBlock(ticket) {

    let user = getLocalStorageItem("Users")[ticket.assigned_to];

    return `<div onclick="location.href='/pages/ticket.html?id=${ticket.id}'" class='ticket' id='ticket${ticket.id}'>
                <p><b>${ticket.summary}</b></p>
                <p>Assigned to: ${(ticket.assigned_to!=null)?user.name:"nobody"}</p>
            </div>`;
}