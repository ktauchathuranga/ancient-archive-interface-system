document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting by default

        // Call the validateForm function and pass the form as an argument
        if (!validateForm(form)) {
            // If the validation fails, do not submit the form
            return;
        }

        // If the validation passes, you can submit the form or perform other actions
        // For example, you can submit the form programmatically:
        // form.submit();
    });
});

function validateForm(form) {
    // Predefined username and password for validation
    const predefinedUsername = "Navodya";
    const predefinedPassword = "@Navodya123";

    // Get the input values
    const username = form.querySelector('input[type="text"]').value;
    const password = form.querySelector('input[type="password"]').value;

    // Regular expressions for validation
    const usernameRegex = /^[a-zA-Z0-9]+$/; // Alphanumeric characters
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}$/; // At least one uppercase letter, one lowercase letter, one number, and one special character

    // Validate the username
    if (!usernameRegex.test(username)) {
        alert('Username must contain only alphanumeric characters (both uppercase and lowercase letters and numbers).');
        return false; // Prevent form submission
    }

    // Validate the password
    if (!passwordRegex.test(password)) {
        alert('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
        return false; // Prevent form submission
    }

    // Check if the username and password match the predefined values
    if (username === predefinedUsername && password === predefinedPassword) {
        alert('Login successful!');
        // Here you can redirect the user to another page or perform other actions
        return true; // Allow form submission
    } else {
        alert('Incorrect username or password.');
        return false; // Prevent form submission
    }
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password-field");
    var toggleButton = document.getElementById("toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.checked = true;
    } else {
        passwordInput.type = "password";
        toggleButton.checked = false;
    }
}
