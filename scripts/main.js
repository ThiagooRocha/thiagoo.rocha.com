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
});

function expandedImg() {
  rightAbout.classList.add("expandedImg");
}

ScrollReveal({
  origin: "bottom",
  distance: "30px",
  duration: "700",
}).reveal("#about .infos-about");
ScrollReveal({
  origin: "left",
  distance: "30px",
  duration: "700",
}).reveal("#about .right-about, #projects .card, #projects");
