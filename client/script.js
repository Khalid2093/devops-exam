document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from the API
    fetch('http://localhost:3000')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // Display the result in the HTML element with id 'result'
            document.getElementById('result').textContent = data;
        })
        .catch(error => {
            // Handle errors
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('result').textContent = 'Failed to fetch data from the API';
        });
});
