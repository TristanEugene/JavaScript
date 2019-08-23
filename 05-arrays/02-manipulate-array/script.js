/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here

    var button = document.getElementById("run");
    button.addEventListener("click", function () {

        var first = fruits.shift(); // remove Apple from the front

        var last = fruits.pop(); // remove cerise (from the end)

        var newLength = fruits.unshift('Banana'); // add to the front

        var newLength = fruits.push('Kiwi'); // add to the end

        console.log(fruits)

    })

})();
