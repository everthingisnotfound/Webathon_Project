function validateEmail(email) {
    // Regular expression for a basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Example usage:
var email = "user@example.com";

if (validateEmail(email)) {
    console.log("Email is valid.");
} else {
    console.log("Invalid email.");
}

function validatePassword(password) {
    return password.length >= 6;
}