"use strict";

const loginForm = document.getElementById("login-form");
const signUpForm = document.getElementById("signup-form");
let isUserLoggedIn = localStorage.getItem("isUserLoggedIn") === "true";
let loggedInUser = localStorage.getItem("loggedInUser");

function handleLoginLogout(event) {
    event.preventDefault();
    const button = document.getElementById("nav-login");
    if (isUserLoggedIn) {
        unLogUser();
        button.textContent = "Login";
        button.href = "#";
        console.log("User logged out");
    } else {
        window.location.href = "login.html";
    }
}

function updateButtonText() {
    const button = document.getElementById("nav-login");
    if (isUserLoggedIn) {
        button.textContent = "Logout";
    } else {
        button.textContent = "Login";
    }
}

function initializeAuthHandler() {
    updateButtonText();
    const loginButton = document.getElementById("nav-login");
    if (loginButton) {
        loginButton.addEventListener("click", handleLoginLogout);
    }
}

function submitLoginForm(event) {
    event.preventDefault();
    let users = [];
    if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"));
    } else {
        localStorage.setItem("users", JSON.stringify(users));
    }
    const userInputName = document.getElementById("loginUsername").value;
    const userInputPassword = document.getElementById("loginPassword").value;
    console.log(`Username: ${userInputName}, Password: ${userInputPassword}`);
    for (let i = 0; i < users.length; i++) {
        if (
            users[i].username === userInputName &&
            users[i].password === userInputPassword
        ) {
            // Successful Login
            isUserLoggedIn = true;
            localStorage.setItem("isUserLoggedIn", "true");
            const successModal = new bootstrap.Modal(
                document.getElementById("successModal")
            );
            successModal.show();
            localStorage.setItem("loggedInUser", userInputName);
            document.getElementById("loggedInUserName").textContent =
                userInputName;
            console.log(`Logged in as: ${userInputName}`);
            updateButtonText();
            return;
        }
    }
    console.log(
        "Login Failed. User has not Registered or Incorrect Credentials"
    );
    alert(
        "You have not registered for an account or your credentials are incorrect. Please Sign Up or try again."
    );
}

if (loginForm) {
    loginForm.addEventListener("submit", submitLoginForm);
}

function submitSignUpForm(event) {
    event.preventDefault();

    // Validate form before processing
    if (!validateForm()) {
        console.log("Form validation failed");
        return;
    }

    let users = [];
    if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"));
        console.log(users);
    } else {
        localStorage.setItem("users", JSON.stringify(users));
    }
    const userInputName = document.getElementById("signUpUsername").value;
    const userInputPassword = document.getElementById("signUpPassword").value;
    console.log(`Username: ${userInputName}, Password: ${userInputPassword}`);
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == userInputName) {
            alert("Username already exists. Please Login.");
            return;
        }
    }
    let user = {};
    user.username = userInputName;
    user.password = userInputPassword;
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", userInputName);
    console.log(`Sign Up Successful`);
    // Show success modal
    const successModal = new bootstrap.Modal(
        document.getElementById("successModal")
    );
    successModal.show();
}

if (signUpForm) {
    signUpForm.addEventListener("submit", submitSignUpForm);
}

// For debugging

function setSampleCredentials() {
    localStorage.setItem(
        "users",
        JSON.stringify([{ username: "John", password: "1234" }])
    );
    console.log("Sample username and password set");
}

function unLogUser() {
    isUserLoggedIn = false;
    localStorage.setItem("isUserLoggedIn", "false");
    updateButtonText(); // Update button text immediately
    console.log("User logged out");
}

document.addEventListener("DOMContentLoaded", initializeAuthHandler);
document.addEventListener("DOMContentLoaded", redirectChecker);
