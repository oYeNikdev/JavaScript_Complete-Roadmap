const monthlyFee = 1500;
const months = 3;
const discount = 15;

const totalAmount = monthlyFee * months;
const discountamount = totalAmount * discount / 100;

const finalAmount = totalAmount - discountamount;

console.log("Original:", totalAmount );
console.log("Discount:", discountamount);
console.log("Final Amount:", finalAmount);