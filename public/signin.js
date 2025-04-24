// Login function
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html"; // Redirect to Home
    } else {
        document.getElementById("error-msg").innerText = "Invalid credentials!";
    }
}

// Logout function
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.reload();
}

// Update navigation bar dynamically (called in index.js)
function updateNav() {
    const isLoggedIn = localStorage.getItem("loggedIn");
    const nav = document.getElementById("nav-links");

    if (nav) {
        if (isLoggedIn) {
            nav.innerHTML += `<li><a href="#" onclick="logout()">Logout</a></li>`;
        } else {
            nav.innerHTML += `<li><a href="signin.html">Sign In</a></li>`;
        }
    }
}
