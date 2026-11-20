const isLoggedIn = true;
const isAdmin = false;

if (isLoggedIn && isAdmin) {
    console.log("Access granted to admin panel");
}   else {
    console.log("Access denied");
}
// Foundation of permission-based interfaces. Actual authorization must also be enforced by your backend.

// logical_opreators2.js demonstrates the logical AND (&&) operator for admin access:


// isLoggedIn says whether the user is logged in.
// isAdmin says whether the user has administrator privileges.

// The && operator requires both conditions to be true:

// Logged in	Admin	Result
// true	true	Access granted
// true	false	Access denied
// false	true	Access denied
// false	false	Access denied
// Here:


// equals false, so the output is:


// The final comment correctly notes that real authorization must also be checked on the backend, not only in JavaScript. File: logical_opreators2.js
