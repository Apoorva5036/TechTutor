document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Send sign-up data to the server
    fetch('https://your-backend-api.com/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: newUsername, password: newPassword })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Sign Up successful! Redirecting to login...");
            window.location.href = "login.html";
        } else {
            alert("Error: " + data.message);
        }
    })
    .catch(error => {
        alert("Error signing up: " + error);
    });
});
