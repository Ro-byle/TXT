const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = 3000;
var participants = 5;
app.get("/bored", async (request, response) => {
  const api_url = "http://www.boredapi.com/api/activity/";
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  response.json(json);
});

app.get("/act", async (request, response) => {
  const api_url = "http://www.boredapi.com/api/activity/";
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  response.json(json.activity);
});

app.get("/param/:participants", async (request, response) => {
  const api_url = `http://www.boredapi.com/api/activity?participants=${participants}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  response.json(json);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
