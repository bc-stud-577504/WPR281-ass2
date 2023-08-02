
const projects = {
    1: {id:1, name:"project1", tickets: 2},
    2: {id:2, name:"project2", tickets: 1}
};

const users = {
    1: {id: 1, name: "user1", surname: "surname", age: 1},
    2: {id: 2, name: "user2", surname: "surname", age: 1}
};

const tickets = [
    {summary:"summary", detailed:"detailed", created_by: 1, created: new Date(), project: 1, assigned_to: 2,
    priority: "low", target: new Date(), actual: new Date(), res_summary: "summary", status:"closed"},

    {summary:"summary", detailed:"detailed", created_by: 2, created: new Date(), project: 2, assigned_to: 1,
    priority: "medium", target: new Date(), actual: null, res_summary: null, status:"open"},

    {summary:"summary", detailed:"detailed", created_by: 1, created: new Date(), project: 1, assigned_to: null,
    priority: "low", target: new Date(), actual: new Date(), res_summary: "summary", status:"closed"}
];

function create_project_block(indx, dict) {
    return `<div onclick="location.href='/project.html?id=${indx}'" class='project' id='project${indx}'>
                <p><b>${dict[indx].name}</b></p>
                <p>number of tickets: ${dict[indx].tickets}</p>
            </div>`;
}

for (let x of Object.keys(projects)) {
    document.getElementById("projects").innerHTML += create_project_block(x, projects);
}



// summary, 
// detailed, 
// created_by, 
// created, 
// project, 
// person_assigned,
// priority,
// target date,
// actual date,
// resolution summary,
// status

