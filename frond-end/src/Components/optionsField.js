/*let lastOptionsTargetId = null;

function insertSelectedText(textId, eventId){
    let textField = document.getElementById(textId);
    let eventTextField = document.getElementById(eventId);

    eventTextField.value = textField.textContent;
    deleteLastOptionsFieldIfExists();
    lastOptionsTargetId = null;
}

function styleOptionsField(optionsField, event){
    let boundingClient = document.getElementById(event.id).getBoundingClientRect();

    optionsField.style.backgroundColor = "grey";
    optionsField.style.zIndex = 5;
    optionsField.style.position = "absolute";

    optionsField.style.top = (boundingClient.top + boundingClient.height) + "px";
    optionsField.style.left = boundingClient.left + "px";
}

function initializeOptionsField(eventTextField){
    let optionsField = document.createElement("div");
    optionsField.className = "optionsField";
    optionsField.id = "child of " + eventTextField.id;
    
    styleOptionsField(optionsField, eventTextField)
    return optionsField;
}

function insertOptions(optionsField, eventTextField){
    optionTexts[typeOfInput.indexOf(eventTextField.id)].forEach((optionText) => {
        let option = document.createElement("p");
        option.textContent = optionText;

        option.id = optionText;
        option.style.width = eventTextField.offsetWidth + "px";
        option.style.height = eventTextField.offsetHeight + "px";
        option.style.margin = "0px"
        option.onclick = () => { insertSelectedText(optionText, eventTextField.id)};

        optionsField.appendChild(option);
    })
}

function deleteLastOptionsFieldIfExists(){
    if(lastOptionsTargetId !== null){
        let lastOptionsField = document.getElementsByClassName("optionsField");

        lastOptionsField[0].parentElement.removeChild(lastOptionsField[0]);
    }
}

function isNewInputField(target){
    return target.nodeName.toLowerCase() === "input" && lastOptionsTargetId !== target.id;
}

function createOptionsField(target){
    deleteLastOptionsFieldIfExists();

    if(isNewInputField(target)){
        lastOptionsTargetId = target.id;

        let eventTextField = document.getElementById(target.id);

        let optionsField = initializeOptionsField(eventTextField);

        insertOptions(optionsField, eventTextField);

        eventTextField.parentElement.appendChild(optionsField);
    }else{
        lastOptionsTargetId = null;
    }
}*/
