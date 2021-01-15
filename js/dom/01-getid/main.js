var content =  document.getElementById("toto");
var button = document.getElementById("click");

content.innerText = "Hello world!";
var isWorldInside = content.textContent.includes("world");

console.log(content);

if(isWorldInside)
{
    button.innerText = "Clique sur moi, mon pote";
}

button.addEventListener("click", () => {
    if(content.textContent.includes("changer"))
        content.textContent = "Clique sur moi, mon pote";
    else
        content.textContent = "Vous venez de changer le texte";
})