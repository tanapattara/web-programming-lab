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

// Fake forecast data used if we can't reach the Dark Sky API
const fakeForecast = {
  fakeData: true,
  coord: {
    lon: 102.75,
    lat: 17.81,
  },
  weather: [
    {
      id: 0,
      main: "broken clouds",
      icon: "04d",
    },
  ],
  base: "stations",
  main: {
    temp: 32.96,
    feels_like: 36.73,
    temp_min: 32.22,
    temp_max: 34,
    pressure: 1006,
    humidity: 56,
  },
  visibility: "10000",
  wind: {
    speed: 2.1,
    deg: 180,
  },
  clouds: {
    all: 75,
  },
  dt: 1592637815,
  clouds: {
    type: 1,
    id: 9203,
    country: "TH",
    sunrise: 1592606082,
    sunset: 1592653586,
  },
  timezone: 25200,
  id: 1608232,
  name: "Nong Khai",
  cod: 200,
};
function generateFakeForecast(location) {
  location = location || "17.8057372,102.7470427";
  const commaAt = location.indexOf(",");

  // Create a new copy of the forecast
  const result = Object.assign({}, fakeForecast);
  result.latitude = parseFloat(location.substr(0, commaAt));
  result.longitude = parseFloat(location.substr(commaAt + 1));
  return result;
}
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
      // when cann't get api data
      // create fake data
      resp.json(generateFakeForecast(location));
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
