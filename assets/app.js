// my Api key to be use
var myApiKey = "ecdc2e3e10911d9dd68cf81fb00dced1";
var lat = 51.5073219;
var lon = -0.1276474;

// Dom Elements
var searchButton = document.getElementById("search-btn");
var formEl = document.getElementById("form");
var cityInputEL = document.getElementById("input");
var searchHistory = document.querySelector("ul");
var cityEl = document.getElementById("city");
var tempEl = document.getElementById("temp");
var iconEl = document.getElementById("icon");
var discEl = document.getElementById("description");
var humidEl = document.getElementById("humidity");
var windEl = document.getElementById("wind");
var uviEl = document.getElementById("UV");
var timeEl = document.getElementById("time");
// current day usiing moment.js
var today = moment();
$("#currentDay").text(today);
// ------- get api fucntion to fetch in
function getApi(name) {
  // searchHistory.innerHTML = " ";
  // console.log("HELLO");
  var requestUrl =
    " https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&units=metric&exclude=minutely,hourly&appid=ecdc2e3e10911d9dd68cf81fb00dced1";

  // "https://api.openweathermap.org/data/2.5/weather?q=" +
  // name +
  // "&units=metric&appid=ecdc2e3e10911d9dd68cf81fb00dced1";
  // calling url
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      // I want to use an HTTP request's response to display data to the user.
      console.log(data);
      cityEl.textContent = " Weather in  " + data.name;
      tempEl.textContent = data.current.temp + " °C";
      iconEl.src =
        "http://openweathermap.org/img/wn/" +
        data.current.weather[0].icon +
        "@2x.png";
      discEl.textContent = data.current.weather[0].description;
      humidEl.textContent = "humidity is: % " + data.current.humidity;
      windEl.textContent = "wind speed of " + data.current.wind_speed + " km/h";
      timeEl.textContent = "time zone: " + data.current.timezone;
      uviEl.innerHTML = "uv index is " + data.current.uvi;
      // future days
      // day one dom
      var dayOneTemp = document.getElementById("day-one-temp");
      var dayOneIcon = document.getElementById("oneicon");
      var dayOneHumid = document.getElementById("day-one-humidity");
      var dayOneDesc = document.getElementById("day-one-description");
      var dayOneWind = document.getElementById("day-one-wind");
      var dayOneUvi = document.getElementById("day-one-UV");
      //  day one display
      dayOneTemp.textContent = data.daily[0].temp.day + "°C";
      dayOneHumid.textContent = "humidity is: % " + data.daily[0].humidity;
      dayOneDesc.textContent = data.daily[0].weather[0].description;
      dayOneWind.textContent =
        "wind speed of " + data.daily[0].wind_speed + " km/h";
      dayOneUvi.textContent = "uv index is " + data.daily[0].uvi;
      dayOneIcon.src =
        "http://openweathermap.org/img/wn/" +
        data.daily[0].weather[0].icon +
        "@2x.png";

      // day two dom
      var dayTwoTemp = document.getElementById("day-two-temp");
      var dayTwoHumid = document.getElementById("day-two-humidity");
      var dayTwoDesc = document.getElementById("day-two-description");
      var dayTwoWind = document.getElementById("day-two-wind");
      var dayTwoUvi = document.getElementById("day-two-UV");
      var dayTwoIcon = document.getElementById("twoicon");
      // displaying day two
      dayTwoTemp.textContent = data.daily[1].temp.day + "°C";
      dayTwoHumid.textContent = "humidity is: % " + data.daily[1].humidity;
      dayTwoDesc.textContent = data.daily[1].weather[0].description;
      dayTwoWind.textContent =
        "wind speed of " + data.daily[1].wind_speed + " km/h";

      dayTwoUvi.textContent = "uv index is " + data.daily[1].uvi;
      dayTwoIcon.src =
        "http://openweathermap.org/img/wn/" +
        data.daily[1].weather[0].icon +
        "@2x.png";
      // day three dom
      var dayThreeTemp = document.getElementById("day-three-temp");
      var dayThreeWind = document.getElementById("day-three-wind");
      var dayThreeUvi = document.getElementById("day-three-UV");
      var dayThreeIcon = document.getElementById("threeicon");
      var dayThreeHumid = document.getElementById("day-three-humidity");
      var dayThreeDesc = document.getElementById("day-three-description");
      // displaying day three
      dayThreeTemp.textContent = data.daily[2].temp.day + "°C";
      dayThreeHumid.textContent = "humidity is: % " + data.daily[2].humidity;
      dayThreeDesc.textContent = data.daily[2].weather[0].description;
      dayThreeWind.textContent =
        "wind speed of " + data.daily[2].wind_speed + " km/h";

      dayThreeUvi.textContent = "uv index is " + data.daily[2].uvi;
      dayThreeIcon.src =
        "http://openweathermap.org/img/wn/" +
        data.daily[2].weather[0].icon +
        "@2x.png";
      // day four dom
      var dayFourTemp = document.getElementById("day-four-temp");
      var dayFourWind = document.getElementById("day-four-wind");
      var dayFourUvi = document.getElementById("day-four-UV");
      var dayFourIcon = document.getElementById("fouricon");
      var dayFourHumid = document.getElementById("day-four-humidity");
      var dayFourDesc = document.getElementById("day-four-description");
      // displaying day four
      dayFourTemp.textContent = data.daily[3].temp.day + "°C";
      dayFourHumid.textContent = "humidity is: % " + data.daily[3].humidity;
      dayFourDesc.textContent = data.daily[3].weather[0].description;
      dayFourWind.textContent =
        "wind speed of " + data.daily[3].wind_speed + " km/h";

      dayFourUvi.textContent = "uv index is " + data.daily[3].uvi;
      dayFourIcon.src =
        "http://openweathermap.org/img/wn/" +
        data.daily[3].weather[0].icon +
        "@2x.png";
      // day five Dom
      var dayFiveTemp = document.getElementById("day-five-temp");
      var dayFiveWind = document.getElementById("day-five-wind");
      var dayFiveUvi = document.getElementById("day-five-UV");
      var dayFiveIcon = document.getElementById("fiveicon");
      var dayFiveHumid = document.getElementById("day-five-humidity");
      var dayFiveDesc = document.getElementById("day-five-description");
      // displaying day five
      dayFiveTemp.textContent = data.daily[4].temp.day + "°C";
      dayFiveHumid.textContent = "humidity is: % " + data.daily[4].humidity;
      dayFiveDesc.textContent = data.daily[4].weather[0].description;
      dayFiveWind.textContent =
        "wind speed of " + data.daily[4].wind_speed + " km/h";

      dayFiveUvi.textContent = "uv index is " + data.daily[4].uvi;
      dayFiveIcon.src =
        "http://openweathermap.org/img/wn/" +
        data.daily[4].weather[0].icon +
        "@2x.png";
      return data;
    });
}

//  I want to collect user input to form HTTP requests.
var formSubmitHandler = function (event) {
  event.preventDefault();
  var cityname = cityInputEL.value.trim();
  if (cityname) {
    getApi(cityname);
    cityInputEL.value = "";
  } else {
    alert("Please enter a city name");
    console.log(event);
  }
};

formEl.addEventListener("submit", formSubmitHandler);

// todo ===>
// set save input value with local Storage and render them.
// make api url  dynamic
