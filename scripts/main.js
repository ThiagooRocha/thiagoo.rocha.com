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
  closeOverlay()
});

function expandedImg() {
  rightAbout.classList.add("expandedImg");
  createOverlay()
}

function createOverlay() {
  let beforeElement = document.createElement("div")
  beforeElement.addEventListener("click" , closeOverlay)
  beforeElement.classList.add("before-div")
  about.appendChild(beforeElement)
}

function closeOverlay(){ 
  let beforeDiv = document.querySelector(".before-div")
  if(beforeDiv.parentNode){
    beforeDiv.parentNode.removeChild(beforeDiv)
  }
  rightAbout.classList.remove("expandedImg")
}

// SHOW MORE PROJECTS
const showmoreBtn = document.querySelector(".showmore-btn")
showmoreBtn.addEventListener("click" , () => {
  let moreProjects = document.querySelector(".more-projects")
  moreProjects.classList.toggle("moreProjects")
  if(moreProjects.classList.contains("moreProjects")){
    showmoreBtn.innerText = "ver menos"
  } else {
    showmoreBtn.innerText = "ver mais"
  }
})


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
