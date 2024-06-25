import './App.css';

function App() {
  return (
    <div>
      {/*create list to choose from, which version (current standart: 1)*/}
    <button type="button" onClick="createGui(1)">create Gui</button>
    {/* below: Gui read from "showedText.txt"*/}
     
{/*    everything below is standart for every form. Just have to add them when "getFullText" is cal
    
Mache drei Durchläufe und gleiche die einander ab und gebe das aus
Fasse danach jeden Punkt in einer Folie mit höchstens 5 Worten zusammen und gebe das aus
führe danach die Punkte sehr ausführlich aus und gebe das aus
führe danach die Punkte in Karteikartenformat aus und gebe das aus*/}
    <div id="showedForm"></div>
    <br/>
    <button type="button" onClick="getText()">create text</button>

    <div id="resultText"></div>
    </div>
  );
}

export default App;
