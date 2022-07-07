### Weater Travel App

This app is intended to help you paln your next adventure. Choose a City by entering it into the text area and the app will show you the current conditions there. It is supposed to show you the 5 day forecast for that city but that feature is still in development. Update may follow, or not.


#### Technologies Used on this Project include:

- ### HTML
- ### CSS
- ### JavaScript
- ### BootStrap
- ### JQuery


#### URL of Deployed Website:

[Deployed Website](https://onlymehere.github.io/weather-travel-app/)

#### GitHub Repository:

[GitHub Repository](https://github.com/OnlyMeHere/weather-travel-app)

#### Code Sippits of Significance:

##### This code renders the data to the page in real time.

` // ----receives the current day data and renders it to the page
 var currentDayCard = document.getElementById("currentDay");
 var currentDayHeading = document.createElement("h3");
 currentDayHeading.textContent = userInputEl;
 currentDayCard.appendChild(currentDayHeading);
 var currentDayTemp = document.createElement("h5");
 currentDayTemp.textContent = "Temp: " + data.current.temp + " F";
 currentDayCard.appendChild(currentDayTemp);
 var currentDayWind = document.createElement("h5");
 currentDayWind.textContent = "Wind Speed: " + data.current.
wind_speed + "mph";
 currentDayCard.appendChild(currentDayWind);
 var currentDayHumidity = document.createElement("h5");
 currentDayHumidity.textContent = "Humidity: " + data.current.
humidity + " %";
 currentDayCard.appendChild(currentDayHumidity);
 var currentDayUvInex = document.createElement("h5");
 currentDayUvInex.textContent = "UV Index: " + data.current.uvi;
 currentDayCard.appendChild(currentDayUvInex);`



#### GIF of page in acton:


![GIF of page in action](./assets/images/Weather%20Travel%20App.gif)


#### Contact Me:

[My LinkedIn](linkedin.com/in/jamesbennett1here)

[My Git Hub](https://github.com/OnlyMeHere)



