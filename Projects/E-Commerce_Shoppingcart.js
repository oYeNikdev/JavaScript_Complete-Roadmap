const lenovo = 50000;
const Mouse = 1000;
const discount =10;

const totalAmount = lenovo + Mouse;
const discountAmount = totalAmount * discount / 100;
const finalAmount = totalAmount - discount;


// comparison
const isAbove45000 = finalAmount > 45000;


console.log("Original:", totalAmount);
console.log("Discount:", discountAmount);
console.log("Final Amount:", finalAmount);
console.log("Above 45000?", isAbove45000);