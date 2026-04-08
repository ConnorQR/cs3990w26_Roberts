import { quizData, assets } from "./Data.js";
import { shuffle } from "./Utils.js";
import { Card } from "./Card.js";

export class Game {
    constructor() {
        this.score = 0;
        this.timer = 0;

        this.board = null;
        this.scoreDisplay = null;
        this.timerDisplay = null;
        this.starDisplay = null;
        this.blocked = false;
        this.isPlaying = false;

        this.allCards = [];
    }

    showMessage(text) {
        if (!this.messageBox) return;

        this.messageBox.textContent = text;
        this.messageBox.classList.add("show");

        setTimeout(() => {
            this.messageBox.classList.remove("show");
        }, 2000);
    }

    startGame() {
        if (this.isPlaying && !this.blocked && this.timer > 0) {
            this.showMessage("⚠️ Finish the current game first!");
            return;
        }

        clearInterval(this.interval);

        this.score = 0;
        this.blocked = false;
        this.isPlaying = true;

        this.board.classList.add("active");

        this.allCards = shuffle([...quizData, ...assets]);

        this.renderBoard();
        this.startTimer();
        this.updateUI();
    }

    renderBoard() {
        this.board.innerHTML = "";

        this.allCards.forEach(item => {
            const tile = document.createElement("div");
            tile.className = "tile";

            tile.onclick = () => this.handleTileClick(item, tile);

            this.board.appendChild(tile);
        });
    }

    handleTileClick(item, tile) {
        if (this.blocked) {
            this.showMessage("❌ Game is locked. Press Start!");
            return;
        }

        if (tile.classList.contains("done")) {
            this.showMessage("⚠️ This card is already used!");
            return;
        }

        if (tile.classList.contains("flipped")) {
            return;
        }

        tile.classList.add("flipped");

        tile.innerHTML = "";

        if (item.question) {
            const card = new Card(item, this, tile);
            tile.appendChild(card.render());
        } else {
            tile.textContent = item.label;

            this.handleAsset(item, tile);
            tile.classList.add("done");
        }
    }

    handleAsset(asset, tile) {
        if (asset.type === "diamond") {
            this.score++;
            this.showMessage("💎 +1 star!");
            tile.classList.add("correct");
        } 
        else if (asset.type === "bear") {
            this.score--;
            this.showMessage("🐻 -1 star!");
            tile.classList.add("wrong");
        } 
        else if (asset.type === "cross") {
            this.blocked = true;
            this.isPlaying = false;

            clearInterval(this.interval);

            this.showMessage("❌ Game Over! Press Start to Restart.");
            tile.classList.add("wrong");
        }

        this.updateUI();
    }

    addStar() {
        this.stars++;
    }

    removeStar() {
        if (this.stars > 0) this.stars--;
    }

    startTimer() {
        this.timer = this.allCards.length * 2;

        clearInterval(this.interval);

        this.interval = setInterval(() => {
            this.timer--;

            if (this.timer <= 0) {
                clearInterval(this.interval);
                this.isPlaying = false;
                this.endGame();
            }

            this.updateUI();
        }, 1000);
    }

    endGame() {
        this.board.innerHTML = "";
        this.board.classList.remove("active");
        this.showMessage("⏰ Time is Up!");
    }

    render() {
        const container = document.createElement("div");

        const startBtn = document.createElement("button");
        startBtn.textContent = "Start Game";
        startBtn.className = "start-btn";
        startBtn.onclick = () => this.startGame();

        this.messageBox = document.createElement("div");
        this.messageBox.className = "message-box";

        document.body.appendChild(this.messageBox);

        this.scoreDisplay = document.createElement("div");
        this.timerDisplay = document.createElement("div");

        this.starDisplay = document.createElement("div");
        this.starDisplay.className = "stars";

        this.board = document.createElement("div");
        this.board.className = "board";

        container.appendChild(startBtn);
        container.appendChild(this.scoreDisplay);
        container.appendChild(this.timerDisplay);
        container.appendChild(this.starDisplay);
        container.appendChild(this.board);

        return container;
    }

    updateUI() {
        this.scoreDisplay.textContent = `Score: ${this.score}`;
        this.timerDisplay.textContent = `Time: ${this.timer}`;
        this.starDisplay.innerHTML = "⭐".repeat(this.score);

        if (this.isPlaying && !this.blocked && this.timer > 0) {
            this.startBtn.disabled = true;
        } else {
            this.startBtn.disabled = false;
        }
    }
}

const app = document.getElementById("app");
const game = new Game();
app.appendChild(game.render());