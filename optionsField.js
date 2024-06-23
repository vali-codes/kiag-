function insertSelectedText(textId, eventId){
    let textField = document.getElementById(textId);
    let eventTextField = document.getElementById(eventId);

    eventTextField.value = textField.textContent;
    deleteLastOptionsFieldIfExists();
}

function initializeOptionsField(event){
    let eventTextField = document.getElementById(event.id);
    let optionsField = document.createElement("div");
    optionsField.className = "optionsField";
    optionsField.id = "child of " + event.id;
    optionsField.style.backgroundColor = "blue";
    optionsField.style.zIndex = 5;
    optionsField.style.position = "absolute";

    let boundingClient = eventTextField.getBoundingClientRect();
    optionsField.style.top = (boundingClient.top + boundingClient.height) + "px";
    optionsField.style.left = boundingClient.left + "px";

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

    return
}

function createOptionsField(id){
    let eventTextField = document.getElementById(id);

    deleteLastOptionsFieldIfExists();

    let optionsField = initializeOptionsField(eventTextField);

    insertOptions(optionsField, eventTextField);

    eventTextField.parentElement.appendChild(optionsField);
}