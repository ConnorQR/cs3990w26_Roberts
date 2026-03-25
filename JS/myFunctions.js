import { arrTexts, arrBgColors, arrColors } from "./myArrays.js";
import { Button } from "./myButton.js";
import { ColorButton } from "./myColorButton.js";

export function GenerateButtons(){
    const arrButtons = [];
    arrTexts.forEach((elem, i) => {
        let btn = new Button(elem, arrBgColors[i], elem);
    arrButtons[i] = btn;   
    });
    return arrButtons;
}

export function DisplayButtons(arr){
    arr.forEach((elem, i) => {
        setTimeout(() => elem.show(), 3000 * (i + 1));
    });
}

export function GenerateColorButtons(){
    const arrButtons = [];
    arrTexts.forEach((elem, i) => {
        let btn = new ColorButton(elem, arrBgColors[i], elem, arrColors[i]);
    arrButtons[i] = btn;   
    });
    return arrButtons;
}

export function DisplayColorButtons(arr){
    arr.forEach((elem, i) => {
        setTimeout(() => elem.show(), 3000 * (i + 5));
    });
}