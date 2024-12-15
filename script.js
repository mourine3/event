// View all/hide events
function viewAllEvents() {
    const hiddenEvents = document.getElementById("hidden-events");
    const button = document.querySelector(".view-all-btn");
  
    if (hiddenEvents.style.display === "none") {
      hiddenEvents.style.display = "block";
      button.textContent = "Hide Events";
    } else {
      hiddenEvents.style.display = "none";
      button.textContent = "View All Events";
    }
}

// Add new event
function addEvent() {
    const eventsContainer = document.querySelector(".events-container");
    const newEvent = document.createElement("div");
    newEvent.className = "event";
  
    // Prompt user for event details
    const title = prompt("Enter event title:", "New Event");
    const date = prompt("Enter event date:", "January 1, 2024");
    const time = prompt("Enter event time:", "12:00 PM - 2:00 PM");
  
    if (title && date && time) {
      // Add content to the new event
      newEvent.innerHTML = `
        <h3>${title}</h3>
        <p>Date: ${date}</p>
        <p>Time: ${time}</p>
        <button class="delete-event-btn" onclick="deleteEvent(this)">Delete</button>
      `;
  
      // Append the new event to the events container
      eventsContainer.insertBefore(newEvent, document.querySelector(".view-all-btn"));
    } else {
      alert("Event creation canceled.");
    }
}

// Delete event
function deleteEvent(button) {
    const eventItem = button.parentElement;
    eventItem.remove(); // Remove the event item
}


// Zoom background circles on scroll
window.addEventListener("scroll", function() {
    let scrollAmount = window.scrollY;

    // Control the zooming of the circles based on scroll position
    const circles = document.querySelector('.background-circles');
    const zoomLevel = 1 + scrollAmount / 500; // Adjust the zoom intensity here (change 500 for more/less zoom)

    // Apply the zoom effect to both circles
    circles.style.transform = `scale(${zoomLevel})`;
});

