var btn = document.getElementById("myBtn"),
    pointer = document.getElementById("round"),
    output =  document.getElementById("output"),
    i = 0;

btn.addEventListener("click", mClick);

function mClick(e){
    i++;
    console.log(e);
    btn.classList.toggle("red");
    output.textContent = i;

    if(i==10){
        output.textContent = "Vous avez atteint la limite";
        btn.removeEventListener("click", mClick);
    }
}

document.addEventListener("mousemove", (e) => {
    pointer.style.left = e.x+"px";
    pointer.style.top = e.y+"px";
});