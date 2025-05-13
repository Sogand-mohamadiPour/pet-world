// load page
let change_b = false;
// ------ change theme
function change_theme() {
    if (change_b == false) {
        document.getElementById("moons").src = "../assets/pic/sun.png"; // moon desktop
        document.getElementById("moon").src = "../assets/pic/sun.png"; // moon mobile
        document.getElementById("inpt").style.backgroundColor = '#cccccc'; // search bar
        document.getElementById("btn").style.backgroundColor = '#cccccc'; // search bar btn
        document.getElementById("inpt").style.color = "white"; // search bar font
        document.querySelector("#offcanvasNavbar").style.backgroundColor = "#d69ade"; // mobile menu bg color
        document.querySelector("body").style.backgroundColor = "#BBBCB6"; // body bg
        document.querySelector(".nv").style.color = "black"; // pet word color
        document.querySelectorAll(".icons i")[0].style.color = "black"; // icons color
        document.querySelectorAll(".icons i")[1].style.color = "black"; // icons color
        document.querySelectorAll(".pet a")[1].style.setProperty("color", "black", "important"); // pet world color
        change_b = true;
    }
    else {
        document.getElementById("moons").src = "../assets/pic/moon_fill.png"; //moon desktop
        document.getElementById("moon").src = "../assets/pic/moon_fill.png"; //moon desktop
        document.getElementById("inpt").style.backgroundColor = 'white'; //search bar
        document.getElementById("btn").style.backgroundColor = '#F2EFE7'; //search bar btn
        document.getElementById("inpt").style.color = "black"; // search bar font
        document.querySelector("#offcanvasNavbar").style.backgroundColor = "white"; // mobile menu bg color
        document.querySelector("body").style.backgroundColor = "white"; //body bg
        document.querySelector(".nv").style.color = "white"; // pet word color
        document.querySelectorAll(".icons i")[0].style.color = "white"; // icons color
        document.querySelectorAll(".icons i")[1].style.color = "white"; // icons color
        document.querySelectorAll(".pet a")[1].style.setProperty("color", "white", "important"); // pet world color
        change_b = false;
    }
}
// --------------------------------------------------------------------------------------------
// -----------chat box
function closeChatBox() {
    document.getElementById("chatBox").classList.add("d-none");
}

window.addEventListener("load", () => {
    setTimeout(() => {
        const chatBox = document.getElementById("chatBox");
        const chatIcon = document.getElementById("chatIcon");

        if (window.innerWidth <= 576) {
            chatIcon.classList.remove("d-none");
        }
        else {
            chatBox.classList.remove("d-none");

            // close after 15 sec
            setTimeout(() => {
                chatBox.classList.add("d-none");
            }, 15000);
        }
    }, 5000); // show 5 sec after load
});
// timer

let doctors = 115;
let costumer = 1000;
let shipping = 1000;
let surgury = 500;
let d = c = sh = s = 0;

const counterdoc = () => {
    if (d < doctors) {
        d = d + 1;
        document.getElementById("doctors").innerHTML = d;
    }
    else {
        document.getElementById("doctors").innerHTML.doctors;
        clearInterval(first);
    }
}

const countercos = () => {
    if (c < costumer) {
        c = c + 1;
        document.getElementById("costumers").innerHTML = c;
    }
    else {
        document.getElementById("costumers").innerHTML.costumer;
        clearInterval(second);
    }
}

const countershi = () => {
    if (sh < shipping) {
        sh = sh + 1;
        document.getElementById("shipping").innerHTML = sh;
    }
    else {
        document.getElementById("shipping").innerHTML.shipping;
        clearInterval(third);
    }
}

const countersur = () => {
    if (s < surgury) {
        s = s + 1;
        document.getElementById("surgury").innerHTML = s;
    }
    else {
        document.getElementById("surgury").innerHTML.surgury;
        clearInterval(fourth);
    }
}



let first = setInterval(counterdoc, 35);
let second = setInterval(countercos, 0.01);
let third = setInterval(countershi, 0.00000001);
let fourth = setInterval(countersur, 8);
// end timer-------------------------------------------------------
// vet chat--------------------------------------------------------
const pet_options = document.querySelectorAll('.pet-option');

pet_options.forEach(option => {
    option.addEventListener('click', () => {
        pet_options.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
    });
});

