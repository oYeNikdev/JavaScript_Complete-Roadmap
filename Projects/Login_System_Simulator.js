const userEmail = "shreya@gmail.com"; // To run change email
const userPassword = "123456"; // To run change password

if (userEmail === "" || userPassword === "") {
    console.log("Please fill in the both box.");
} else if (
    userEmail === "shreya@gmail.com" &&
    userPassword === "123456"
) {
    console.log("Login Successful!");
}
else {
    console.log("Invalid credentials");
}
