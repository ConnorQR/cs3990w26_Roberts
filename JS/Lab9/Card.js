export class Card {
    constructor(data, game, tile) {
        this.data = data;
        this.game = game;
        this.tile = tile;
        this.isDone = false;
    }

    render() {

        const container = document.createElement("div");
        container.className = "card";

        const q = document.createElement("h3");
        q.textContent = this.data.question;
        q.className = "question";

        let selected = null;

        const optionsContainer = document.createElement("div");
        optionsContainer.className = "options";

        this.data.options.forEach(opt => {
            const btn = document.createElement("button");
            btn.textContent = opt;

            btn.onclick = (e) => {
                e.stopPropagation();

                if (this.isDone) {
                    this.game.showMessage("⚠️ This card is already done!");
                    return;
                }

                selected = opt;

                [...optionsContainer.children].forEach(b => b.classList.remove("selected"));
                btn.classList.add("selected");
            };

            optionsContainer.appendChild(btn);
        });

        const checkBtn = document.createElement("button");
        checkBtn.textContent = "Check";
        checkBtn.className = "check-btn";

        checkBtn.onclick = (e) => {
            e.stopPropagation();

            if (this.isDone) {
                this.game.showMessage("⚠️ This card is already done!");
                return;
            }

            if (!selected) {
                this.game.showMessage("⚠️ Select an answer first!");
                return;
            }

            if(this.game.blocked) {
                this.game.showMessage("⚠️ This card is blocked!");
                return;
            }

            if (selected === this.data.answer) {
                this.game.score++;
                this.game.showMessage("✅ Correct!");
                this.tile.classList.add("correct");
            } else {
                this.game.score--;
                this.game.showMessage("❌ Wrong!");
                this.tile.classList.add("wrong");
            }

            this.isDone = true;
            this.tile.classList.add("done");

            this.game.updateUI();
        };        

        container.appendChild(q);
        container.appendChild(optionsContainer);
        container.appendChild(checkBtn);

        return container;
    }
}