//const endpoint = "http://thecatapi.com/api/images/get?format=src&type=gif"
//const endpoint = "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=dcda2c22f5e76c05307dd52cf7911777\n";
const key = "dcda2c22f5e76c05307dd52cf7911777\n";
const endpoint = `https://api.openweathermap.org/data/3.0/onecall?lat=43.51&lon=-79.88&appid=${key}`;
//const endpoint = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${key}`;

// Fetching data from the API
fetch(endpoint)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        // Log the data once it's retrieved
        console.log(data);
    })
    .catch(error => {
        // Log any errors that occur during the fetch
        console.error("There was a problem with the fetch operation:", error);
    });
