// Function to handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name && email && message) {
        // Display success message
        document.getElementById('response-message').innerHTML = `
            <p>Thank you, ${name}! Your message has been sent.</p>
        `;
        document.getElementById('response-message').style.color = 'green';

        // Optionally, clear form fields
        document.getElementById('contact-form').reset();
    } else {
        // Display error message
        document.getElementById('response-message').innerHTML = `
            <p>Please fill in all fields.</p>
        `;
        document.getElementById('response-message').style.color = 'red';
    }
});
