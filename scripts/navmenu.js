window.document.addEventListener("scroll" , onScroll)

function onScroll() {
    headerActive()
    activeMenuCurrent(home)
    activeMenuCurrent(about)
    activeMenuCurrent(projects)
}

function headerActive() {
    if(scrollY > 0) {
        header.classList.add('onscroll')   
    } else {
        header.classList.remove('onscroll')
    }
}

function activeMenuCurrent(section) {
    const targetLine = scrollY + innerHeight / 2
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    const sectionEndsAt = sectionTop + sectionHeight

    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    const sectionLimits = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const navMenu = document.querySelector(`.menu a[href*=${sectionId}]`)
   
    navMenu.classList.remove('active')
     
    if(sectionLimits){
        navMenu.classList.add('active')
    }
}


const openMenuBtn = document.querySelector(".open-menu")
const closeMenuBtn = document.querySelector(".close-menu")

openMenuBtn.addEventListener("click" , openMenu)
closeMenuBtn.addEventListener("click" , closeMenu)

function openMenu() {
    body.classList.add("mobile")
}
function closeMenu() {
    body.classList.remove("mobile")
}