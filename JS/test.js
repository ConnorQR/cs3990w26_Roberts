class News {
    constructor(Title, img, content, like, hide){
        this.Title = Title;
        this.img = img;
        this.content = content;
        this.counter = 0;
        this.like = like;
        this.hide = hide;
    }
    render(){

    }
    show(){
        const news = document.createElement('div');
        news.style.backgroundColor = this.btnBgColor;
        news.title = this.Title;
        news.textContent = this.content;
        document.getElementById("div").appendChild(news);
    }
    like(){
        this.counter = counter + 1;
    }
    hide(){

    }
}

function Generatenews(arr){
    arr.forEach((elem, i) => {
        elem.show();
    });
}

function like(){

}

function hide(){
    
}

let arrRecourses = [
    {
        srcImg: '',
        newsTitle: 'Title 1',
        newsContent: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.';
    },
    {
        srcImg: '',
        newsTitle: 'Title 2',
        newsContent: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.';
    }
];