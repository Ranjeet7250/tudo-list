const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task
function AddTask() {
    if (inputbox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputbox.value;
        
        // Create a span element with a delete symbol
        let span = document.createElement("span");
        span.textContent = "\u00d7"; // Unicode character for multiplication (×)
        span.className = "close"; // Add class for styling
        li.appendChild(span);

        // Append the new list item to the list container
        listContainer.appendChild(li);

        // Save the updated list to localStorage
        saveData();
    }
    inputbox.value = ""; // Clear the input box
}

// Event listener for clicks on list items and delete buttons
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Function to save the list data to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to load the list data from localStorage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}

// Show tasks on page load
showTask();
