// slide up open


const toTop = document.querySelector(".to-top");
const whatsapp = document.querySelector(".whatsapp-outer")

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        toTop.classList.add("active");
        whatsapp.classList.add("active");
    } else {
        toTop.classList.remove("active");
        whatsapp.classList.remove("active");
    }
})

// slide up close