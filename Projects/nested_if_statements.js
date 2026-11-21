const isLoggedIn = true;
const isAdmin = false;

if (isLoggedIn) {
    if (isAdmin) {
        console.log("Welcome to Admin Dashboard");
    } else {
        console.log("You are not an admin");
    }
} else {
    console.log("Please login first");
}