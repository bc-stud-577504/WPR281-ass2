
function Ticket(id, summary, detailed, createdBy, created, project, assignedTo, status, priority, targetDate, actualDate, resSummary) {
    this.id = id;
    this.summary = summary;
    this.detailed = detailed;
    this.createdBy = createdBy;
    this.created = created;
    this.project = project;
    this.assignedTo = assignedTo;
    this.status = status;
    this.priority = priority;
    this.targetDate = targetDate;
    this.actualDate = actualDate;
    this.resSummary = resSummary;
}

function createTicketBlock(ticket) {

    let user = getLocalStorageItem("Users")[ticket.assignedTo];

    return `<div onclick="location.href='/pages/ticket.html?id=${ticket.id}'" class='ticket' id='ticket${ticket.id}'>
                <p><b>${ticket.summary}</b></p>
                <p>Assigned to: ${(ticket.assignedTo!=null)?user.email:"nobody"}</p>
            </div>`;
}
