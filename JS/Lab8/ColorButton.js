export class ColorButton {
    constructor() {
        this.root = null;
        this.paletteContainer = null;
        this.textBlock = null;
    }

    render() {
        const container = document.createElement("div");

        const palette = document.createElement("div");
        palette.className = "palette";
        this.paletteContainer = palette;

        const textBlock = document.createElement("div");
        textBlock.className = "text-block";
        textBlock.textContent = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.";
        this.textBlock = textBlock;

        this.generatePalette([
            "black", "gray", "red", "orange", "yellow",
            "green", "cyan", "blue", "purple",
            "pink", "brown", "lime", "teal", "marroon"
        ]);

        palette.addEventListener("click", (e) => this.handleEvent(e));
        palette.addEventListener("mouseover", (e) => this.handleEvent(e));

        container.appendChild(palette);
        container.appendChild(textBlock);

        this.root = container;
        return container;
    }

    handleEvent(event) {
        const cell = event.target.closest(".color-cell");
        if (!cell) return;

        const color = cell.dataset.color;

        if (event.type === "click") {
            this.textBlock.style.color = color;
        }

        if (event.type === "mouseover") {
            this.textBlock.style.backgroundColor = color;
        }
    }

    generatePalette(colors) {
        this.paletteContainer.innerHTML = "";

        colors.forEach(color => {
            const cell = document.createElement("div");
            cell.className = "color-cell";
            cell.style.backgroundColor = color;
            cell.dataset.color = color;

            this.paletteContainer.appendChild(cell);
        });
    }
}

const app = document.getElementById("P2");
const colorApp = new ColorButton();
app.appendChild(colorApp.render());