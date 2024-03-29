
const rocketeffect = document.querySelector(".rocket-effect");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        rocketeffect.classList.add("rocket-effect-click");
    }
})

