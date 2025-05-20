// load page
let change_b = false;
let arr_bass = [];
let count_product_bas = 0;
let arr_favs = [];
let fav_arr = [];

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

// tab js --------------------------------------------------------
function showTab(tabId) {
    const triggerEl = document.querySelector(`[data-bs-target="#${tabId}"]`);
    const tab = new bootstrap.Tab(triggerEl);
    tab.show();
}
// modal basket---------------------------------------------------

function addToBasket(element) {
    let cardBody = element.closest('.card-body');
    let name = cardBody.querySelector('.card-title').innerText;
    let img = cardBody.parentElement.querySelector('img').src;

    let existing = arr_bass.find(item => item.name === name);

    if (existing) {
        existing.count++;
    } else {
        arr_bass.push({
            name: name,
            imgsrc: img,
            count: 1
        });
    }

    count_product_bas++;
    document.getElementById("counter").style.opacity = "1";
    document.getElementById("counter").innerText = count_product_bas;

    showTab('tab1'); // show basket tab
    show_bas(); // render basket items
}

// Shows basket items inside tab1 content
function show_bas() {
    const list = document.getElementById('listp');
    list.innerHTML = ''; // Clear previous content

    if (arr_bass.length === 0) {
        document.getElementById("emptybas").style.display = "block";
    } else {
        document.getElementById("emptybas").style.display = "none";

        for (let i = 0; i < arr_bass.length; i++) {
            let item = arr_bass[i];
            let iconHtml = "";

            if (item.count === 1) {
                // Trash icon when count = 1
                iconHtml = "<i class='fa fa-trash-o' onclick='removeItem(" + i + ")' style='cursor:pointer;'></i>";
            } else {
                // Minus icon when count > 1
                iconHtml = "<i class='fa fa-minus' onclick='decrement(" + i + ")' style='cursor:pointer;'></i>";
            }

            let row = document.createElement('div');
            row.classList.add("row_product_basket");
            row.innerHTML =
                "<img src='" + item.imgsrc + "'>" +
                "<span>" + item.name + "</span>" +
                "<i class='fa fa-plus' onclick='increment(" + i + ")' style='cursor:pointer;'></i>" +
                "<span class='quantity'>" + item.count + "</span>" +
                iconHtml;

            list.appendChild(row);
        }
    }
}


function removeItem(index) {
    count_product_bas -= arr_bass[index].count; // Decrease total count by that item's count
    arr_bass.splice(index, 1); // Remove item from array
    updateCounter();
    show_bas();
}

function decrement(index) {
    if (arr_bass[index].count > 1) {
        arr_bass[index].count--;
        count_product_bas--;
        updateCounter();
        show_bas();
    }
}

function updateCounter() {
    const counterElem = document.getElementById("counter");
    if (count_product_bas <= 0) {
        counterElem.style.opacity = "0";
        counterElem.innerText = "";
    } else {
        counterElem.style.opacity = "1";
        counterElem.innerText = count_product_bas;
    }
}


function increment(index) {
    arr_bass[index].count++;
    count_product_bas++;  // Increase total count
    document.getElementById("counter").innerText = count_product_bas;  // Update badge text
    show_bas();
}


// ---------- fav pane js


function toggleFav(element) {
    let icon = element.querySelector("i");
    let card = element.closest(".card");
    let name = card.querySelector(".card-title").innerText;
    let img = card.querySelector("img").src;

    let index = fav_arr.findIndex(item => item.name === name);

    if (index === -1) {
        // Add to favorites
        fav_arr.push({ name: name, imgsrc: img });
        icon.classList.remove("fa-heart-o");
        icon.classList.add("fa-heart");
        icon.style.color = "red";
    } else {
        // Remove from favorites
        fav_arr.splice(index, 1);
        icon.classList.remove("fa-heart");
        icon.classList.add("fa-heart-o");
        icon.style.color = "";
    }

    showFav();
}

function showFav() {
    let favList = document.getElementById("favList");
    favList.innerHTML = '';

    if (fav_arr.length === 0) {
        document.getElementById("emptyFav").style.display = "block";
    } else {
        document.getElementById("emptyFav").style.display = "none";

        fav_arr.forEach((item, i) => {
            let row = document.createElement("div");
            row.classList.add("row_product_basket");
            row.innerHTML = `
                <img src="${item.imgsrc}">
                <span>${item.name}</span>
                <i class="fa fa-heart" style="color:red; cursor:pointer;" onclick="removeFav(${i})"></i>
            `;
            favList.appendChild(row);
        });
    }
}

function removeFav(index) {
    const removedItem = fav_arr[index];
    fav_arr.splice(index, 1);
    showFav();

    // Find the corresponding heart icon in the cards and reset it
    const allHearts = document.querySelectorAll('.card .fa');
    allHearts.forEach(icon => {
        const card = icon.closest('.card');
        const name = card.querySelector('.card-title').innerText;

        if (name === removedItem.name && icon.classList.contains('fa-heart')) {
            icon.classList.remove('fa-heart');
            icon.classList.add('fa-heart-o');
            icon.style.color = "";
        }
    });
}







