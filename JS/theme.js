
function applyTheme(color, shadowColor, themeName) {
    let buttons = document.getElementsByTagName("button");
    let shadowElements = document.querySelectorAll(".product");
    let nav = document.getElementById("navbar");
    let footer = document.getElementById("footer");
    let right = document.getElementById("toggle-right");
    let left = document.getElementById("toggle-left");
    let toggle = document.getElementById("toggle");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = color; 
    }
    if (nav) nav.style.backgroundColor = color;
    if (footer) footer.style.backgroundColor = color;
    if (right) right.style.backgroundColor = color;
    if (left) left.style.backgroundColor = color;
    if (toggle) toggle.style.backgroundColor = color;
    shadowElements.forEach(element => {
        element.addEventListener("mouseover", () => {
            element.style.boxShadow = `0 0 10px ${shadowColor}`;
        });

        element.addEventListener("mouseout", () => {
            element.style.boxShadow = "none";
        });
    });

    localStorage.setItem("theme", themeName);
}

function getPurple() {
    applyTheme("#c466a4", "#c466a4", "purple");
}

function getMain() {
    applyTheme("#b35e22", "#b35e22", "main");
}

function getBlue() {
    applyTheme("#39c182", "#39c182", "yellow");
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "purple") {
        getPurple();
    } else if (savedTheme === "main") {
        getMain();
    } else if (savedTheme === "yellow") {
        getBlue();
    }
});

