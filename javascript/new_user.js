

document.getElementById("new-user").addEventListener("submit", (event) => {
    // allows us to redirect to the home page without passing form arguments
    event.preventDefault();

    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    
    if(!checkEmailAvailability(email) || !checkUserNameAvailability(username)) {
        alert("email or username is not available");
        window.location.href = window.location.origin + "/pages/new_user.html";
        return false;
    }

    let users = getLocalStorageItem("Users");

    let user = new User(Object.keys(users).length+1, name, surname, email, username);

    users[user.id] = user;

    // update the stored tickets
    updateLocalStorageItem("Users", users);

    // redirects to homepage
    window.location.href = window.location.origin + "/pages/home.html";
    return false;
});

