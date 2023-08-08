
let tickets = getLocalStorageItem("Tickets");

let ticketID = parseInt(new URLSearchParams(window.location.search).get("id"));

document.getElementById("summary").value = tickets[ticketID].summary;



// document.getElementById("new-project").addEventListener("submit", (event) => {
//     event.preventDefault();

//     let summary = document.getElementById("summary").value;
//     let detailed = document.getElementById("detail").value;

//     window.location.href = window.location.origin;
//     return false;
// });