

var lat = 0;
var lon = 0;
var userInputEl = "";
var futureDate = [];
var currentDate = "";
var dayF1 = [];
var monthF1= [];
var yearF1= [];

var startBtn = document.getElementById("startBtn");

var userInputEl = document.getElementById("userInput");


startBtn.addEventListener("click", function(event){
    event.preventDefault()
    cityLookUp(userInputEl.value);
    console.log("event"+event);
    console.log("userInputEl = " + userInputEl);

});
//  -- the function above waits for the text input to be entered
//  -- and the button clicked

function cityLookUp(userInputEl) {
    // -- clears previous search results

    // -- calls the geo location API to get latitude and longitude of requested city to input those values in the second API below
    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + userInputEl + "&limit=5&appid=f1854a42b65c3a76fa9e1197b0e5cd1d")
        .then(function(response) {
            console.log("Geo-Location = " + response);
            return response.json();
        })
         .then(function(geodata) {
            console.log("Geo Data = ", geodata);
            lat = geodata[0].lat;
            lon = geodata[0].lon;
            console.log("lat = " + lat);
            console.log("lon = " + lon);

        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon +"&units=imperial&appid=f1854a42b65c3a76fa9e1197b0e5cd1d")
            // --- calls out to the API for weather data
         .then(function(response) {
            console.log("response", response)
            return response.json();
            // ---receives the data and parses it from a string to an object
         })
         .then(function (data) {
            console.log("data", data)

            // --new Date() grabs the current date and time




            // ----receives the current day data and renders it to the page
            
            function timeStamp() {
                let date = new Date();
                // let cDay = date.getDay();
                let cDate = date.getDate();
                let cMonth = date.getMonth();
                let cYear = date.getFullYear();
    
                return `${cMonth+1} / ${cDate} / ${cYear}`
            };

            let currentDayDiv = document.getElementById("currentDay");
            let currentDayCard = document.createElement("div");
            currentDayDiv.appendChild(currentDayCard);
            currentDayCard.setAttribute("class", "card");
            let currentDayBody = document.createElement("div");
            currentDayCard.appendChild(currentDayBody);
            currentDayBody.setAttribute("class", "card-body");
            let currentDayDate = document.createElement("h3");
            currentDayDate.setAttribute("class", "card-title");
            currentDayDate.textContent = timeStamp();
            currentDayBody.appendChild(currentDayDate);
            let currentDayHeading = document.createElement("h3");
            currentDayHeading.setAttribute("class", "card-text");
            currentDayHeading.textContent = userInputEl;
            currentDayBody.appendChild(currentDayHeading);
            let currentDayTemp = document.createElement("h5");
            currentDayTemp.setAttribute("class", "card-text");
            currentDayTemp.textContent = "Temp: " + data.current.temp + " F";
            currentDayBody.appendChild(currentDayTemp);
            let currentDayWind = document.createElement("h5");
            currentDayWind.setAttribute("class", "card-text");
            currentDayWind.textContent = "Wind Speed: " + data.current.wind_speed + "mph";
            currentDayBody.appendChild(currentDayWind);
            let currentDayHumidity = document.createElement("h5");
            currentDayHumidity.setAttribute("class", "card-text");
            currentDayHumidity.textContent = "Humidity: " + data.current.humidity + " %";
            currentDayBody.appendChild(currentDayHumidity);
            let currentDayUvInex = document.createElement("h5");
            currentDayUvInex.setAttribute("class", "card-text");
            currentDayUvInex.textContent = "UV Index: " + data.current.uvi;
            currentDayBody.appendChild(currentDayUvInex);

        

        

            // -- below renders the five day forecast to the page

            for (i = 1; i <= 6; i++) {
                function futureDate() {
                let date = new Date() 
                date.setDate(date.getDate() + i)
                let fDate = date.getDate();
                let fMonth = date.getMonth();
                let fYear = date.getFullYear();
                return `${fMonth+1} / ${fDate} / ${fYear}`
                };
                let futureDayDiv = document.getElementById("futureDay");
                let futureDayCard = document.createElement("div");
                futureDayDiv.appendChild(futureDayCard);
                futureDayCard.setAttribute("class", "card");
                let futureDayBody = document.createElement("div");
                futureDayCard.appendChild(futureDayBody);
                futureDayBody.setAttribute("class", "card-body");
                let futureDayHeading = document.createElement("h5");
                futureDayHeading.setAttribute("class", "card-title");
                futureDayHeading.textContent = futureDate();
                futureDayBody.appendChild(futureDayHeading);
                let futureDayTemp = document.createElement("h5");
                futureDayTemp.setAttribute("class", "card-text");
                futureDayTemp.textContent = "Temp: " + data.daily[i].feels_like.day + " F";
                futureDayBody.appendChild(futureDayTemp);
                let futureDayWind = document.createElement("h5");
                futureDayWind.setAttribute("class", "card-text");
                futureDayWind.textContent = "Wind Speed: " + data.daily[i].wind_speed + "mph";
                futureDayBody.appendChild(futureDayWind);
                let futureDayHumidity = document.createElement("h5");
                futureDayHumidity.setAttribute("class", "card-text");
                futureDayHumidity.textContent = "Humidity: " + data.daily[i].humidity + " %";
                futureDayBody.appendChild(futureDayHumidity);
                let futureDayUvInex = document.createElement("h5");
                futureDayUvInex.setAttribute("class", "card-text")
                futureDayUvInex.textContent = "UV Index: " + data.daily[i].uvi;
                futureDayBody.appendChild(futureDayUvInex);


            };
        
            // ----- below puts this current day data into local storage for retreaval from search history dropdown. 

            // const searchOne {
            // 
            // cityName: userInputEl
            // 
            // }
            // 




        });


    });










    






};

















    // function cityLookUp(cityInfo) {
    
    // console.log(cityInfo);

    // var cityQstEl = "";

    // --- The one that doesn't have 5 day forecast
    // var reqUrl = `https://api.openweathermap.org/data/2.5/weather?q=` + 
    // cityInfo + `&appid=f1854a42b65c3a76fa9e1197b0e5cd1d&units=imperial`;
   