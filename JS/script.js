const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Register Function
function getdata(e) {
    e.preventDefault();

    var user = document.getElementById("user");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if (user.value.trim().length < 3) {
        alert("Username must be at least 3 characters long.");
        user.style.border = "2px solid red";
        return;
    } else {
        user.style.border = "2px solid black";
    }

    if (email.value.indexOf("@") === -1) {
        alert("Please enter a valid email address.");
        email.style.border = "2px solid red";
        return;
    } else {
        email.style.border = "2px solid black";
    }

    if (localStorage.getItem("email") === email.value) {
        alert("This email is already registered!");
        email.style.border = "2px solid red";
        return;
    }

    if (password.value.trim().length < 6) {
        alert("Password must be at least 6 characters long.");
        password.style.border = "2px solid red";
        return;
    } else {
        password.style.border = "2px solid black";
    }

    localStorage.setItem("name", user.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);

    alert("Registration successful! Redirecting to login...");

    // Optional: switch to login view if you're using toggle
    container.classList.remove("active");
    // Or redirect:
    // window.open("/Threads-Trends/HTML/home.html", "_self");
}

document.getElementById("signup").addEventListener("click", getdata);

// Login Function
function login(e) {
    e.preventDefault();

    var useremail = document.getElementById("usemail");
    var userpassword = document.getElementById("uspassword");

    var storageMail = localStorage.getItem("email");
    var storagePass = localStorage.getItem("password");
    var storageUser = localStorage.getItem("name");

    if (useremail.value === storageMail && userpassword.value === storagePass) {
        alert("Welcome back, " + storageUser + "!");
        window.open("../HTML/home.html", "_self");
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

document.getElementById("signin").addEventListener("click", login);
