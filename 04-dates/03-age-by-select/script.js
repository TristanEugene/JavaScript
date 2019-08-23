/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const button = document.getElementById("run");
    button.addEventListener("click", function () {

        let userDays = document.getElementById("dob-day").value;
        let userMonths = document.getElementById( "dob-month").value;
        let userYears = document.getElementById( "dob-year").value;

        var day = new Date();
        var yearToday = day.getFullYear();
        var month = day.getMonth() - userMonths + 1;
        var days = day.getDate() - userDays;

        if (month >= 0 && days >= 0){
            var age = yearToday - userYears;
        } else {
            var age = yearToday - userYears -1;
        }

        alert("you are " + age + " years old");


    })

})();
