export class Button {

    constructor(btnText, btnBgColor, btnTitle){
        this.btnText = btnText;
        this.btnBgColor = btnBgColor;
        this.btnTitle = btnTitle;
    }
    show(){
            const btn = document.createElement('button');
            btn.style.backgroundColor = this.btnBgColor;
            btn.title = this.btnTitle;
            btn.textContent = this.btnText;
            document.getElementById("header").appendChild(btn);
    }

}