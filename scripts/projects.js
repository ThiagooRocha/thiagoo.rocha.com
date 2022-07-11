class CardProjects {
  constructor(title , paragrafh) {
    this.body = document.body;
    this.title = title;
    this.paragrafh = paragrafh
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
  createCard() {
    let aElement = document.createElement("a");
    aElement.classList.add("itens");
    aElement.appendChild(this.createTitle());
    aElement.appendChild(this.createP());
    return aElement;
  }
  onBody() {
    return this.body.appendChild(this.createCard());
  }
}

const newCard = new CardProjects (
    "Bara-bara no mi" , 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    );


console.log(newCard.onBody());
