function validateUsername(username) {
    return /^[a-zA-Z0-9]+$/.test(username);
}

function validatePassword(password) {
    return password.length >= 6;
}

// Example usage:
var username = "JohnDoe123";
var password = "abc123";

if (validateUsername(username) && validatePassword(password)) {
    console.log("Username and password are valid.");
} else {
    console.log("Invalid username or password.");
}
