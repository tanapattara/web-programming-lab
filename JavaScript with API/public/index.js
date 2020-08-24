const API_KEY = "API_KEY";
const APIURL =
  "http://api.openweathermap.org/data/2.5/weather?lat=17.8026581&lon=102.7444301&units=metric&appid=" +
  API_KEY;

/**
 * Renders the forecast data into the card element.
 *
 * @param {Element} card The card element to update.
 * @param {Object} data Weather forecast data to update the element with.
 */
function renderCard(card, data) {
  if (!data) {
    // There's no data, skip the update.
    return;
  }

  console.log(data);

  card.querySelector("#city").textContent = data.name;
  card.querySelector("#temperature").textContent = data.main.temp + " °C";
  card.querySelector("#main").textContent = data.weather[0].main;
}
function getWeatherData() {
  console.log("getWeatherData");
  //return fetch(APIURL)
  return fetch("/forecast")
    .then((response) => {
      console.log("result");
      return response.json();
    })
    .catch(() => {
      console.log("return false");
      return null;
    });
}

function getWeatherCard() {
  const newCard = document.getElementById("weather-card"); //.cloneNode(true);
  //document.getElementById("container").appendChild(newCard);
  return newCard;
}

function updateData() {
  console.log("updateData");
  const card = getWeatherCard();
  getWeatherData().then((data) => {
    renderCard(card, data);
  });
}

updateData();
