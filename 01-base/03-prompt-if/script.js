/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var person = prompt("You want some cake?", "Yes/No");
    if (person == "yes" || person == "Yes") {
        alert( "Congratulations.");
    } else {
        alert( "More cake for me then :p !");
    }

})();