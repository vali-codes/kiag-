let theme = "";
    let adjective = "";
    let frequency = "";
    let experimentAmount = 0;
    let experimentAddOn = "";
    let everyday = "";
    let future = "";
    let threeRounds = "";

    const con_Out = ["du bist ein Referent zu einem Spezialthema. Du gibst Stichpunkte zu [Adjektiv(e)] Hinweisen und [Häufigkeit] lustigen Hinweis. Dein heutiges Thema ist [Thema].", "Erstelle eine Präsentation mit folgenden Folien:", "1.	 Begriffsdefinition [Thema]", "2.	 Eigenschaften von [Thema]", "3.	 [Häufigkeit und Art] Experimente zum Thema", "4.	 Alltägliche(s) [“Aspekte der Präsenz, Verbreitung und des Diskurses”] von [Thema]", "5.	 Künftige(s) [“Aspekte der Präsenz, Verbreitung und des Diskurses”]", "6.	 Mögliche Probleme", "7.	 Schlussfolie die wichtigsten Stichworte", "Mache drei Durchläufe und gleiche die einander ab und gebe das aus", "Fasse danach jeden Punkt in einer Folie mit höchstens 5 Worten zusammen und gebe das aus", "führe danach die Punkte sehr ausführlich aus und gebe das aus", "führe danach die Punkte in Karteikartenformat aus und gebe das aus"];
    let output = [" ", " "];

    function getAtributes(){
        theme = document.getElementById("theme").value;
        adjective = document.getElementById("adj").value;
        frequency = document.getElementById("frequency").value;
        experimentAmount = parseInt(document.getElementById("experimentAmount").value);
        experimentAddOn = document.getElementById("experimentAddOn").value;
        everyday = document.getElementById("everyday").value;
        future = document.getElementById("future").value;
        threeRounds = document.getElementById("threeRounds").checked;

        console.log(threeRounds)
        
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

    function appendToParent(parent, text){
        appendToParent(parent, text, "")
    }

    function appendToParent(parent, text, className){
        let line = document.createElement("p");
        line.textContent = text;
        line.className = className;
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
            appendToParent(resultText, result)
        }
    }

    function getText(){
        output = JSON.parse(JSON.stringify(con_Out));
        if(getAtributes()){
            replaceLines();

            addToParent();
        }
    }