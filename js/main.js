

let myFavNum = 10;

console.log(myFavNum);

console.log(typeof String(myFavNum));


// function greet() {

//     let guest = document.querySelector('#guestname').value;
//     const message = `Welcome  ${guest} to the world of Samman Sangha`;
//     return (
//         document.querySelector('.greeting').innerText = message
//     )
// }




//<<<<<<<<<<<<<<<<< CHAT GPT CODE >>>>>>>>>>>>>>>>>>>>>>>>>>>
const greet = () => {
    const guest = document.querySelector('#guestname').value;
    const message = `Welcome ${guest} to the world of Samman Sangha`;
    document.querySelector('.greeting').innerText = message;
};




function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            return result;
        case '-':
            result = num1 - num2;
            return result;
        case '*':
            result = num1 * num2;
            return result;
        case '/':
            result = num1 / num2;
            return result;
        default:
            return "Invalid operator"

    }

};
console.log(calculator (5, 2, "/"));
