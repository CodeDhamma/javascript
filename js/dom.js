

let findElementByID = document.getElementById("head");




let inputElm = document.getElementById("input");
let clickBtn = document.querySelector(".btn");
let elemList = document.querySelector("#prod");




const addTodo = () => {
    let pElem = document.createElement("p");
    pElem.innerText = inputElm.value;
    elemList.append(pElem);
}
clickBtn.addEventListener("click", () => {
    addTodo();
});

elemList.addEventListener("click", (event) => { 
    console.log(event.target);
    let currentElm = event.target;
    currentElm.remove();

});


let myBtn = document.getElementById("myBtn");
let recDiv = document.querySelector(".rectangle");

const handleMouseEvents = () => { 
    console.log("click");
    recDiv.style.backgroundColor = "crimson";
};

myBtn.addEventListener("click", handleMouseEvents);

// 2. Event by doubleClick//

const handleMouseEvents2 = () => { 
  console.log("dblclick");
    recDiv.classList.add("addTransition");
};

myBtn.addEventListener("dblclick", handleMouseEvents2);