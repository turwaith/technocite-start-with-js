var img = document.getElementById("myImg");
var btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    var id = Math.floor((Math.random() * 250) + 1);
    img.src = `https://picsum.photos/id/${id}/200/300`;
    img.alt = "Another alt";
    img.setAttribute("title", "What you want");
});


setInterval(() => {
    var red = Math.floor((Math.random() * 255) + 1),
        green = Math.floor((Math.random() * 255) + 1),
        blue = Math.floor((Math.random() * 255) + 1);

    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}, 2500);