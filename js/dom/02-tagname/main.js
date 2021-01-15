var p =  document.getElementsByTagName("p");

for(var i = 0; i < p.length; i++){
    p[i].innerText = `Nicolas est un bot n° ${i}`;
}

var testClass = document.getElementsByClassName("test");

console.log(`Il y a ${testClass.length} élèments avec la classe "test"`);