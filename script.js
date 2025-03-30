document.getElementById("signupForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let newUsername = document.getElementById("newUsername").value.trim();
    let newPassword = document.getElementById("newPassword").value.trim();
    
    if (newUsername && newPassword) {
        localStorage.setItem("username", newUsername);
        localStorage.setItem("password", newPassword);
        
        alert("Signup successful! You can now log in.");
        window.location.href = "index.html";
    } else {
        alert("Please fill in all fields before signing up.");
    }
});

document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    
    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");
    
    if (username === storedUsername && password === storedPassword) {
        alert("Welcome back, " + username + "! Login successful.");
        window.location.href = "dashboard.html";
    } else {
        alert("Login failed! Please check your username and password.");
    }
});