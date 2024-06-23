function insertSelectedText(textId, eventId){
    let textField = document.getElementById(textId);
    let eventTextField = document.getElementById(eventId);

    console.log(textField.textContent)
    eventTextField.value = textField.textContent;
    console.log(eventTextField.value)
}

function initializeOptionsField(eventTextField){
    let optionsField = document.createElement("div");
    optionsField.className = "optionsField";
    optionsField.style.backgroundColor = "blue";
    optionsField.style.zIndex = 5;
    optionsField.style.position = "absolute";

    optionsField.style.marginTop = eventTextField.style.marginTop;
    optionsField.style.marginLeft = eventTextField.marginLeft;

    return optionsField;
}

function insertOptions(optionsField, eventTextField){
    for(let i = 0; i < 2; i++){
        let option = document.createElement("p");
        option.textContent = "spannend";

        option.id = "selectText " + i;
        option.style.minWidth = eventTextField.style.width;
        option.style.maxHeight = eventTextField.style.height;
        option.onclick = () => { insertSelectedText("selectText " + i, eventTextField.id)};

        optionsField.appendChild(option);
    }
}

function deleteLastOptionsField(){
    let lastOptionsField = document.getElementsByClassName("optionsField");
    if(lastOptionsField.length !== 0){
        lastOptionsField[0].parentElement.removeChild(lastOptionsField[0]);
    }
}

function createOptionsField(id){
    let eventTextField = document.getElementById(id);

    deleteLastOptionsField();

    let optionsField = initializeOptionsField(eventTextField);

    insertOptions(optionsField, eventTextField);

    eventTextField.parentElement.appendChild(optionsField);
}