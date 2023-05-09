const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImg = document.createElement("img");
newImg.setAttribute ("src", "https://placeimg.com/200/200/animals")
newImg.setAttribute ("alt", "Animal Image")
document.body.appendChild(newImg);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
const newHeading = document.createElement("h2");
const newP = document.createElement("p");
newHeading.innerText = "CSE 121b"
newSection.appendChild(newHeading);
newSection.appendChild(newP);
newP.innerText = "Welcome to Javascript Language"
document.body.appendChild(newSection);


