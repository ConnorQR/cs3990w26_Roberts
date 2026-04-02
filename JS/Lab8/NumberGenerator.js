export class NumGen {
    constructor() {
        this.number = 0;
        this.root = null;
        this.numContainer = null;
        this.paraContainer = null;
    }

    Generate() {
        this.number = Math.floor(Math.random() * 100) + 1;
        this.updateUI();
    }

    inc() {
        this.number++;
        this.updateUI();
    }

    dec() {
        if (this.number > 0) {
            this.number--;
            this.updateUI();
        }
    }

    removeParagraph(index) {
        this.number--;
        this.updateUI();
    }

renderParagraphs() {
    this.paraContainer.innerHTML = "";

    for (let i = 0; i < this.number; i++) {
        const wrapper = document.createElement("div");

        const title = document.createElement("h3");
        title.textContent = `Title #${i + 1}`;

        const p = document.createElement("p");
        p.textContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`;

        const btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.onclick = () => this.removeParagraph(i);

        wrapper.appendChild(title);
        wrapper.appendChild(p);
        wrapper.appendChild(btn);

        this.paraContainer.appendChild(wrapper);
    }
}

render() {
    const container = document.createElement("div");

    const topRow = document.createElement("div");
    topRow.className = "top-row";

    const decBtn = document.createElement("button");
    decBtn.textContent = "-";
    decBtn.onclick = () => this.dec();

    const numContainer = document.createElement("div");
    this.numContainer = numContainer;
    numContainer.className = "number-box";

    const incBtn = document.createElement("button");
    incBtn.textContent = "+";
    incBtn.onclick = () => this.inc();

    topRow.appendChild(decBtn);
    topRow.appendChild(numContainer);
    topRow.appendChild(incBtn);

    const genBtn = document.createElement("button");
    genBtn.textContent = "Make your number now!";
    genBtn.className = "generate-btn";
    genBtn.onclick = () => this.Generate();

    const paraContainer = document.createElement("div");
    this.paraContainer = paraContainer;
    paraContainer.className = "para-container";

    container.appendChild(topRow);
    container.appendChild(genBtn);
    container.appendChild(paraContainer);

    this.root = container;

    this.updateUI();

    return container;
}

    updateUI() {
        if (this.numContainer) {
            this.numContainer.textContent = `Number: ${this.number}`;
        }

        if (this.paraContainer) {
            this.renderParagraphs();
        }
    }
}

const app = document.getElementById("header");

const numGen = new NumGen();
app.appendChild(numGen.render());