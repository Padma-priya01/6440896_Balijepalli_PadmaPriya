// Ex 1: JavaScript Basics & Setup
// main.js
console.log("Welcome to the Community Portal");
window.onload = function () {
    alert("Page fully loaded!");
};
// Ex 2: Syntax, Data Types, and Operators
const eventName = "Community Clean-up";
const eventDate = "2025-06-10";
let availableSeats = 30;

console.log(`Event: ${eventName}, Date: ${eventDate}, Seats: ${availableSeats}`);

availableSeats--; // one seat booked
console.log(`Seats after registration: ${availableSeats}`);
// Ex 3: Conditionals, Loops, and Error Handling
let events = [
    { name: "Music Fest", date: "2025-07-10", seats: 20 },
    { name: "Yoga Class", date: "2024-12-01", seats: 0 },
];

events.forEach(event => {
    if (new Date(event.date) > new Date() && event.seats > 0) {
        console.log(`Upcoming: ${event.name}`);
    } else {
        console.log(`Skipping: ${event.name}`);
    }
});

try {
    let selectedEvent = events[0];
    if (selectedEvent.seats <= 0) throw "No seats available!";
    selectedEvent.seats--;
    console.log("User registered successfully.");
} catch (error) {
    console.error("Registration failed:", error);
}
// Ex 4: Functions, Scope, Closures, Higher-Order Functions
function addEvent(name, category) {
    return { name, category };
}

function registerUser(event) {
    event.seats = (event.seats || 0) - 1;
    console.log(`Registered for ${event.name}`);
}

function filterEventsByCategory(events, category) {
    return events.filter(e => e.category === category);
}

function registrationTracker(category) {
    let count = 0;
    return function () {
        count++;
        console.log(`${category} registrations: ${count}`);
    };
}

const musicRegister = registrationTracker("Music");
musicRegister();
musicRegister();
// Ex 5: Objects and Prototypes
function Event(name, date, seats) {
    this.name = name;
    this.date = date;
    this.seats = seats;
}

Event.prototype.checkAvailability = function () {
    return this.seats > 0;
};

let eventObj = new Event("Coding Workshop", "2025-08-20", 15);
console.log(Object.entries(eventObj));
console.log("Available:", eventObj.checkAvailability());
// Ex 6: Arrays and Methods
let allEvents = [
    { name: "Baking Workshop", category: "Cooking" },
    { name: "Jazz Night", category: "Music" }
];

allEvents.push({ name: "Rock Show", category: "Music" });

let musicEvents = allEvents.filter(e => e.category === "Music");

let displayCards = allEvents.map(e => `Event: ${e.name}`);
console.log(displayCards);
// Ex 7: DOM Manipulation
let container = document.querySelector("#eventContainer");

let card = document.createElement("div");
card.textContent = "New Community Event!";
container.appendChild(card);

function updateUI(message) {
    document.querySelector("#status").textContent = message;
}
// Ex 8: Event Handling
document.querySelector("#registerBtn").onclick = function () {
    alert("You registered!");
};

document.querySelector("#categoryFilter").onchange = function (e) {
    console.log("Filter by:", e.target.value);
};

document.querySelector("#searchInput").onkeydown = function (e) {
    if (e.key === "Enter") console.log("Search:", e.target.value);
};
// Ex 9: Async JS, Promises, Async/Await
fetch("https://mockapi.com/events")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

async function fetchEvents() {
    try {
        document.querySelector("#loader").style.display = "block";
        let res = await fetch("https://mockapi.com/events");
        let data = await res.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    } finally {
        document.querySelector("#loader").style.display = "none";
    }
}
// Ex 10: Modern JavaScript Features
function greet(name = "Guest") {
    console.log(`Hello, ${name}`);
}

let event = { name: "Dance Night", date: "2025-06-15" };
let { name, date } = event;

let oldList = ["A", "B"];
let newList = [...oldList, "C"];
// Ex 11: Working with Forms
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = e.target.elements["name"].value;
    let email = e.target.elements["email"].value;

    if (!name || !email) {
        document.querySelector("#error").textContent = "All fields are required!";
    } else {
        console.log("Registered:", name, email);
    }
});
// Ex 12: AJAX & Fetch API
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let userData = {
        name: e.target.elements["name"].value,
        email: e.target.elements["email"].value,
    };

    fetch("https://mockapi.com/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    })
    .then(res => res.json())
    .then(data => {
        setTimeout(() => {
            alert("Registration successful!");
        }, 2000);
    })
    .catch(() => alert("Registration failed"));
});
// Ex 13: Debugging and Testing
console.log("Form submitted");

fetch("https://mockapi.com/register", {
    method: "POST",
    body: JSON.stringify({ name: "Test" }),
})
.then(res => res.json())
.then(data => {
    console.log("Success", data);
})
.catch(error => {
    console.error("Error during fetch:", error);
});
// Ex 14: jQuery and JS Frameworks
// Include jQuery in HTML first
$('#registerBtn').click(function () {
    alert("jQuery: Registered!");
});

$('.eventCard').fadeIn();
$('.eventCard').fadeOut();

// Benefit of using frameworks:
// React or Vue offers reusable components and efficient DOM updates.
