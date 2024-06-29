function getContent(path) {
    let fs = require("fs");
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  }