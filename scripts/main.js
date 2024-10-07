/*const myHeading = document.querySelector("h3");
myHeading.textContent = "Hello world!";

document.querySelector("html").addEventListener("click", () => {
    alert("Ouch! Stop poking me!");
});
*/
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/0x0.webp") {
    myImage.setAttribute("src", "images/google-search.webp");
  } else {
    myImage.setAttribute("src", "images/0x0.webp");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h3");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName){
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

  myButton.onclick = () => {
    setUserName();
};
  