/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    //change target into current date and hour

    const date = new Date();
    const name = document.getElementById( "target");
    const weekdays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Januari", "Februari", "March", "April", "May", "J​une", "July", "August", "September", "October", "November", "December"];

    var text = weekdays[date.getDay()] + " " + date.getDate() + " "
        + months[date.getMonth()] + " " + date.getFullYear()
        + ", " + date.getHours() + "h" + ("0" + date.getMinutes()).slice(-2);
    name.innerHTML= text ;


})();
