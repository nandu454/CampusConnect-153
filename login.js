// LOGIN
document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    let savedEmail = localStorage.getItem("studentEmail");
    let savedPassword = localStorage.getItem("studentPassword");

    if (email === savedEmail && password === savedPassword) {

        localStorage.setItem("studentName",
            localStorage.getItem("studentName"));

        window.location.href = "home.html";

    } else {
        document.getElementById("status").innerText =
            "Invalid email or password. Please create an account first.";
    }

});

// GOOGLE DEMO
function googleLogin() {
    alert("Google login requires Google authentication setup. Please use email login for this demo.");
}