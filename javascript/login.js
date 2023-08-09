//clear local storage
localStorage.removeItem("ActiveUser")

//global variables
var AllAccounts = new Array();
user = new Object();
var AccountExist; //for login function

let usernameEntered;
let emailEntered;
let password1Entered;
let password2Entered;

let emailEntered4Login = " ";
let passwordEntered4Login = " ";
start()
function start(){
        //check if browser supports local storage
    if(window.localStorage){
        /*
        The local storage clears itself every week, month or year
        depending on the settings. call a function that will
        ensure that if this happens there's still an admin account available
        */
        LocalStorageIntialLoadOrReload()
        //Add even listener to hide or show the signup page or login page
    
        document.getElementById('SignupButton').addEventListener("click", (e)=>{
            //console.log(document.querySelector('#form'))
            e.preventDefault()
            document.querySelector('form').classList.add("hide-form")
            document.querySelector('#form2').classList.remove("hide-form")
            document.querySelector('#existingUserName').classList.add('hide-form')
            document.querySelector('#existingEmail').classList.add('hide-form')
            document.querySelector('#non-matching-passwords').classList.add('hide-form')
            document.querySelector('#password1').classList.remove('red')
            document.querySelector('#password2').classList.remove('red')
            document.querySelector('#IncorrectInfo').classList.add('hide-form')
            if(creatAccount()){
                console.log("aCCOUNT SS")
            }
            
            
                
        })

        //Add Event listener to the login Button
        document.getElementById('loginButton').addEventListener("click",
        (e)=>{
            e.preventDefault()
            document.getElementById('createAccountForm').reset();
            document.querySelector('#successfullAccount').classList.add("hide-form")
            document.querySelector("#nonexistingAcc").classList.add('hide-form')
            document.querySelector('#IncorrectInfo').classList.add('hide-form')
            let email = document.getElementById('email4Login').value;
            let password = document.getElementById('password4Login').value;
            //console.log("email is :"+email+" password is: "+password)

            loginFunction(email, password)
            console.log("go to home page")
            window.location.href = window.location.origin + "/pages/home.html";
        })
        
    }
    else
    {
        console.log("Local storage is unsupported by the browser");
    }
}


function LocalStorageIntialLoadOrReload(){
    if(localStorage.getItem("AllUsers") == null){
        //console.log("Local Storage is empty")
    
        user = {
        Username:"Admin",
        Email: "Admin@gmail.com",
        Password: "Admin123"
    }
    console.log(user)
    //push object into the array AllAccounts
    AllAccounts.push(user);

    //cast Array as a JSON String to store in local storage
    localStorage.setItem("AllUsers", JSON.stringify(AllAccounts))

    }

    /*Else if the local storage is populated with user data 
    push these back into the array Accounts*/
    else{
        AllAccounts = JSON.parse((localStorage.getItem("AllUsers")))
       // console.log(AllAccounts)
    }
    
}

//login Funtion
function loginFunction(email, password)
{   //Add event listener to button
    
    emailEntered4Login =  email.toLowerCase();
    passwordEntered4Login = password;
    let included = false;
    emailList = new Array();
    
    //first check if email address exists
    for(let i = 0; i < AllAccounts.length; i++)
    {emailList.push(AllAccounts[i].Email.toLowerCase())}
    
    included = emailList.includes(emailEntered4Login)
    
    if(included){
        document.querySelector("#nonexistingAcc").classList.add('hide-form')
        
        if(checkIfPasswordIsCorrect(emailEntered4Login, passwordEntered4Login)){
            return;
        }
        
    }
    else{
        document.querySelector("#nonexistingAcc").classList.remove('hide-form')
        document.getElementById('loginButton').addEventListener("click",
     (e)=>{
                e.preventDefault()
                let email = document.getElementById('email4Login').value;
                let password = document.getElementById('password4Login').value;
                 loginFunction(email, password)
     })
    }   
}

function checkIfPasswordIsCorrect(emailEntered4Login, passwordEntered4Login){
    let goToHome = false;
    for(let i = 0; i < AllAccounts.length; i++){
        if(AllAccounts[i].Email.toLowerCase() == emailEntered4Login &&
        AllAccounts[i].Password == passwordEntered4Login)
        {
            goToHome = true;
            document.querySelector('#IncorrectInfo').classList.add('hide-form')
            //store the active username so it can persist o other pages. then route to home
            localStorage.setItem("ActiveUser", JSON.stringify(AllAccounts[i]))
            //return but go to home page

            return true;
}

        else{
            goToHome = false;
            document.querySelector('#IncorrectInfo').classList.remove('hide-form')
            return false;
            
        }
    }
    
}



