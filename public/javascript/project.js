
// < !--project overview demo open-- >

function handleButtonClick(btn, content) {
    btn.addEventListener("click", () => {
        const allContent = [websiteContent, designContent, uiuxContent, otherContent];

        allContent.forEach(item => {
            item.style.opacity = "0";
            item.style.display = "none";
        });
        content.style.display = "block";
        setTimeout(() => {
            content.style.opacity = "1";
        }, 70);
    });
}


var websiteBtn = document.querySelector(".Website-btn");
var websiteContent = document.querySelector("#Project-website-btn");
handleButtonClick(websiteBtn, websiteContent)

var desginBbtn = document.querySelector(".design-btn");
var designContent = document.querySelector("#Project-design-btn");
handleButtonClick(desginBbtn, designContent)

var uiuxBtn = document.querySelector(".uiux-btn");
var uiuxContent = document.querySelector("#Project-uiux-btn");
handleButtonClick(uiuxBtn, uiuxContent)

var otherBtn = document.querySelector(".other-btn");
var otherContent = document.querySelector("#Project-other-btn")
handleButtonClick(otherBtn, otherContent)

// < !--project overview demo close -- >


// project after click open

document.querySelectorAll(".project-design-after-click").forEach(image => {
    image.onclick = () => {
        const projectsImageAfterclick = image.querySelector('.projectsImageAfterclick img');
        const projectAfterClickImage = document.querySelector('.Project-afterclick img');

        // Set the src of .Project-afterclick img to the clicked image's src
        projectAfterClickImage.src = projectsImageAfterclick.getAttribute('src');

        // Display the .Project-afterclick container
        const projectAfterClick = document.querySelector(".Project-afterclick").style.display = "block";

        window.scrollTo({ top: 400, behavior: 'smooth' }); // Scroll to the top of the window

        document.body.classList.add('hide-scrollbar');
        projectAfterClick.style.opacity = "0"
        setTimeout(() => {
            projectAfterClick.style.opacity = "1"
        }, 80);
    };
});


document.querySelector('.Project-afterclick i').onclick = () => {
    document.querySelector('.Project-afterclick').style.display = "none";

    document.body.classList.remove('hide-scrollbar');
    projectAfterClick.style.opacity = "1"
    setTimeout(() => {
        projectAfterClick.style.opacity = "0"
    }, 80);
};


// project after click close
