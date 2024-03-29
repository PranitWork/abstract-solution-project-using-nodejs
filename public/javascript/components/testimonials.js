// testimonial slider 

let testimonialscroll = document.querySelector('.slider-div-testimonials');
let leftarrow = document.querySelector("#BackBtn");
let rightarrow = document.querySelector("#NextBtn");

testimonialscroll.addEventListener("wheel", (data) => {
    data.preventDefault();
    testimonialscroll.scrollLeft += data.deltaY;
    testimonialscroll.style.scrollBehavior = "smooth"

})

leftarrow.addEventListener("click", () => {
    testimonialscroll.style.scrollBehavior = "smooth"
    testimonialscroll.scrollLeft -= 600;
})

rightarrow.addEventListener("click", () => {
    testimonialscroll.style.scrollBehavior = "smooth";
    testimonialscroll.scrollLeft += 600;
})

// testimonial slider close