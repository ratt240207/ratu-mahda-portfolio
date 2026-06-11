// ======================
// WELCOME SCREEN
// ======================

const enterBtn = document.getElementById("enter-btn");
const welcomeScreen = document.getElementById("welcome-screen");
const mainContent = document.getElementById("main-content");

enterBtn.addEventListener("click", () => {

    welcomeScreen.style.transition = "1s";
    welcomeScreen.style.opacity = "0";

    setTimeout(() => {

        welcomeScreen.style.display = "none";
        mainContent.style.display = "block";

        document.querySelector(".hero").scrollIntoView({
            behavior: "smooth"
        });

    }, 1000);

});
// ======================
// IMAGE PREVIEW MODAL
// ======================

const images = document.querySelectorAll(".gallery img");

const modal = document.createElement("div");
modal.id = "imageModal";

modal.innerHTML = `
    <span id="closeModal">&times;</span>
    <img id="modalImage">
`;

document.body.appendChild(modal);

const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

images.forEach(img => {

    img.addEventListener("click", () => {

        modal.style.display = "flex";
        modalImage.src = img.src;

    });

});

closeModal.addEventListener("click", () => {

    modal.style.display = "none";

});

modal.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";

    }

});

// ======================
// SCROLL ANIMATION
// ======================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.1
});

cards.forEach(card=>{

    card.classList.add("hidden");

    observer.observe(card);

});