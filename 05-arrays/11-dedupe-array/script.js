/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    var button = document.getElementById("run");
    button.addEventListener("click", function () {

        function find_duplicate_in_array(arra1) {
            var object = {};
            var result = [];

            arra1.forEach(function (item) {
                if (!object[item])
                    object[item] = 0;
                object[item] += 1;
            })

            for (var prop in object) {
                if (object[prop] >= 2) {
                    result.push(prop);
                }
            }

            return result;

        }

        console.log(find_duplicate_in_array(["cerise", "durian", "pomme", "poire", "fraise", "tomate", "orange", "mandarine", "fraise", "durian", "pêche", "cerise", "raisin", "cerise",]));

    })

})();