//creat an account if there is not an existing one
function creatAccount(){
    document.querySelector('#IncorrectInfo').classList.add('hide-form')
    document.getElementById('form2Submit').addEventListener("click",
    (e)=>{
     
        e.preventDefault()
        usernameEntered = document.getElementById("username").value
        emailEntered = document.getElementById('newEmail').value
        password1Entered = document.getElementById('password1').value
        password2Entered = document.getElementById('password2').value
        
        //function to check accuracy of form inputs
        formInputs()
        return true;   
    })

    document.getElementById('loginButton2').addEventListener("click", (e)=>{
        e.preventDefault()
        document.getElementById('createAccountForm').reset();
        document.querySelector('form').classList.remove("hide-form")
        document.querySelector('#form2').classList.add("hide-form")
        start()
    })
              
}

function formInputs(){

    //check username availability
    let userNameAvaiable = checkUserNameAvailability(usernameEntered)

    //check email availability
    let emailAvailable = checkEmailAvailability(emailEntered)

    //check Password Match
    let passwordMatch = checkPasswordMatch(password1Entered, password2Entered)
   // localSotrageFunction(username, email, password1)
    
    

    //check if everything is valid for account creation
    if(userNameAvaiable && emailAvailable && passwordMatch){
        
            
        //reset form to original state
        document.getElementById('createAccountForm').reset();
        document.getElementById('form2Submit').removeEventListener("click", (e)=>{
        })
        localSotrageFunction(usernameEntered, emailEntered, password1Entered)
        
        return;  
        
        
    }
    else{
        //restart entire operation
        creatAccount()
    }
}

function checkUserNameAvailability(userNamePassed){
    for(let i = 0; i < AllAccounts.length; i++){
        if(AllAccounts[i].Username.toLowerCase() == userNamePassed.toLowerCase()){
            document.querySelector('#existingUserName').classList.remove('hide-form')
            return false;
        }
    }
    document.querySelector('#existingUserName').classList.add('hide-form')
    return true;
}

function checkEmailAvailability(emailPassed){
    for(let i = 0; i < AllAccounts.length; i++){
        if(AllAccounts[i].Email.toLowerCase() == emailPassed.toLowerCase()){
            document.querySelector('#existingEmail').classList.remove('hide-form')
            return false;
        }
    }
    document.querySelector('#existingEmail').classList.add('hide-form')
    return true;
}

function checkPasswordMatch(passedPassword1, passedPassword2)
{
    if(passedPassword1 == passedPassword2){
        document.querySelector('#non-matching-passwords').classList.add('hide-form')
        document.querySelector('#password1').classList.remove('red')
        document.querySelector('#password2').classList.remove('red')
        return true;
    }
    else{
        document.querySelector('#non-matching-passwords').classList.remove('hide-form')
        document.querySelector('#password1').classList.add('red')
        document.querySelector('#password2').classList.add('red')
        return false;
    }
}

function localSotrageFunction(username2BStored, email2BStored, password2BStored){
    user = {
        Username: username2BStored,
        Email: email2BStored,
        Password: password2BStored
    }
    if(user.Username == "" && user.Email == "" && user.Password == ""){
        
        start()
    }
    else{

       //push object into the array AllAccounts
   // console.log()
    AllAccounts.push(user);
    
    //cast Array as a JSON String to store in local storage
    localStorage.setItem("AllUsers", JSON.stringify(AllAccounts))

    //go back to the login Page
    goBacktologin() 
    }
    
     
  
}

function goBacktologin(){
    document.querySelector('form').classList.remove("hide-form")
    document.querySelector('#form2').classList.add("hide-form")
    document.querySelector('#successfullAccount').classList.remove("hide-form")
    document.getElementById('createAccountForm').reset();
    document.querySelector("#nonexistingAcc").classList.add('hide-form')
    document.querySelector('#IncorrectInfo').classList.add('hide-form')
    start() 
}




