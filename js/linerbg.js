let btn1 = document.getElementById('mybtn');
let btn2 = document.getElementById('mybtn2');

let copycode = document.querySelector('.codegen');

let rgb1 = "#000";
let rgb2 = "#fff";

const hexaValues = () => {
    let myHexaValue = "0123456789abcdef";
    let colors = "#";
    for (let i = 0; i < 6; i++) {
        colors = colors + myHexaValue[Math.floor(Math.random() * 16)];
    }
    return colors;
};


const handleBtn1Click = () => {
    rgb1 = hexaValues();
    btn1.innerText = rgb1;
    btn1.style.backgroundColor = rgb1;

    console.log(rgb1);

    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1} , ${rgb2}  )` ;
    copycode.innerHTML = ` background-image : linear-gradient(to right, ${rgb1} , ${rgb2}  )`;
}

btn1.addEventListener('click', handleBtn1Click);

const handleBtn2Click = () => {
    rgb2 = hexaValues();
    btn2.innerText = rgb2;
    btn2.style.backgroundColor = rgb2;

    console.log(rgb2);

    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1} , ${rgb2} )`;
    copycode.innerHTML = ` background-image : linear-gradient(to right, ${rgb1} , ${rgb2})`;
}

btn2.addEventListener('click', handleBtn2Click);

copycode.addEventListener("click", () => {
    navigator.clipboard.writeText(copycode.innerText);
    onclick= alert('Code has been copied')
});