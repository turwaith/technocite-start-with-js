var text = document.getElementById("myText");
var test = document.getElementById("test");

setInterval(() => {
    var red = Math.floor(Math.random() * 255),
        green = Math.floor(Math.random() * 255),
        blue = Math.floor(Math.random() * 255);
    text.style.backgroundColor = `rgb(${red},${green},${blue})`
}, 2500);

setInterval(() => {
    if(document.body.classList.contains("orange")){
        document.body.classList.add("green");
        document.body.classList.remove("orange");
    }
    else{
        document.body.classList.add("orange");
        document.body.classList.remove("green");
    }
}, 2500);

test.textContent = "My beautiful text with CSS changed inline by JS";
test.setAttribute("style", "color: white; background-color: black;");