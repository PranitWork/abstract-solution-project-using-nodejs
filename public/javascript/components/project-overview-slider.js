
// image slider open

let scrollcontainer = document.querySelector('#project-slide-container');
let backBtn = document.querySelector('.BackBtn');
let nextBtn = document.querySelector('.NextBtn');

scrollcontainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY;
    scrollcontainer.style.scrollBehavior = "smooth"

})


nextBtn.addEventListener('click', () => {
    scrollcontainer.style.scrollBehavior = "smooth"
    scrollcontainer.scrollLeft += 1200;
});

backBtn.addEventListener('click', () => {
    scrollcontainer.style.scrollBehavior = "smooth"
    scrollcontainer.scrollLeft -= 1200;
})

// image slider close

