import { useEffect, useRef, useState } from "react";
import "./App.css";
import "./index.js";
import ShortForm from "./Components/ShortForm.tsx";
import React from "react";
import Result from "./Components/Result.tsx";

function App() {
  let [currentForm, setCurrentForm] = useState(0);
  let [isFinished, setIsFinished] = useState(false);
  let pathName = useRef("");

  useEffect(() => {
    // update
    pathName.current = "../../../Forms/Naturwissenschaftliche Phänomene";
  }, [currentForm]);

  function showResult() {
    // have to include ifs
    setIsFinished(true);
  }

  const reader = async (path: string) => {
    let content = "";

    fetch("/api")
      .then((response) => response.json())
      .then((data) => (content = data).then(console.log(data)));

    return content;
  };

  return (
    <div>
      {/*create list to choose from, which version (current standart: 1)*/}
      <button
        type="button"
        onClick={(index) => {
          setCurrentForm(0);
        }}
      >
        create Gui
      </button>
      {/* below: Gui read from "showedText.txt"*/}

      {/* everything below is standart for every form. Just have to add them when "getFullText" is cal
    
        Mache drei Durchläufe und gleiche die einander ab und gebe das aus
        Fasse danach jeden Punkt in einer Folie mit höchstens 5 Worten zusammen und gebe das aus
        führe danach die Punkte sehr ausführlich aus und gebe das aus
        führe danach die Punkte in Karteikartenformat aus und gebe das aus*/}
      <ShortForm
        pathToFolder={pathName.current}
        readerFunction={(path: string) => {
          return reader(path);
        }}
      ></ShortForm>
      <br />
      <button
        type="button"
        onClick={() => {
          showResult();
        }}
      >
        create text
      </button>
      <div>
        {isFinished ? (
          <Result
            pathToFolder={pathName.current}
            readerFunction={(path: string) => {
              return reader(path);
            }}
          ></Result>
        ) : undefined}
      </div>
    </div>
  );
}

export default App;
