let loader = document.querySelector(".preloader");

document.body.classList.add("noscroll");

window.addEventListener("load", function () {
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 4000);

    setTimeout(() => {
        document.body.classList.add("loaded-remove");
        document.body.classList.remove("noscroll")
    }, 4600);

    setTimeout(() => {
        if (loader) loader.remove();
    }, 4700);
});