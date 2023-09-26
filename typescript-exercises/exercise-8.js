// Write a JavaScript program that determines if a given year is a leap year. Prompt the user for a year and display a message on the console indicating whether it is a leap year or not.
function leap(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log("The year ".concat(year, " is a leap year."));
    }
    else {
        console.log("The year ".concat(year, " is NOT a leap year."));
    }
}
leap(2022);
leap(2023);
leap(2000);
