export class ColorButton{

    constructor(btnText, btnBgColor, btnTitle, btnColor){
        this.btnText = btnText;
        this.btnBgColor = btnBgColor;
        this.btnTitle = btnTitle;
        this.btnColor = btnColor
    }
    show(){
            const btn = document.createElement('button');
            btn.style.backgroundColor = this.btnBgColor;
            btn.style.color = this.btnColor;
            btn.title = this.btnTitle;
            btn.textContent = this.btnText;
            document.getElementById("header").appendChild(btn);    
    }

}