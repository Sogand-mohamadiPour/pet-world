// load page
let change_b = false;
// ------
function change_theme() {
    if (change_b == false) {
        document.getElementById("moons").src = "assets/pic/sun.png";
        document.getElementById("moon").src = "assets/pic/sun.png";
        document.getElementById("inpt").style.backgroundColor='#cccccc';
        document.getElementById("btn").style.backgroundColor='#cccccc';
        document.getElementById("inpt").style.color="white";
        document.querySelector("#offcanvasNavbar").style.backgroundColor="#d69ade";
        document.querySelector("body").style.backgroundColor="#ccc5b9";
        change_b = true;
    }
    else {
        document.getElementById("moons").src = "assets/pic/moon.png";
        document.getElementById("moon").src = "assets/pic/moon.png";
        document.getElementById("inpt").style.backgroundColor='white';
        document.getElementById("btn").style.backgroundColor='#F2EFE7';
        document.getElementById("inpt").style.color="black";
        document.querySelector("#offcanvasNavbar").style.backgroundColor="white";
        document.querySelector("body").style.backgroundColor="white";
        change_b = false;
    }
}