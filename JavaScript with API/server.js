require("dotenv").config();

const express = require("express");
const fetch = require("node-fetch");
const redirectToHTTPS = require("express-http-to-https").redirectToHTTPS;
const path = require("path");
const app = express();
const port = 3000;
const router = express.Router();

const API_KEY = process.env.API_KEY;
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?`;
const FORECAST_DELAY = 1000;

/**
 * Gets the weather forecast from the Dark Sky API for the given location.
 *
 * @param {Request} req request object from Express.
 * @param {Response} resp response object from Express.
 */
function getForecast(req, resp) {
  console.log("getForcase");
  const location = req.params.location || "17.8057372,102.7470427";
  const loc = location.split(",");
  const url = `${BASE_URL}lat=${loc[0]}&lon=${loc[1]}&units=metric&appid=${API_KEY}`;

  fetch(url)
    .then((resp) => {
      if (resp.status !== 200) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
    .then((data) => {
      setTimeout(() => {
        resp.json(data);
      }, FORECAST_DELAY);
    })
    .catch((err) => {
      console.error(location);
      console.error("API Error: " + url, err.message);
      //resp.json(generateFakeForecast(location));
    });
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/about.html"));
});

// Handle requests for the data
app.get("/forecast/:location", getForecast);
app.get("/forecast/", getForecast);
app.get("/forecast", getForecast);

app.use("/", router);
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
