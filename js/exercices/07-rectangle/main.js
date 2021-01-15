var send =  document.getElementById("submit"),
    reset =  document.getElementById("reset");

send.addEventListener("click", () => {
    var width = document.getElementById("largeur").value,
        height = document.getElementById("longueur").value,
        color = document.getElementById("couleur").value,
        box = document.getElementById("box");

    box.setAttribute("style",
    `width:${width}px;height:${height}px;background-color:${color}`);
});

reset.addEventListener("click", () => {
    document.getElementById("largeur").value = "";
    document.getElementById("longueur").value = "" ;
    box.removeAttribute("style");
});

