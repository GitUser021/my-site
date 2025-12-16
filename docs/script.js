console.log("Script loaded successfully.");

// --- Task A: Change Theme (Dark Mode / Light Mode) ---
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
    // Toggle the .dark-mode class on the body element
    document.body.classList.toggle("dark-mode");
    
    // Optional: Change button text based on mode
    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Switch to Light Mode";
    } else {
        themeBtn.textContent = "Switch to Dark Mode";
    }
});

// --- Task B: Edit Job Title Feature ---
const editJobBtn = document.getElementById("editJobBtn");
const jobTitle = document.getElementById("jobTitle");

editJobBtn.addEventListener("click", () => {
    const newTitle = prompt("Enter your new Job Title:", jobTitle.textContent);
    
    // Only update if the user entered text and didn't cancel
    if (newTitle !== null && newTitle.trim() !== "") {
        jobTitle.textContent = newTitle;
    }
});

// --- Task C: Show/Hide Skills Feature ---
const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
const skillsList = document.getElementById("skillsList");

toggleSkillsBtn.addEventListener("click", () => {
    if (skillsList.style.display === "none") {
        skillsList.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills";
    } else {
        skillsList.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
    }
});

// --- Task D: Live Character Counter ---
const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");
const maxChars = 200;

msgBox.addEventListener("keyup", () => {
    const currentLength = msgBox.value.length;
    const charsLeft = maxChars - currentLength;
    counter.textContent = charsLeft;
});

// --- Task E: Form Validation Before Sending ---
function validateForm() {
    const name = document.getElementById("nameField").value;
    const email = document.getElementById("emailField").value;

    if (name.trim() === "" || email.trim() === "") {
        alert("Please fill out both your Name and Email.");
        return false; // Stop form submission
    }
    
    alert("Message sent successfully!");
    return true; // Allow submission
}

// --- Task F: Automatically Display Today’s Date in Footer ---
const dateDisplay = document.getElementById("dateDisplay");
const today = new Date();
// Format the date to be readable (e.g., "Tue Dec 09 2025")
dateDisplay.textContent = "Current Date: " + today.toDateString();


// --- Task G: Extra Interactive Feature (Greeting Based on Time) ---
// This greets the user based on their local time.
const greetingElement = document.getElementById("greeting");
const currentHour = new Date().getHours();
let greetingMessage = "Hello!";

if (currentHour < 12) {
    greetingMessage = "Good Morning!";
} else if (currentHour < 18) {
    greetingMessage = "Good Afternoon!";
} else {
    greetingMessage = "Good Evening!";
}

greetingElement.textContent = greetingMessage;