function insertSelectedText(textId, eventId){
    let textField = document.getElementById(textId);
    let eventTextField = document.getElementById(eventId);

    eventTextField.value = textField.textContent;
    deleteLastOptionsFieldIfExists();
}

function styleOptionsField(optionsField, event){
    let boundingClient = document.getElementById(event.id).getBoundingClientRect();

    optionsField.style.backgroundColor = "blue";
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
    for(let i = 0; i < 2; i++){
        let option = document.createElement("p");
        option.textContent = "spannend";

        option.id = "selectText " + i;
        option.style.width = eventTextField.offsetWidth + "px";
        option.style.height = eventTextField.offsetHeight + "px";
        option.style.margin = "0px"
        option.onclick = () => { insertSelectedText("selectText " + i, eventTextField.id)};

        optionsField.appendChild(option);
    }
}

function deleteLastOptionsFieldIfExists(){
    let lastOptionsField = document.getElementsByClassName("optionsField");

    if(lastOptionsField.length !== 0){
        lastOptionsField[0].parentElement.removeChild(lastOptionsField[0]);
    }
}

function createOptionsField(id){
    let eventTextField = document.getElementById(id);

    deleteLastOptionsFieldIfExists();

    let optionsField = initializeOptionsField(eventTextField);

    insertOptions(optionsField, eventTextField);

    eventTextField.parentElement.appendChild(optionsField);
}