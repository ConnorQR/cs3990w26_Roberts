class News {
    constructor(title, imgSrc, content) {
        this.title = title;
        this.imgSrc = imgSrc;
        this.content = content;
        this.likes = 0;

        this.root = null;
        this.likesContainer = null;
        this.likeBtn = null;
    }

    render() {
        const container = document.createElement('div');

        const titleEl = document.createElement('h3');
        titleEl.textContent = this.title;

        const likesEl = document.createElement('div');
        this.likesContainer = likesEl;
        this.updateLikes();

        const img = document.createElement('img');
        img.src = this.imgSrc;
        img.style.width = "150px";

        const text = document.createElement('p');
        text.textContent = this.content;

        const likeBtn = document.createElement('button');
        likeBtn.textContent = "LIKE";
        likeBtn.onclick = () => this.incLikes();
        this.likeBtn = likeBtn;

        const hideBtn = document.createElement('button');
        hideBtn.textContent = "HIDE";
        hideBtn.onclick = () => this.hide();

        container.appendChild(titleEl);
        container.appendChild(likesEl);
        container.appendChild(img);
        container.appendChild(text);
        container.appendChild(likeBtn);
        container.appendChild(hideBtn);

        this.root = container;

        return container;
    }

    updateLikes() {
        if (this.likesContainer) {
            this.likesContainer.innerHTML = "★".repeat(this.likes);
        }
    }

    incLikes() {
        this.likes++;
        this.updateLikes();
    }

    hide() {
        if (!this.root) return;

        const img = this.root.querySelector('img');
        const text = this.root.querySelector('p');
        const title = this.root.querySelector('h3');

        img.style.opacity = "0.3";
        text.style.color = "darkgray";
        text.style.backgroundColor = "#eee";
        title.style.color = "darkgray";

        this.likeBtn.disabled = true;
    }

    show(parentElement) {
        const el = this.render();
        parentElement.innerHTML = ""; 
        parentElement.appendChild(el);
    }
}

let arrRecourses = [
    {
        srcImg: 'Images/intro.jpg',
        newsTitle: 'Computer Science',
        newsContent: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.'

    },
    {
        srcImg: 'Images/frog.jpg',
        newsTitle: 'Cool Frog',
        newsContent: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.'

    },
    {
        srcImg: 'Images/NWP.jpg',
        newsTitle: 'NorthWestern Polytechnic',
        newsContent: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.'

    }
];

function generateNews() {
    const paragraphs = document.querySelectorAll('#content p');

    paragraphs.forEach((p, index) => {
        const data = arrRecourses[index % arrRecourses.length];

        const news = new News(
            data.newsTitle,
            data.srcImg,
            data.newsContent
        );

        news.show(p);
    });
}

document.getElementById('myBtn').onclick = generateNews;