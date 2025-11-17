const menuBtn = document.getElementById("menuBtn");
const navCard = document.getElementById("navCard");
const svg = document.querySelector("#rotatesvg")

// Toggle on click
menuBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent closing when clicking button
    navCard.classList.toggle("show");

    // toggle rotation
    if (svg.style.rotate === "90deg") {
        svg.style.rotate = "0deg";
        svg.style.stroke = "#ababab";

    } else {
        svg.style.rotate = "90deg";
        svg.style.stroke = "white";
    }
});

// Close when clicking outside
document.addEventListener("click", (e) => {
    if (!navCard.contains(e.target) && !menuBtn.contains(e.target)) {
        navCard.classList.remove("show");
        svg.style.rotate = '0deg';
    }
});



// active links
const current = window.location.pathname;

document.querySelectorAll("nav a").forEach(link => {
    if (link.pathname === current) {
        link.classList.add("active-link");
    }
});


