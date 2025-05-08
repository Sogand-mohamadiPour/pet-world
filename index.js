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
        document.getElementById("moons").src = "assets/pic/moon.png"; // sun desktop
        document.getElementById("moon").src = "assets/pic/moon.png"; // sun mobile
        document.getElementById("inpt").style.backgroundColor='white'; // search bar
        document.getElementById("btn").style.backgroundColor='#F2EFE7';// search bar btn
        document.getElementById("inpt").style.color="black"; // search bar font
        document.querySelector("#offcanvasNavbar").style.backgroundColor="white"; // mobile menu bg color
        document.querySelector("body").style.backgroundColor="white"; // body bg
        document.querySelector(".nv").style.color="white"; // pet word color
        document.querySelectorAll(".icons")[0].style.color="white"; // icons color
        document.querySelectorAll(".icons")[1].style.color="white"; // icons color
        change_b = false;
    }
}

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