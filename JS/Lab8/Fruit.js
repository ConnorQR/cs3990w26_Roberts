
let hannaFruits = [
    { fruit: "apple", color: "red" },
    { fruit: "pear", color: "green" },
    { fruit: "mango", color: "red" },
    { fruit: "plum", color: "blue" }
];

class Fruit {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    show() {
        return `
            <li class="fruit-item" data-color="${this.color}" 
                style="background:${this.color}; margin:5px; padding:5px;">
                ${this.name}
            </li>
        `;
    }
}

class RatedFruit extends Fruit {
    constructor(name, color, rating = 0) {
        super(name, color);
        this.rating = rating;
    }

    show() {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            stars += `<span class="star ${i <= this.rating ? 'active' : ''}">&#9733;</span>`;
        }

        return `
            <li class="fruit-item" data-color="${this.color}" 
                style="background:${this.color}; margin:10px; padding:5px;">
                ${this.name}
                <div class="stars">${stars}</div>
            </li>
        `;
    }
}

class btnColor {
    constructor(color) {
        this.color = color;
    }

    show() {
        return `
            <button class="color-btn" data-color="${this.color}" 
                style="background:${this.color}; margin:3px;">
                ${this.color}
            </button>
        `;
    }
}

function renderButtons(data) {
    let colors = [...new Set(data.map(item => item.color))];

    colors.forEach(color => {
        let btn = new btnColor(color);
        $("#colors").append(btn.show());
    });
}

function renderFruits(data) {
    data.forEach(item => {
        let fruit = new RatedFruit(item.fruit, item.color, 3);
        $("#fruits ul").append(fruit.show());
    });
}

$(document).ready(function () {

    renderButtons(hannaFruits);
    renderFruits(hannaFruits);

    $("#colors").on("click", ".color-btn", function () {
        let selectedColor = $(this).data("color");

        $(".fruit-item").css("box-shadow", "none");

        $(`.fruit-item[data-color='${selectedColor}']`)
            .css("box-shadow", "5px 5px 0px grey");
    });

    $("#fruits").on("click", ".star", function () {

        let $clickedStar = $(this);

        $clickedStar.parent().children().removeClass("active");

        $clickedStar.addClass("active");
        $clickedStar.prevAll().addClass("active");
    });

});