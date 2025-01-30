document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send login credentials to the server for validation
    fetch('https://your-backend-api.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to index.html (home page)
            window.location.href = 'index.html'; 
        } else {
            alert('Invalid username or password. Try again.');
        }
    })
    .catch(error => {
        alert('Error logging in: ' + error);
    });
});
