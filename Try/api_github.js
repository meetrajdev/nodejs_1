//const endpoint = "http://thecatapi.com/api/images/get?format=src&type=gif"
const endpoint = "https://api.github.com/users";
//const endpoint = "https://api.github.com/users/mojombo";

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
        //console.log(data);

        // Modifying data start
/*        const dataMap = new Set(data);
        for(let curr in dataMap) {
            console.log(curr);
        }*/

        
        // Modifying data start

    })
    .catch(error => {
        // Log any errors that occur during the fetch
        console.error("There was a problem with the fetch operation:", error);
    });
