const endpoint = `https://opentdb.com/api.php?amount=10`;

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
