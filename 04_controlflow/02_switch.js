//Switch statement

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March"); //without break all remaining statements execute except default
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Not match.");
        break;
}

//to match string
const months = "jan"

switch (months) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("Feb");
        break;

    default:
        console.log("Not match.");
        break;
}
