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
    const backgroundTrees = document.querySelector("#background-trees");
    backgroundTrees.style.transform = `translateY(${scrolled * 0.3}px)`;

    const middleTrees = document.querySelector("#middle-trees");
    middleTrees.style.transform = `translateY(${scrolled * 0.15}px)`;
});
