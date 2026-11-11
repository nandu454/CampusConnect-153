function openLogin() {
    document.getElementById("loginPopup").style.display = "flex";
}

function closeLogin() {
    document.getElementById("loginPopup").style.display = "none";
}

function showRegister() {
    document.getElementById("registerForm").style.display = "block";
}

function showLogin() {
    document.getElementById("registerForm").style.display = "none";
}

function register() {
    let name = document.getElementById("studentName").value;
    let email = document.getElementById("registerEmail").value;
    let password = document.getElementById("registerPassword").value;

    if (!name || !email || !password) {
        document.getElementById("registerMessage").innerText =
            "Please fill all details.";
        return;
    }

    if (!email.endsWith("@srmist.edu.in")) {
        document.getElementById("registerMessage").innerText =
            "Use @srmist.edu.in email.";
        return;
    }

    localStorage.setItem("studentName", name);
    localStorage.setItem("studentEmail", email);
    localStorage.setItem("studentPassword", password);

    document.getElementById("registerMessage").innerText =
        "Registration successful! Please login.";
}

function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (
        email === localStorage.getItem("studentEmail") &&
        password === localStorage.getItem("studentPassword")
    ) {
        closeLogin();

        document.getElementById("home").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("events").style.display = "block";

        document.getElementById("studentWelcome").innerText =
            "Hello, " + localStorage.getItem("studentName");

    } else {
        document.getElementById("loginMessage").innerText =
            "Invalid email or password. Please register first.";
    }
}

function googleLogin() {
    alert("Google login will be connected in the next stage.");
}

function registerEvent(eventName) {
    let events = JSON.parse(localStorage.getItem("myEvents")) || [];

    if (events.includes(eventName)) {
        alert("You have already registered for this event!");
        return;
    }

    events.push(eventName);
    localStorage.setItem("myEvents", JSON.stringify(events));

    alert("Successfully registered for " + eventName);
    displayEvents();
}

function displayEvents() {
    let events = JSON.parse(localStorage.getItem("myEvents")) || [];
    let list = document.getElementById("myEvents");

    list.innerHTML = "";

    events.forEach(function(event) {
        let item = document.createElement("li");
        item.innerText = event;
        list.appendChild(item);
    });
}

function logout() {
    document.getElementById("events").style.display = "none";
    document.getElementById("home").style.display = "block";
    document.getElementById("about").style.display = "block";

    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value = "";
}