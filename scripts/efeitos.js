var frontend = document.getElementById("azdest");

setInterval(
    function front(){
    if(frontend.innerText == "FRONT-END") {
        frontend.innerText = "FRONT-END|"
    } else {
        frontend.innerText = "FRONT-END"
    }
    }, 1000);


// Links do menu
var iniciolink = document.getElementById("iniciolink");
var sobrelink = document.getElementById("sobrelink");
var projetoslink = document.getElementById("projetoslink");

iniciolink.addEventListener("click",() => {
    iniciolink.className = "active";
    sobrelink.className = "";
    projetoslink.className = "";
})

sobrelink.addEventListener("click",() => {
    iniciolink.className = "";
    sobrelink.className = "active";
    projetoslink.className = "";
})

projetoslink.addEventListener("click",() => {
    iniciolink.className = "";
    sobrelink.className = "";
    projetoslink.className = "active";
})