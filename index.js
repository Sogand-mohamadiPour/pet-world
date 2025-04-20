// load page
let change_b = false;
// ------ change theme
function change_theme() {
    if (change_b == false) {
        document.getElementById("moons").src = "assets/pic/sun.png"; // moon desktop
        document.getElementById("moon").src = "assets/pic/sun.png"; // moon mobile
        document.getElementById("inpt").style.backgroundColor='#cccccc'; // search bar
        document.getElementById("btn").style.backgroundColor='#cccccc'; // search bar btn
        document.getElementById("inpt").style.color="white"; // search bar font
        document.querySelector("#offcanvasNavbar").style.backgroundColor="#d69ade"; // mobile menu bg color
        document.querySelector("body").style.backgroundColor="#BBBCB6"; // body bg
        document.querySelector(".nv").style.color="black"; // pet word color
        document.querySelectorAll(".icons")[0].style.color="black"; // icons color
        document.querySelectorAll(".icons")[1].style.color="black"; // icons color
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
        document.querySelector(".nv").style.color="white"; // pet word color
        document.querySelectorAll(".icons")[0].style.color="white"; // icons color
        document.querySelectorAll(".icons")[1].style.color="white"; // icons color
        change_b = false;
    }
}