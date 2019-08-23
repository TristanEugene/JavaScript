/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var button = document.getElementById("run");
    button.addEventListener("click", function () {

        // here get value of input

        var year = document.getElementById("year").value;
        var text = "";
        var months = ["January", "February", "March", "April", "May", "June", "july", "August", "September", "October", "november", "december"];

        for (let m = 0; m < 12; m++) {
            var date = new Date(year, m, 13);
            if (date.getDay() === 5) {
                text += months[date.getMonth()] + "\n";
            }
        }

        alert(text);

    })

})();
