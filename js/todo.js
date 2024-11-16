const mainToDoElem = document.querySelector(".display-item");
const input = document.getElementById("input");

// Get data from local storage
const getDataFromStorage = () => {
    return JSON.parse(localStorage.getItem("products")) || [];
};

let localoutput = getDataFromStorage();

// Function to create and append a to-do item
const addToDoDynamicElem = (curElem) => {
    const divElement = document.createElement("div");
    divElement.classList.add("output");
    divElement.innerHTML = `
        <ul>
            <li>${curElem}</li>  
            <button class="deleteBtn">Delete</button>
        </ul>
    `;

    // Append the new element to the main to-do list
    mainToDoElem.append(divElement);

    // Add delete functionality
    const deleteBtn = divElement.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", () => {
        divElement.remove();
        // Update local storage
        localoutput = localoutput.filter(item => item !== curElem);
        localStorage.setItem("products", JSON.stringify(localoutput));
    });
};

// Function to add a new to-do item
const addToDoList = (e) => {
    e.preventDefault();

    // Prevent adding empty items
    if (input.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    // Avoid duplicates
    if (!localoutput.includes(input.value.trim())) {
        localoutput.push(input.value.trim());
        localStorage.setItem("products", JSON.stringify(localoutput));
        addToDoDynamicElem(input.value.trim());
    } else {
        alert("This task already exists.");
    }

    // Clear the input field
    input.value = "";
};

// Display all to-do items from local storage
const displayToDoList = () => {
    localoutput.forEach((curElem) => {
        addToDoDynamicElem(curElem);
    });
};

displayToDoList();

// Event listener for the "Add" button
document.querySelector("#addBtn").addEventListener("click", (e) => {
    addToDoList(e);
});
