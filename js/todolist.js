

const mainToDoElem = document.querySelector(".display-item");
const input = document.getElementById("input");



const getDataFromStorage = () => {
   return JSON.parse(localStorage.getItem("products")); 
}; 

let localoutput = getDataFromStorage() || [];

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
};

const addToDoList = (e) => {   
    e.preventDefault();
    // Prevent adding empty items
  const TD =() =>{ if (input.value.trim() === "") {
        alert("Please enter a task.");
        return;
    };
};


    localoutput = [...new Set(localoutput)];
    localoutput.push(input.value);
    localStorage.setItem("products", JSON.stringify(localoutput));

    console.log(localoutput);

    // Create the new to-do item
    addToDoDynamicElem(TD);
    // Append the new element to the main to-do list
    mainToDoElem.append(divElement);

    // Clear the input field
    input.value = "";

    // Add delete functionality
    const deleteBtn = divElement.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", () => {
        divElement.remove();
    });
};


const displayToDoList = () => {
    console.log(localoutput);

    localoutput.forEach((curElem) => {
        addToDoDynamicElem(curElem);
    });

};

displayToDoList();

document.querySelector("#addBtn").addEventListener("click", (e) => {
    addToDoList(e);
});
