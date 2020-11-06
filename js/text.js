function calculateMyAge(){
    "use strict";
    var myAge = document.getElementById("ages"),
        years = document.getElementById("year"),
        month = document.getElementById("month"),
        days = document.getElementById("days"),
        hours = document.getElementById("hours"),
        minutes = document.getElementById("minutes"),
        secound = document.getElementById("secound");

    years.innerHTML = "your age in years = " + myAge.value + " Years";
    month.innerHTML = "your age in months = " + myAge.value * 12 + " month";
    days.innerHTML = "your age in days = " + myAge.value * 12 * 30 + " days";
    hours.innerHTML = "your age in hours = " + myAge.value * 12 * 30 * 24 + " hours";
    minutes.innerHTML = "your age in minutes = " + myAge.value * 12 * 30 * 24 * 60 + " minutes";
    secound.innerHTML = "your age in secound = " + myAge.value * 12 * 30 * 24 * 60 * 60 + " secound";
}