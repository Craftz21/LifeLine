// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // --- Admin Login Handling ---
  const adminLoginForm = document.getElementById("admin-login-form");
  if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default form submission (page reload)
      console.log("Admin login form submitted.");

      const username = document.getElementById("adminUsername").value.trim();
      const password = document.getElementById("adminPassword").value.trim();
      console.log("Username entered:", username);
      console.log("Password entered:", password);

      // Hardcoded credentials: admin / admin123
      if (username === "admin" && password === "admin123") {
        console.log("Credentials correct. Logging in.");
        localStorage.setItem("adminLoggedIn", "true");
        window.location.href = "admin-dashboard.html";
      } else {
        console.log("Invalid credentials.");
        document.getElementById("admin-login-message").innerText = "Invalid credentials.";
      }
    });
  }

  // --- Appointment Form Handling ---
  const appointmentForm = document.getElementById("appointment-form");
  if (appointmentForm) {
    appointmentForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default form submission
      console.log("Appointment form submitted.");

      const name = document.getElementById("patientName").value.trim();
      const email = document.getElementById("patientEmail").value.trim();
      const department = document.getElementById("departmentSelect").value;
      const date = document.getElementById("appointmentDate").value;
      const time = document.getElementById("appointmentTime").value;

      if (name && email && department && date && time) {
        const appointment = {
          id: Date.now(),
          name: name,
          email: email,
          department: department,
          date: date,
          time: time,
          status: "Pending",
        };

        // Retrieve existing appointments from localStorage (if any)
        let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
        appointments.push(appointment);
        localStorage.setItem("appointments", JSON.stringify(appointments));
        console.log("Appointment saved:", appointment);

        document.getElementById("appointment-message").innerText =
          "Appointment request submitted successfully!";
        appointmentForm.reset();
      } else {
        document.getElementById("appointment-message").innerText =
          "Please fill all fields.";
      }
    });
  }


  const signUpForm = document.getElementById("signup-form");

if (signUpForm) {
  signUpForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from reloading the page

    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    if (!email || !password) {
      document.getElementById("signup-message").innerText = "All fields are required.";
      return;
    }

    // Get existing users or set empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    if (users.some(user => user.email === email)) {
      document.getElementById("signup-message").innerText = "User already exists.";
      return;
    }

    // Add new user
    users.push({ email, password });

    // Save updated users array to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("signup-message").innerText = "Signup successful!";
  });
}


  // --- Admin Dashboard Handling ---
  // Check if the appointments table exists on the page.
  const appointmentsTable = document.getElementById("appointments-table");
  if (appointmentsTable) {
    // Verify admin is logged in. If not, redirect.
    if (localStorage.getItem("adminLoggedIn") !== "true") {
      window.location.href = "admin-login.html";
      return;
    }

    // Display stored appointments
    displayAppointments();

    // Setup Admin Logout
    const adminLogoutBtn = document.getElementById("admin-logout");
    if (adminLogoutBtn) {
      adminLogoutBtn.addEventListener("click", function () {
        localStorage.removeItem("adminLoggedIn");
        window.location.href = "admin-login.html";
      });
    }
  }

  // --- Function to Display Appointments in Admin Dashboard ---
  function displayAppointments() {
    const tbody = document.querySelector("#appointments-table tbody");
    tbody.innerHTML = ""; // Clear previous rows
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    console.log("Displaying appointments:", appointments);

    if (appointments.length === 0) {
      tbody.innerHTML = "<tr><td colspan='8'>No appointment requests found.</td></tr>";
      return;
    }

    appointments.forEach(function (app) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${app.name}</td>
        <td>${app.email}</td>
        <td>${app.department}</td>
        <td>${app.date}</td>
        <td>${app.time}</td>
        <td>${app.status}</td>
        <td>
          ${app.status === "Pending" ? `<button onclick="confirmAppointment(${app.id})">Confirm</button>` : "Confirmed"}
          <button onclick="deleteAppointment(${app.id})" style="margin-left:5px;">Delete</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  // Expose confirmAppointment to the global scope so that inline onclick works
  window.confirmAppointment = function (id) {
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments = appointments.map(function (app) {
      if (app.id === id) {
        app.status = "Confirmed";
      }
      return app;
    });
    localStorage.setItem("appointments", JSON.stringify(appointments));
    displayAppointments();
  };

  // --- New: Delete Appointment Function ---
  window.deleteAppointment = function (id) {
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    // Remove the appointment with the matching id
    appointments = appointments.filter(function (app) {
      return app.id !== id;
    });
    localStorage.setItem("appointments", JSON.stringify(appointments));
    console.log("Appointment with id", id, "deleted.");
    displayAppointments();
  };
});

// --- Sign In Form Handling ---

const signInForm = document.getElementById("signin-form");
if (signInForm) {
  signInForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    console.log("Sign in form submitted.");

    const email = document.getElementById("signinEmail").value.trim();
    const password = document.getElementById("signinPassword").value.trim();

    // Retrieve stored users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the entered credentials match any stored user
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      document.getElementById("signin-message").innerText = "Sign in successful!";
      window.location.href = "appointment.html"; // Redirect after login (modify if needed)
    } else {
      document.getElementById("signin-message").innerText = "Invalid email or password.";
    }
  });
}
