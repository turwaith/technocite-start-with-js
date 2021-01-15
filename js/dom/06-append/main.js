var input = document.getElementById("test");

input.addEventListener("input", () => {
    console.log(input.value);
})

var newElement = document.createElement("img");
newElement.src = "https://picsum.photos/id/237/200/300";
newElement.style.width = "100px";
newElement.style.height= "150px";

document.body.append(newElement);