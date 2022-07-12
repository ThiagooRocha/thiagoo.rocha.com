export default class CardProjects {
  constructor(link, title, paragrafh, arrayTechs) {
    this.link = link;
    this.moreProjects = document.querySelector(".more-projects");
    this.title = title;
    this.paragrafh = paragrafh;
    this.arrayTechs = arrayTechs;
  }

  createTitle() {
    let h2Element = document.createElement("h2");
    h2Element.innerHTML = `${this.title}`;
    return h2Element;
  }
  createP() {
    let pElement = document.createElement("p");
    pElement.innerHTML = `${this.paragrafh}`;
    return pElement;
  }
  createUlTech() {
    const UlElement = document.createElement("ul");
    UlElement.classList.add("ul-techs");

    let li1 = document.createElement("li");
    li1.innerHTML = `${this.arrayTechs[0]}`;
    let li2 = document.createElement("li");
    li2.innerHTML = `${this.arrayTechs[1]}`;
    let li3 = document.createElement("li");
    li3.innerHTML = `${this.arrayTechs[2]}`;
    UlElement.appendChild(li1);
    UlElement.appendChild(li2);
    UlElement.appendChild(li3);

    return UlElement;
  }
  createCard() {
    let aElement = document.createElement("a");
    aElement.setAttribute("href", `${this.link}`);
    aElement.setAttribute("target", "blank_");
    aElement.classList.add("itens");

    aElement.appendChild(this.createTitle());
    aElement.appendChild(this.createP());
    aElement.appendChild(this.createUlTech());

    return aElement;
  }
  onPage() {
    return this.moreProjects.appendChild(this.createCard());
  }
}

