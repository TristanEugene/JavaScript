/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

// your code here
    document.getElementById("pass-one").setAttribute("maxlength","10");
    let i = 0;
    document.getElementById("pass-one").addEventListener("input", function () {
        i = document.getElementById("pass-one").value.length;
        document.getElementById("counter").innerHTML = i + "/10";
    });

})();
