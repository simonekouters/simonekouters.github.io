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

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
