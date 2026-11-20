const isLoggedIn = true;
const isAdmin = false;

if (isLoggedIn && isAdmin) {
    console.log("Access granted to admin panel");
}   else {
    console.log("Access denied");
}
// Foundation of permission-based interfaces. Actual authorization must also be enforced by your backend.

