
// Throws an error if local storage is not available
if (!window.localStorage) {
    throw new Error("Local storage not available");
}

let projects_io = {
    1: { id: 1, name: "project1", tickets: 4 },
    2: { id: 2, name: "project2", tickets: 4 },
    3: { id: 3, name: "project3", tickets: 4 },
    4: { id: 4, name: "project4", tickets: 4 },
    5: { id: 5, name: "project5", tickets: 4 }
};

let users_io = {
    1: { id: 1, name: "person1", surname: "person1_surname", email: "person1@gmail.com", username: "user1" },
    2: { id: 2, name: "person2", surname: "person2_surname", email: "person2@gmail.com", username: "user2" },
    3: { id: 3, name: "person3", surname: "person3_surname", email: "person3@gmail.com", username: "user3" },
    4: { id: 4, name: "person4", surname: "person4_surname", email: "person4@gmail.com", username: "user4" },
    5: { id: 5, name: "person5", surname: "person5_surname", email: "person5@gmail.com", username: "user5" },
    6: { id: 6, name: "person6", surname: "person6_surname", email: "person6@gmail.com", username: "user6" },
    7: { id: 7, name: "person7", surname: "person7_surname", email: "person7@gmail.com", username: "user7" },
    8: { id: 8, name: "person8", surname: "person8_surname", email: "person8@gmail.com", username: "user8" },
    9: { id: 9, name: "person9", surname: "person9_surname", email: "person9@gmail.com", username: "user9" },
    10: { id: 10, name: "person10", surname: "person10_surname", email: "person10@gmail.com", username: "user10" }
};

