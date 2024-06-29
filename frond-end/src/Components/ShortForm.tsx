import React from "react";

interface Prop {
  pathToFolder: string;
  readerFunction(path: string): string[];
}

function ShortForm({ pathToFolder, readerFunction }: Prop) {
  let formContent = readerFunction(pathToFolder + "/showedText.txt");
  console.log(formContent);

  return <div></div>;
}

export default ShortForm;
