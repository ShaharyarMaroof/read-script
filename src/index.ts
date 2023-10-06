import express from "express";
import ReadScriptService from "./readScript";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const readScriptService = new ReadScriptService(
    `${__dirname}/scripts/read-file.sh`
  );

  const callback = (error, content) => {
    if (error) {
      res.status(404).send(error.message);
    } else {
      res.status(200).send(content);
    }
  };

  readScriptService.read(`${__dirname}/scripts/test.txt`, callback);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
