const memberName = "John Doe";

// let monthlyFee = 1500;

// let months = 3;
// Calculate total months Fee
// let totalfee = monthlyFee * months;
// console.log("Member:", memberName);
// console.log("Total Fee:", totalfee);

// 7 Fundamental data types 7 Primitve data types & 1 imp non-primitive data types
// Imagine you're building your gym management system. You need to store information about your members
// Primitive Data Types
// Member Name = Shreya #String 
// Age = 20 # Number
// Monthly Fee = $100 #Boolean
// Membership Active = true #Undefiend
// Membership Phone number = 9875796483 #Null
// Non-Primitive Data Types
// Javascript can store value diff. ways.
// "Object" Store Collections of related data. 
// # objects, arrays, functions

// Real world Example
// A. String 
const memeberName = "Sherya";
const email = "sherya@example.com";
const city = "Lucknow";

let a = 2300;
let b = "1300";

console.log(typeof a);
console.log(typeof b);
// Real world use
// User Registration
// Login Forms
// Product Names
// Search Bars

// B. Number
const monthlyFee = 1500;
const age = 20;
const discount = 10.5;

const total = monthlyFee * 3;
console.log(total);

// Real World use 
// Shopping cart calculations
// Payment Systems
// Product Quantity
// Analytics

// C. Boolean True or False
const isLoggedIn = true;
const isMemebershipActive = false;

if (isLoggedIn) {
     console.log("Welcome back!");
}
// Real-world use:
// - Login authentication state
// - Admin permissions
// - Payment success
// - Membership status

// D. Undefined - Value Not assigned
// let memberAge;
// console.log(memberAge); // Output: undefined, Real world situation: A user has registered, but hasn't provided their age yet.

// E. Null - Intentionally empty
let profilePicture = null;
// real-world situation: A member hasn't uploaded a profile picture.

// IMP Diff. 
// undefined - Value hasn't been assigned.
// null - We intentionally set an empty value.

// 3. The typeof operator 
// Professional use while debugging
// Use typeof
const name = "Sherya";
const fee = 1500;
const isActive = true;

console.log(typeof name);
console.log(typeof fee);
console.log(typeof isActive);

// One javascript surprice
console.log(typeof null); // Output: "object" (this is a known quirk in JavaScript)