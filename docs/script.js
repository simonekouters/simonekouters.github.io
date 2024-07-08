function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 20,
            behavior: "smooth",
        });
    }
}

window.addEventListener("scroll", function () {
    const scrolled = window.scrollY;
    const background = document.querySelector(".background-trees");
    background.style.transform = `translateY(${scrolled * 0.2}px)`;
});
