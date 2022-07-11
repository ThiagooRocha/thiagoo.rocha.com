class CardProjects {
  constructor(title) {
    this.body = document.body;
    this.title = title;
  }

  createTitle() {
    let h2Element = document.createElement("h2");
    h2Element.innerHTML = `${this.title}`;
    return h2Element;
  }
  createCard() {
    let aElement = document.createElement("a");
    aElement.classList.add("itens");
    aElement.appendChild(this.createTitle());
    return aElement;
  }
  onBody() {
    return this.body.appendChild(this.createCard());
  }
}

const newCard = new CardProjects("Bara-bara no mi");

console.log(newCard.createTitle());
console.log(newCard.onBody());
