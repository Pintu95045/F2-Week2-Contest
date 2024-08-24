// Get references to the input fields and message spans
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const emailMessage = document.getElementById("emailMessage");
const passwordMessage = document.getElementById("passwordMessage");

/**
 * Function to validate email format.
 * @param {string} email - The email string to validate.
 * @returns {boolean} - Returns true if the email is valid, otherwise false.
 */
function validateEmail(email) {
    if (email.length > 3 && email.includes("@") && email.includes(".")) {
        emailMessage.textContent = "All good to go!";
        emailMessage.className = "success"; // Apply success class for valid email
        return true;
    } else {
        emailMessage.textContent = "Email must be longer than 3 characters and contain '@' and '.'";
        emailMessage.className = "error"; // Apply error class for invalid email
        return false;
    }
}

/**
 * Function to validate password length.
 * @param {string} password - The password string to validate.
 * @returns {boolean} - Returns true if the password is valid, otherwise false.
 */
function validatePassword(password) {
    if (password.length > 8) {
        passwordMessage.textContent = "All good to go!";
        passwordMessage.className = "success"; // Apply success class for valid password
        return true;
    } else {
        passwordMessage.textContent = "Password must be longer than 8 characters.";
        passwordMessage.className = "error"; // Apply error class for invalid password
        return false;
    }
}

// Add event listener for email input changes
emailField.addEventListener("input", () => {
    validateEmail(emailField.value);
});

// Add event listener for password input changes
passwordField.addEventListener("input", () => {
    validatePassword(passwordField.value);
});

// Add event listener for form submission
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Validate email and password
    const isEmailValid = validateEmail(emailField.value);
    const isPasswordValid = validatePassword(passwordField.value);

    // If both email and password are valid
    if (isEmailValid && isPasswordValid) {
        const confirmSignup = confirm("Are you sure you want to sign up?");
        if (confirmSignup) {
            alert("Successful signup!");
            // Optionally redirect to another page
            // window.location.href = "success.html";
        } else {
            // Clear inputs and reset the page
            emailField.value = "";
            passwordField.value = "";
            emailMessage.textContent = "";
            passwordMessage.textContent = "";
            window.location.reload();
        }
    }
});
