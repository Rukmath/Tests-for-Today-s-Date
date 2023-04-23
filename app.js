const express = require("express");

const app = express();

const todaysDate = new Date();

app.get("/", (request, response) => {
  response.send(
    `${todaysDate.getDate()}-${
      todaysDate.getMonth() + 1
    }-${todaysDate.getFullYear()}`
  );
});

module.exports = app;
