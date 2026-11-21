const membership = "Premium";

switch (membership) {
    case "Basic":
        console.log("Monthly Fee: 500")
        break;
    case "Standard":
        console.log("Monthly Fee: 1000")
        break;
    case "Premium":
        console.log("Monthly Fee: 1500")
        break;
    default:
        console.log("Invalid membership plan")
}