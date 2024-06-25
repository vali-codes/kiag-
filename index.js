let theme = "";
let adjective = "";
let frequency = "";
let experimentAmount = 0;
let experimentAddOn = "";
let everyday = "";
let future = "";
let threeRounds = "";

const con_Out = []; // read out of file
let output = [" "];
let index = 0;

function getAtributes(){
    theme = document.getElementById(typeOfInput[0]).value;
    adjective = document.getElementById(typeOfInput[1]).value;
    frequency = document.getElementById(typeOfInput[2]).value;
    experimentAmount = parseInt(document.getElementById(typeOfInput[3]).value);
    experimentAddOn = document.getElementById(typeOfInput[4]).value;
    everyday = document.getElementById(typeOfInput[5]).value;
    future = document.getElementById(typeOfInput[6]).value;
    threeRounds = document.getElementById(typeOfInput[7]).checked;
    
    if(isNaN(experimentAmount)) return false;
    return true;
}

function replaceLines(){
    output[0] = output[0].replace("[Adjektiv(e)]", adjective)
    output[0] = output[0].replace("[Häufigkeit]", frequency)
    output[0] = output[0].replace("[Thema]", theme)

    output[2] = output[2].replace("[Thema]", theme)
    output[3] = output[3].replace("[Thema]", theme)

    if (experimentAmount === 0){
        output[4] = ""
    }
    else{
        output[4] = output[4].replace("[Häufigkeit", experimentAmount)
        output[4] = output[4].replace("und Art]", experimentAddOn)
    }

    output[5] = output[5].replace("[“Aspekte der Präsenz, Verbreitung und des Diskurses”]", everyday)
    output[5] = output[5].replace("[Thema]", theme)

    output[6] = output[6].replace("[“Aspekte der Präsenz, Verbreitung und des Diskurses”]", future)

    if(!threeRounds){
        output[9] = ""
    }
}

function appendToParent(parent, text, className){
    let line = document.createElement("p");
    line.textContent = text;
    line.className = className;
    line.className.position = "absolute"
    resultText.appendChild(line);
}

function addToParent(){
    const resultText = document.getElementById("resultText");

    while(resultText.childElementCount > 0) resultText.removeChild(resultText.lastChild)

    for (let i = 0; i < output.length; i++){
        let result = output[i];
        if (i != 0 && resultText.lastChild.textContent.startsWith("Mache drei Durchläufe")){
            let tmpResult = "it may be better to copy the part above first and, after the chatbot generated its response, then copy and paste this" + "\n"
            appendToParent(resultText, tmpResult, "insert")
        }
        appendToParent(resultText, result, "")
    }
}

function getFullText(){

}

function getShowedText(){
    const originalText = require("fs");
    FileSystem.readFile(".../Naturwissenschaftliche Phänomene/showedText.txt", (err, inputD) => {
        if (err) throw err;
           return inputD.toString();
     })
}

function createGui(i){
    index = i;
    let root = document.getElementById("showedForm");
    let text = getShowedText();
    console.log(text);
}

function getText(){
    output = getFullText();
    /*
    if(getAtributes()){
        replaceLines();

        addToParent();
    }*/
}