let tickets_io = [
    { id: 1, summary: "ticket1 summary", detailed: "ticket1 detailed", createdBy: "1", created: "2023-08-12T12:33:11.790Z", project: 5, assignedTo: "10", status: "open", priority: "low", targetDate: "2023-08-28T00:00:00.000Z", actualDate: null, resSummary: null },
    { id: 2, summary: "ticket2 summary", detailed: "ticket2 detailed", createdBy: "2", created: "2023-08-12T12:34:57.177Z", project: 4, assignedTo: "9", status: "open", priority: "low", targetDate: "2023-08-16T00:00:00.000Z", actualDate: null, resSummary: null },
    { id: 3, summary: "ticket3 summary", detailed: "ticket3 detailed", createdBy: "3", created: "2023-08-12T12:35:23.584Z", project: 3, assignedTo: "8", status: "open", priority: "low", targetDate: "2023-08-24T00:00:00.000Z", actualDate: null, resSummary: null },
    { id: 4, summary: "ticket4 summary", detailed: "ticket4 detailed", createdBy: "4", created: "2023-08-12T12:36:01.119Z", project: 2, assignedTo: "7", status: "open", priority: "medium", targetDate: "2023-08-25T00:00:00.000Z", actualDate: null, resSummary: null },
    { id: 5, summary: "ticket5 summary", detailed: "ticket5 detailed", createdBy: "5", created: "2023-08-12T12:36:51.737Z", project: 1, assignedTo: "6", status: "open", priority: "low", targetDate: "2023-08-29T00:00:00.000Z", actualDate: null, resSummary: null },
    { id: 6, summary: "ticket6 summary", detailed: "ticket6 detailed", createdBy: "6", created: "2023-08-12T12:37:27.477Z", project: 5, assignedTo: "5", status: "open", priority: "low", targetDate: "2023-08-14T00:00:00.000Z", actualDate: null, resSummary: null },
    { id: 7, summary: "ticket7 summary", detailed: "ticket7 detailed", createdBy: "7", created: "2023-08-12T12:38:53.524Z", project: 4, assignedTo: "4", status: "open", priority: "low", targetDate: "2023-08-16T00:00:00.000Z", actualDate: null, resSummary: null },
    { id: 8, summary: "ticket8 summary", detailed: "ticket8 detailed", createdBy: "8", created: "2023-08-12T12:39:38.074Z", project: 3, assignedTo: "3", status: "open", priority: "low", targetDate: "2023-08-31T00:00:00.000Z", actualDate: null, resSummary: null },
    { id: 9, summary: "ticket9 summary", detailed: "ticket9 detailed", createdBy: "9", created: "2023-08-12T12:40:28.427Z", project: 2, assignedTo: "2", status: "open", priority: "low", targetDate: "2023-08-29T00:00:00.000Z", actualDate: null, resSummary: null },
    { id: 10, summary: "ticket10 summary", detailed: "ticket10 detailed", createdBy: "10", created: "2023-08-12T12:41:14.557Z", project: 1, assignedTo: "1", status: "open", priority: "low", targetDate: "2023-08-17T00:00:00.000Z", actualDate: null, resSummary: null },
    { id: 11, summary: "ticket11 summary", detailed: "ticket11 detailed", createdBy: "10", created: "2023-08-12T12:44:31.045Z", project: 5, assignedTo: "1", status: "open", priority: "low", targetDate: "2023-09-08T00:00:00.000Z", actualDate: null, resSummary: null },
    { id: 12, summary: "ticket12 summary", detailed: "ticket12 detailed", createdBy: "9", created: "2023-08-12T12:46:06.578Z", project: 4, assignedTo: "2", status: "open", priority: "low", targetDate: "2023-09-05T00:00:00.000Z", actualDate: null, resSummary: null },
    { id: 13, summary: "ticket13 summary", detailed: "ticket13 detailed", createdBy: "8", created: "2023-08-12T12:46:38.871Z", project: 3, assignedTo: "3", status: "open", priority: "low", targetDate: "2023-09-04T00:00:00.000Z", actualDate: null, resSummary: null },
    { id: 14, summary: "ticket14 summary", detailed: "ticket14 detailed", createdBy: "7", created: "2023-08-12T12:48:36.134Z", project: 2, assignedTo: "4", status: "open", priority: "low", targetDate: "2023-08-30T00:00:00.000Z", actualDate: null, resSummary: null },
    { id: 15, summary: "ticket15 summary", detailed: "ticket15 detailed", createdBy: "6", created: "2023-08-12T12:49:24.960Z", project: 1, assignedTo: "5", status: "open", priority: "low", targetDate: "2023-09-20T00:00:00.000Z", actualDate: null, resSummary: null },
    { id: 16, summary: "ticket16 summary", detailed: "ticket16 detailed", createdBy: "7", created: "2023-08-12T12:53:09.727Z", project: 5, assignedTo: "4", status: "open", priority: "low", targetDate: "2023-09-26T00:00:00.000Z", actualDate: null, resSummary: null },
    { id: 17, summary: "ticket17 summary", detailed: "ticket17 detailed", createdBy: "8", created: "2023-08-12T12:53:53.750Z", project: 4, assignedTo: "3", status: "open", priority: "low", targetDate: "2023-09-08T00:00:00.000Z", actualDate: null, resSummary: null },
    { id: 18, summary: "ticket18 summary", detailed: "ticket18 detailed", createdBy: "9", created: "2023-08-12T12:55:26.205Z", project: 3, assignedTo: "2", status: "open", priority: "low", targetDate: "2023-09-28T00:00:00.000Z", actualDate: null, resSummary: null },
    { id: 19, summary: "ticket19 summary", detailed: "ticket19 detailed", createdBy: "3", created: "2023-08-12T12:56:15.172Z", project: 2, assignedTo: "10", status: "open", priority: "low", targetDate: "2023-09-27T00:00:00.000Z", actualDate: null, resSummary: null },
    { id: 20, summary: "ticket20 summary", detailed: "ticket20 detailed", createdBy: "10", created: "2023-08-12T12:56:49.859Z", project: 1, assignedTo: "1", status: "open", priority: "medium", targetDate: "2023-09-14T00:00:00.000Z", actualDate: null, resSummary: null }
];

// updateLocalStorageItem("Projects", projects_io);
// updateLocalStorageItem("Users", users_io);
// updateLocalStorageItem("Tickets", tickets_io);

if (getLocalStorageItem("Projects") === null) {
    updateLocalStorageItem("Projects", projects_io);
}

if (getLocalStorageItem("Users") === null) {
    updateLocalStorageItem("Users", users_io);
}

if (getLocalStorageItem("Tickets") === null) {
    updateLocalStorageItem("Tickets", tickets_io);
}


function getLocalStorageItem(key) {
    if (localStorage.getItem(key) === null) {
        return null;
    }

    return JSON.parse(localStorage.getItem(key));
}

function updateLocalStorageItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function checkUserNameAvailability(userNamePassed) {
    let AllAccounts = getLocalStorageItem("Users");

    for (let key in AllAccounts) {
        if (AllAccounts[key].username.toLowerCase() == userNamePassed.toLowerCase()) {
            return false;
        }
    }
    return true;
}

function checkEmailAvailability(emailPassed) {
    let AllAccounts = getLocalStorageItem("Users");

    for (let key in AllAccounts) {
        if (AllAccounts[key].email.toLowerCase() == emailPassed.toLowerCase()) {
            return false;
        }
    }
    return true;
}

//export {getLocalStorageItem, updateLocalStorageItem};