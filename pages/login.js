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
        document.querySelectorAll(".icons")[0].style.color = "black"; // icons color
        document.querySelectorAll(".icons")[1].style.color = "black"; // icons color
        change_b = true;
    }
    else {
        document.getElementById("moons").src = "../assets/pic/moon.png"; //moon desktop
        document.getElementById("moon").src = "../assets/pic/moon.png"; // moon mobile
        document.getElementById("inpt").style.backgroundColor = 'white'; //search bar
        document.getElementById("btn").style.backgroundColor = '#F2EFE7'; //search bar btn
        document.getElementById("inpt").style.color = "black"; // search bar font
        document.querySelector("#offcanvasNavbar").style.backgroundColor = "white"; // mobile menu bg color
        document.querySelector("body").style.backgroundColor = "white"; //body bg
        document.querySelector(".nv").style.color = "white"; // pet word color
        document.querySelectorAll(".icons")[0].style.color = "white"; // icons color
        document.querySelectorAll(".icons")[1].style.color = "white"; // icons color
        change_b = false;
    }
}
// --------------------------------------------------------------------------------------------

// name input just letters are allowed
function check_name(e) {
    let ch = e.keyCode;
    if ((ch < 65 || ch > 90) && ch != 8) {
        e.preventDefault();
    }
}

// only numbers up to 11 lengths are allowed
function check_num(e) {
    if (e.target.value.length >= 11 && e.keyCode !== 8) {
        e.preventDefault();
        return;
    }

    let ch = e.keyCode;
    if ((ch < 96 || ch > 105) && (ch < 48 || ch > 57) && (ch != 8))
        e.preventDefault();
}

// check pass and only space is not allowed
function check_pass1(e) {
    let ch = e.keyCode;
    if (ch == 32)
        e.preventDefault();
}

// check pass and repass
function check_pass(e) {
    let pass = document.getElementById("txt_pass").value;
    let repass = document.getElementById("txt_repass").value;

    if (pass !== repass) {
        document.getElementById("check_p").style.display = "block";
    } else {
        document.getElementById("check_p").style.display = "none";
    }
}

// btn check
function result(e) {
    let na = document.getElementById("txt_name").value;
    let fa = document.getElementById("txt_lname").value;
    let mob = document.getElementById("txt_num").value;
    let pass = document.getElementById("txt_pass").value;
    let repass = document.getElementById("txt_repass").value;

    let bn = bf = bm = bp = false;

    if (na.length < 2) {
        document.querySelectorAll(".input")[0].style.borderColor = "red";
    }

    else {
        document.querySelectorAll(".input")[0].style.borderColor = "#222";
        bn = true;
    }
    if (fa.length < 2) {
        document.querySelectorAll(".input")[1].style.borderColor = "red";
    }
    else {
        document.querySelectorAll(".input")[1].style.borderColor = "#222";
        bf = true;
    }
    if (mob.length != 11) {
        document.querySelectorAll(".input")[2].style.borderColor = "red";
    }
    else {
        document.querySelectorAll(".input")[2].style.borderColor = "#222";
        bm = true;
    }
    if (pass.length < 8 || pass.length > 32) {
        document.querySelectorAll(".input")[3].style.borderColor = "red";
    }
    else {
        document.querySelectorAll(".input")[3].style.borderColor = "#222";
    }

    if (repass.length < 8 || repass.length > 32 || pass !== repass) {
        document.querySelectorAll(".input")[4].style.borderColor = "red";
        document.getElementById("check_p").style.display = "block"; // show warning
        bp = false;
    } else {
        document.querySelectorAll(".input")[2].style.borderColor = "#222";
        document.getElementById("check_p").style.display = "none"; // hide warning
        bp = true;
    }

    if (bn && bf && bm && bp) {
        let obj;
        obj = { name: na, family: fa, mobile: mob, password: pass, };
        console.log(obj);
    }
}


function togglePassword() {
    let pass = document.getElementById("txt_pass");
    let eyeIcon = document.getElementById("eye-icon-pass");
    let eyeSlash = document.getElementById("eye-slash-pass");

    if (pass.type === "password") {
        pass.type = "text";
        eyeSlash.style.visibility = "visible";// Show the eye-slash
        eyeIcon.style.visibility = "hidden";// Hide the eye
    } else {
        pass.type = "password";
        eyeSlash.style.visibility = "hidden";// Hide the eye-slash
        eyeIcon.style.visibility = "visible";// Show the eye
    }
}

function togglePassword1() {
    let repass = document.getElementById("txt_repass");
    let eyeIcon = document.getElementById("eye-icon-repass");
    let eyeSlash = document.getElementById("eye-slash-repass");

    if (repass.type === "password") {
        repass.type = "text";
        eyeSlash.style.visibility = "visible";// Show the eye-slash
        eyeIcon.style.visibility = "hidden";// Hide the eye
    } else {
        repass.type = "password";
        eyeSlash.style.visibility = "hidden";// Hide the eye-slash
        eyeIcon.style.visibility = "visible";// Show the eye
    }
}

function check_pass2() {
    const pass = document.getElementById("txt_pass").value;
    const strengthBar = document.getElementById("strength-bar");
    const strengthText = document.getElementById("strength-text");

    let strength = 0;

    if (pass.length >= 6) strength++;
    if (/[a-z]/.test(pass)) strength++;
    if (/[A-Z]/.test(pass)) strength++;
    if (/\d/.test(pass)) strength++;
    if (/[^A-Za-z0-9]/.test(pass)) strength++;

    if (strength <= 2) {
        strengthBar.style.width = "30%";
        strengthBar.style.backgroundColor = "red";
        strengthText.textContent = "ضعیف";
    } else if (strength === 3 || strength === 4) {
        strengthBar.style.width = "60%";
        strengthBar.style.backgroundColor = "orange";
        strengthText.textContent = "متوسط";
    } else {
        strengthBar.style.width = "100%";
        strengthBar.style.backgroundColor = "green";
        strengthText.textContent = "قوی";
    }
}


