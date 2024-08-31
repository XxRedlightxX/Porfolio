var icon = document.getElementById("icone");

icon.onclick = function() {
    document.body.classList.toggle("theme-noir")
    if(document.body.classList.contains("theme-noir")) {
        icone.src = "images/sun.png";
    } else  {
        icone.src = "images/moon.png";
    }
}