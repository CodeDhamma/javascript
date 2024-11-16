const studentBioData = {
    firstName : "Vinod",
    lastName: "Thapa",
    age: 18,
    gender: "Male",
    grade :  "A",
    course: ['Math', 'Physics', 'Chemistry', 'English'],
    address: {
        street: "123 High Street",
        city: "SunnyVille",
        state : "New York",
        zip:    "523615"
    }

};

let showData = document.querySelector(".showdata");
console.log(showData);
const addToDoList = () =>{
    localStorage.setItem('objectData', JSON.stringify(studentBioData));
};

const getToDoList = () =>{
    const retriveStudentData = JSON.parse(localStorage.getItem ('objectData'));
    console.log (retriveStudentData);
};

const removeToDoList = () =>{
    const removeData = localStorage.removeItem('objectData');
};




document.getElementById("addBtn").addEventListener('click', ()=>{
            addToDoList();
});
document.getElementById("getBtn").addEventListener('click', ()=>{
        getToDoList();
});
document.getElementById("removeBtn").addEventListener('click', ()=>{
    removeToDoList();

});