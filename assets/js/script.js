var city = "San Francisco"
var country = "US"



var reqUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=f1854a42b65c3a76fa9e1197b0e5cd1d&units=imperial';

// city search returns current and future weather


fetch(reqUrl)
    // --- calls out to the API for data
    .then(function(response) {
        console.log("response", response)
        return response.json();
    // ---receives the data and parses it from a string to and object
    })
    .then(function (data) {
        console.log("data", data)
        // ----receives the object and passes it to be rendered on the page

    });

// that city is then added to search history

// that city's name, the date, an icon of weather conditions
// temperature, humdity, wind speed, UV index.

// the UV index is color coded: favorable/moderate/severe


// future conditions are presented as 5 day forcast that
// displayed with an icon representation of conditions, 
// temperature, wind speed and humidity



// clicking on the city in search history diplays the
// current weather and 5 day forecast for that city