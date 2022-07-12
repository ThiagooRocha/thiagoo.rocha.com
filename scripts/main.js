// TEXT ANIMATE ==========================
const nameText = document.querySelector(".text-name");

function effectTextOn() {
  nameText.classList.toggle("effectOn");
}
const animateText = setInterval(effectTextOn, 500);

setTimeout(() => {
  clearTimeout(animateText);
}, 1500);

// IMG EXPANDED  ==========================
const boxAnimate = document.querySelector(".box-animate");
const imgBox = document.querySelector(".img-box");
const rightAbout = document.querySelector(".right-about");

boxAnimate.addEventListener("mouseenter", expandedImg);
imgBox.addEventListener("mouseleave", () => {
  rightAbout.classList.remove("expandedImg");
  closeOverlay();
});

function expandedImg() {
  rightAbout.classList.add("expandedImg");
  createOverlay();
}

function createOverlay() {
  let beforeElement = document.createElement("div");
  beforeElement.addEventListener("click", closeOverlay);
  beforeElement.classList.add("before-div");
  about.appendChild(beforeElement);
}

function closeOverlay() {
  let beforeDiv = document.querySelector(".before-div");
  if (beforeDiv.parentNode) {
    beforeDiv.parentNode.removeChild(beforeDiv);
  }
  rightAbout.classList.remove("expandedImg");
}

// SHOW MORE PROJECTS
const showmoreBtn = document.querySelector(".showmore-btn");
import CardProjects from "./cardprojects.js";

function btnProjects() {
  showmoreBtn.addEventListener("click", () => {
    let moreProjects = document.querySelector(".more-projects");
    moreProjects.classList.toggle("moreProjects");

    if (moreProjects.classList.contains("moreProjects")) {
      const Card1 = new CardProjects(
        "",
        "Teste",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        ["HTML", "CSS", "JavaScript"]
      );
      Card1.onPage();
      const Card2 = new CardProjects(
        "",
        "Teste",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        ["HTML", "CSS", "JavaScript"]
      );
      Card2.onPage();
      const Card3 = new CardProjects(
        "",
        "Teste",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        ["HTML", "CSS", "JavaScript"]
      );
      Card3.onPage();
      const Card4 = new CardProjects(
        "",
        "Teste",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        ["HTML", "CSS", "JavaScript"]
      );
      Card4.onPage();
      const Card5 = new CardProjects(
        "https://www.twitch.tv/gaules",
        "Teste",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        ["HTML", "CSS", "JavaScript"]
      );
      Card5.onPage();

      showmoreBtn.innerText = "ver menos";

    } else {
      let itens = document.querySelectorAll(".itens");
      itens.forEach((item) => {
        document.querySelector(".more-projects").removeChild(item);
      });
      showmoreBtn.innerText = "ver mais";
    }
  });
}

btnProjects();

// ANIMATE SCROLL  ==========================
ScrollReveal({
  origin: "bottom",
  distance: "30px",
  duration: "700",
}).reveal("#about .infos-about");
ScrollReveal({
  origin: "left",
  distance: "30px",
  duration: "700",
}).reveal("#about .right-about, #projects .projects-cards .card");
