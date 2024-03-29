
// services our partner

const OurPartner = document.querySelector(".OurParner-inner");

OurPartner.addEventListener("wheel", (data) => {
    data.preventDefault();
    OurPartner.scrollLeft += data.deltaY;
    OurPartner.style.scrollBehavior = "smooth";
})