/*
can not access local storage for projects ATM. thus dummpy projects were created.

    let project1 = new Object();
    let project2 = new Object();
    let project3 = new Object();*/
//get person responsible for project from project info

let Projects = localStorage.getItem("Projects")
console.log("Projects "+Projects)


//Active user stored in local storage
const ActiveUserInfo = JSON.parse((localStorage.getItem("ActiveUser")))

//global variables
Ticket = new Object();
let radioBtnValue = 0;
//ticken variables
let username = ActiveUserInfo.Username;
let projectID;
let bugType;
let statusOfBug;
let date = new Date();
let personResponsible = "TBD";
let description;
let BugID;

//global flags for forms
let projectFlag = false;
let bugFlag = false;

start()
function start(){
    //add the username to ticket layout
    let parent = document.getElementById("nameOfUser")
    let child = document.createTextNode("Ticket launched by: " + username)
    parent.appendChild(child)
    projectID = 0;
    //get the projectID
document.querySelector("#launchTicket").addEventListener("click", (e)=>{
    e.preventDefault()
    projectID = document.querySelector("#ProjectID").selectedIndex; //number   
    projectFlag = checkProjectID(projectID)

    BugID = document.querySelector("#BugID").selectedIndex;
    bugFlag = getBugType(BugID);
    if(!BugID){
        document.querySelector('#BugID').classList.add('makeRedBorder')
        document.querySelector("#bugErrorParagraph").classList.remove("hide-form")
    }
    else{
        document.querySelector('#BugID').classList.remove('makeRedBorder')
        document.querySelector("#bugErrorParagraph").classList.add("hide-form")
    }
    getDescription()

    //get the status of bug from the radio button
   
    if(!bugFlag || !projectFlag){
        start()
     }
     else{
        console.log("ticket successfully submitted")
        window.setTimeout(delay, 5000);
        document.querySelector('#successful').classList.remove('hide-form')
        
        


        function delay(){
            //load 2 local storage update project and ticket

            document.querySelector('#successful').classList.add('hide-form')
            //route to home page after form submission
            
            window.location.href = window.location.origin;
            
        }
        
     }
})

}






function checkProjectID(projectID){
    
    if(projectID == 0){
        document.querySelector('#ProjectID').classList.add('makeRedBorder');
        document.querySelector('#ProjectError').classList.remove('hide-form');
        return false;
    }
    else{
        document.querySelector('#ProjectID').classList.remove('makeRedBorder');
        document.querySelector('#ProjectError').classList.add('hide-form');
        return true;
    }
}

function getBugType(BugID){
    switch (BugID){ 
        case 1:
            bugType = "Functional Bug"
            return true;
            
        case 2:
            bugType = "Logical Bug"
            return true;
        case 3:
            bugType = "Workflow Bug"
            return true;
        case 4:
            bugType = "Security Bug"
            return true;
        case 5:
            bugType = "Logical Bug"
            return true;
        case 6:
            bugType = "Out of bounds Bug"
            return true;  

        case 0:
            return false;
           
    }    
}

function getBugStatus(){
    
    let radioButtons = document.querySelectorAll('input[name = "exampleRadios"]')
    radioButtons.forEach(radioBtn => radioBtn.addEventListener("change", function(){
        radioBtnValue = this.value
        assignTicketStatus(radioBtnValue)
        return;
    }))
    
    
    
}
function assignTicketStatus(radioBtnValue){
   
    if(radioBtnValue == 1){
        statusOfBug = "open"
        console.log(statusOfBug)
    }
    else{
        if(radioBtnValue == 2){
            statusOfBug = "Resolved"
            console.log(statusOfBug)
        }
        else{
            statusOfBug = "Overdue"
            
        }
    }
    return statusOfBug;
}
function getDescription(){
    document.querySelector('#launchTicket').addEventListener("click", ()=>{
        description = document.getElementById('Description').value

        //create ticket upon submission of form
        createTicket()
        
        return;
    })
}

function createTicket(){
    if(getBugStatus() === undefined){statusOfBug = "open"} //default entry
    
    Ticket = {
    Username: username,
    ProjectID: projectID,
    BugType: bugType,
    Date: date,
    Description: description,
    StatusofBug: statusOfBug,
    Developer: personResponsible,
    
   }

   //load ticket to local storage
   console.log(Ticket)
    
}








